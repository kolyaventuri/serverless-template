import tsconfigPaths from 'vite-tsconfig-paths';
import {defineConfig} from 'vite';
/// <reference types="vitest" />

export default defineConfig({
  plugins: [tsconfigPaths()],
});
