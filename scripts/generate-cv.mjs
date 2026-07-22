import { readFile } from 'node:fs/promises';
import { createServer } from 'node:http';
import { extname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import chromium from '@sparticuz/chromium';
import puppeteer from 'puppeteer-core';

const root = fileURLToPath(new URL('../build', import.meta.url));

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
await page.goto(`http://localhost:${port}/simple`, {
	waitUntil: 'networkidle0'
});
await page.pdf({
	path: join(root, 'Arran_James_FullStackWebDeveloper_CV.pdf'),
	format: 'A4',
	scale: 0.58,
	printBackground: true,
	margin: { top: '4mm', right: '4mm', bottom: '4mm', left: '4mm' }
});

await browser.close();
server.close();
console.log('Generated Arran_James_FullStackWebDeveloper_CV.pdf from /simple');
