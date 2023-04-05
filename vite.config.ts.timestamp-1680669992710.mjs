// vite.config.ts
import { defineConfig } from "file:///Users/imagine/project/packages/bear-jsutils/node_modules/vite/dist/node/index.js";
import dts from "file:///Users/imagine/project/packages/bear-jsutils/node_modules/vite-plugin-dts/dist/index.mjs";
import glob from "file:///Users/imagine/project/packages/bear-jsutils/node_modules/fast-glob/out/index.js";
import { visualizer } from "file:///Users/imagine/project/packages/bear-jsutils/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
import eslint from "file:///Users/imagine/project/packages/bear-jsutils/node_modules/vite-plugin-eslint/dist/index.mjs";
import { viteCommonjs } from "file:///Users/imagine/project/packages/bear-jsutils/node_modules/@originjs/vite-plugin-commonjs/lib/index.js";
var files = glob.sync(["./src/**/index.ts"]).map((file) => {
  const key = file.match(/(?<=\.\/src\/).*(?=\.ts)/);
  return [key[0], file];
});
var entries = Object.fromEntries(files);
var vite_config_default = defineConfig({
  plugins: [
    eslint(),
    viteCommonjs(),
    dts({
      insertTypesEntry: true
    }),
    visualizer()
  ],
  build: {
    sourcemap: process.env.NODE_ENV !== "production",
    rollupOptions: {
      external: ["dayjs"]
    },
    outDir: "packages/dist",
    lib: {
      entry: entries,
      formats: ["es", "cjs"],
      fileName: (format, entryName) => `${entryName}.${format}.js`
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvaW1hZ2luZS9wcm9qZWN0L3BhY2thZ2VzL2JlYXItanN1dGlsc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2ltYWdpbmUvcHJvamVjdC9wYWNrYWdlcy9iZWFyLWpzdXRpbHMvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2ltYWdpbmUvcHJvamVjdC9wYWNrYWdlcy9iZWFyLWpzdXRpbHMvdml0ZS5jb25maWcudHNcIjtpbXBvcnQge2RlZmluZUNvbmZpZ30gZnJvbSAndml0ZSc7XG5pbXBvcnQgZHRzIGZyb20gJ3ZpdGUtcGx1Z2luLWR0cyc7XG5pbXBvcnQgZ2xvYiBmcm9tICdmYXN0LWdsb2InO1xuaW1wb3J0IHt2aXN1YWxpemVyfSBmcm9tICdyb2xsdXAtcGx1Z2luLXZpc3VhbGl6ZXInO1xuaW1wb3J0IGVzbGludCBmcm9tICd2aXRlLXBsdWdpbi1lc2xpbnQnO1xuaW1wb3J0IHt2aXRlQ29tbW9uanN9IGZyb20gJ0BvcmlnaW5qcy92aXRlLXBsdWdpbi1jb21tb25qcyc7XG5cbi8vIGxpYnJhcmllc1xuY29uc3QgZmlsZXMgPSBnbG9iLnN5bmMoWycuL3NyYy8qKi9pbmRleC50cyddKVxuICAgIC5tYXAoZmlsZSA9PiB7XG4gICAgICAgIGNvbnN0IGtleSA9IGZpbGUubWF0Y2goLyg/PD1cXC5cXC9zcmNcXC8pLiooPz1cXC50cykvKTtcbiAgICAgICAgcmV0dXJuIFtrZXlbMF0sIGZpbGVdO1xuICAgIH0pO1xuY29uc3QgZW50cmllcyA9IE9iamVjdC5mcm9tRW50cmllcyhmaWxlcyk7XG5cblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG5cbiAgICBwbHVnaW5zOiBbXG4gICAgICAgIGVzbGludCgpLFxuICAgICAgICB2aXRlQ29tbW9uanMoKSxcbiAgICAgICAgZHRzKHtcbiAgICAgICAgICAgIGluc2VydFR5cGVzRW50cnk6IHRydWUsXG4gICAgICAgIH0pLFxuICAgICAgICB2aXN1YWxpemVyKCkgYXMgUGx1Z2luLFxuICAgIF0sXG4gICAgYnVpbGQ6IHtcbiAgICAgICAgc291cmNlbWFwOiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nLFxuICAgICAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICAgICAgICBleHRlcm5hbDogWydkYXlqcyddLFxuICAgICAgICB9LFxuICAgICAgICBvdXREaXI6ICdwYWNrYWdlcy9kaXN0JyxcbiAgICAgICAgbGliOiB7XG4gICAgICAgICAgICBlbnRyeTogZW50cmllcyxcbiAgICAgICAgICAgIGZvcm1hdHM6IFsnZXMnLCAnY2pzJ10sXG4gICAgICAgICAgICBmaWxlTmFtZTogKGZvcm1hdCxlbnRyeU5hbWUpID0+IGAke2VudHJ5TmFtZX0uJHtmb3JtYXR9LmpzYCxcbiAgICAgICAgfVxuICAgIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBc1QsU0FBUSxvQkFBbUI7QUFDalYsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sVUFBVTtBQUNqQixTQUFRLGtCQUFpQjtBQUN6QixPQUFPLFlBQVk7QUFDbkIsU0FBUSxvQkFBbUI7QUFHM0IsSUFBTSxRQUFRLEtBQUssS0FBSyxDQUFDLG1CQUFtQixDQUFDLEVBQ3hDLElBQUksVUFBUTtBQUNULFFBQU0sTUFBTSxLQUFLLE1BQU0sMEJBQTBCO0FBQ2pELFNBQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJO0FBQ3hCLENBQUM7QUFDTCxJQUFNLFVBQVUsT0FBTyxZQUFZLEtBQUs7QUFJeEMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFFeEIsU0FBUztBQUFBLElBQ0wsT0FBTztBQUFBLElBQ1AsYUFBYTtBQUFBLElBQ2IsSUFBSTtBQUFBLE1BQ0Esa0JBQWtCO0FBQUEsSUFDdEIsQ0FBQztBQUFBLElBQ0QsV0FBVztBQUFBLEVBQ2Y7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNILFdBQVcsUUFBUSxJQUFJLGFBQWE7QUFBQSxJQUNwQyxlQUFlO0FBQUEsTUFDWCxVQUFVLENBQUMsT0FBTztBQUFBLElBQ3RCO0FBQUEsSUFDQSxRQUFRO0FBQUEsSUFDUixLQUFLO0FBQUEsTUFDRCxPQUFPO0FBQUEsTUFDUCxTQUFTLENBQUMsTUFBTSxLQUFLO0FBQUEsTUFDckIsVUFBVSxDQUFDLFFBQU8sY0FBYyxHQUFHLGFBQWE7QUFBQSxJQUNwRDtBQUFBLEVBQ0o7QUFDSixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
