
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Optimisations agressives pour la production
    ...(mode === 'production' && {
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
          pure_funcs: ['console.log'],
          unused: true,
          dead_code: true,
        },
        mangle: {
          safari10: true,
        },
      },
    }),
    rollupOptions: {
      output: {
        manualChunks: {
          // Séparation plus granulaire pour réduire les chunks inutilisés
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-slot'],
          icons: ['lucide-react'],
          utils: ['clsx', 'tailwind-merge'],
        },
        // Optimisation des noms de chunks
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId ? chunkInfo.facadeModuleId.split('/').pop() : 'chunk';
          return `js/${facadeModuleId}-[hash].js`;
        },
        assetFileNames: (assetInfo) => {
          if (!assetInfo.name) {
            return `assets/[name]-[hash][extname]`;
          }
          
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          
          if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(assetInfo.name)) {
            return `img/[name]-[hash].${ext}`;
          }
          if (/\.(css)$/i.test(assetInfo.name)) {
            return `css/[name]-[hash].${ext}`;
          }
          return `assets/[name]-[hash].${ext}`;
        },
      },
      // Exclusion des dépendances inutiles
      external: (id) => {
        // Exclure les modules non critiques
        return false;
      },
    },
    cssCodeSplit: true,
    sourcemap: mode === 'development',
    reportCompressedSize: false,
    // Augmentation de la limite des chunks pour éviter les warnings
    chunkSizeWarningLimit: 1000,
    // Compression optimale
    assetsInlineLimit: 4096,
  },
  // Configuration du cache optimisée
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'lucide-react'],
    exclude: ['@tanstack/react-query'],
  },
  // Préchargement des modules critiques
  ssr: {
    noExternal: ['@radix-ui/*'],
  },
}));
