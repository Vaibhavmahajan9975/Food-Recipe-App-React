import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const pagesBase = repositoryName ? `/${repositoryName}/` : '/';

export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? pagesBase : '/',
  plugins: [
    react({
      include: /\.(js|jsx|ts|tsx)$/
    })
  ],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.js'
  }
});
