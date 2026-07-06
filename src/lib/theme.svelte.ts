import { browser } from '$app/environment';

export type Theme = 'light' | 'dark';

function initial(): Theme {
	if (browser && !document.documentElement.classList.contains('dark')) {
		return 'light';
	}
	return 'dark';
}

class ThemeState {
	current: Theme = $state(initial());

	set(theme: Theme) {
		this.current = theme;
		if (!browser) return;

		document.documentElement.classList.toggle('dark', theme === 'dark');
		localStorage.setItem('theme', theme);
	}

	toggle() {
		this.set(this.current === 'dark' ? 'light' : 'dark');
	}
}

export const theme = new ThemeState();
