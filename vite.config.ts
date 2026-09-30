import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '')
  const cssAssetVersion = (env.CSS_ASSET_VERSION || 'local').replace(/[^a-zA-Z0-9_-]/g, '')

  return {
    plugins: [react()],
    base: './',
    build: {
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) =>
            assetInfo.name && /\.css$/i.test(assetInfo.name)
              ? `assets/[name]-[hash]-v${cssAssetVersion}[extname]`
              : 'assets/[name]-[hash][extname]',
        },
      },
    },
  }
})
