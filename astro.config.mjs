// @ts-check
import { defineConfig } from 'astro/config';

const repo = process.env.GITHUB_REPOSITORY?.split('/')?.[1] ?? '';
const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
	site: 'https://rebooted.education',
	base: isGitHubActions && repo ? `/${repo}` : '/',
});
