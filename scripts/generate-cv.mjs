import { readFile } from 'node:fs/promises';
import { createServer } from 'node:http';
import { basename, extname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';
import chromium from '@sparticuz/chromium';
import puppeteer from 'puppeteer-core';

const root = fileURLToPath(new URL('../build', import.meta.url));

const { values } = parseArgs({
	options: {
		name: { type: 'string' },
		phone: { type: 'string' },
		email: { type: 'string' },
		out: { type: 'string' }
	}
});

const query = new URLSearchParams();
if (values.name) query.set('name', values.name);
if (values.phone) query.set('phone', values.phone);
if (values.email) query.set('email', values.email);

const filename = `${(values.name ?? 'Arran James').replaceAll(' ', '_')}_FullStackWebDeveloper_CV.pdf`;
const output =
	values.out ??
	(query.size
		? fileURLToPath(new URL(`../${filename}`, import.meta.url))
		: join(root, filename));

const types = {
	'.html': 'text/html',
	'.css': 'text/css',
	'.js': 'text/javascript',
	'.json': 'application/json',
	'.png': 'image/png',
	'.jpg': 'image/jpeg',
	'.ico': 'image/x-icon',
	'.svg': 'image/svg+xml',
	'.pdf': 'application/pdf',
	'.txt': 'text/plain'
};

const server = createServer(async (request, response) => {
	const path = request.url.split('?')[0];
	for (const candidate of [path, `${path}.html`, join(path, 'index.html')]) {
		try {
			const file = await readFile(join(root, candidate));
			response.writeHead(200, {
				'content-type':
					types[extname(candidate)] ?? 'application/octet-stream'
			});
			response.end(file);
			return;
		} catch {
			continue;
		}
	}
	response.writeHead(404);
	response.end();
});

await new Promise((resolve) => server.listen(0, resolve));
const { port } = server.address();

const browser = await puppeteer.launch({
	args: [...chromium.args, '--no-sandbox'],
	defaultViewport: { width: 1316, height: 1080 },
	executablePath: await chromium.executablePath(),
	headless: true
});
const page = await browser.newPage();
await page.goto(
	`http://localhost:${port}/simple${query.size ? `?${query}` : ''}`,
	{
		waitUntil: 'networkidle0'
	}
);
await page.pdf({
	path: output,
	format: 'A4',
	scale: 0.58,
	printBackground: true,
	margin: { top: '4mm', right: '4mm', bottom: '4mm', left: '4mm' }
});

await browser.close();
server.close();
console.log(`Generated ${basename(output)} from /simple`);
