import {defineConfig} from 'vite';
import dts from 'vite-plugin-dts';
import glob from 'fast-glob';
import {visualizer} from 'rollup-plugin-visualizer';
import eslint from 'vite-plugin-eslint';
import {viteCommonjs} from '@originjs/vite-plugin-commonjs';

// libraries
const files = glob.sync(['./src/**/index.ts'])
    .map(file => {
        const key = file.match(/(?<=\.\/src\/).*(?=\.ts)/);
        return [key[0], file];
    });
const entries = Object.fromEntries(files);


// https://vitejs.dev/config/
export default defineConfig({

    plugins: [
        eslint(),
        viteCommonjs(),
        dts({
            insertTypesEntry: true,
        }),
        visualizer() as Plugin,
    ],
    build: {
        sourcemap: process.env.NODE_ENV !== 'production',
        outDir: 'dist',
        lib: {
            entry: entries,
            formats: ['es', 'cjs'],
            fileName: (format,entryName) => `${entryName}.${format}.js`,
        }
    },
});
