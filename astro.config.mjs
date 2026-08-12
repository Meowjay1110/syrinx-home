// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '脊髓空洞症之家',
			social: [
				{ 
					icon: 'github', 
					label: 'GitHub', 
					href: 'https://github.com/Meowjay1110/syrinx-home' 
				},
				{
					icon: 'email',
					label: 'Email',
					href: 'mailto:contact@syrinxhome.com'
				}
			],
			sidebar: [
				{
					label: '指引',
					items: [{ autogenerate: { directory: 'guides' } }],
				},
				{
					label: '经验',
					items: [{ autogenerate: { directory: 'experiences' } }],
				},
				{
					label: '参考',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
      		plugins: [starlightBlog()],
			lastUpdated: true,
			favicon: '/favicon.png',
			editLink: {
				baseUrl: 'https://github.com/Meowjay1110/syrinx-home/edit/master/'
			},
			components: {
				Footer: './src/components/NewFooter.astro'
			}
		}),
	],
});
