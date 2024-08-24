import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Documentation',
			pagination: false,
			customCss: [
				'./src/theme.css'
				],
			social: {
				github: 'https://github.com/Joniator/',
			},
		}),
	],
});
