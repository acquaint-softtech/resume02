import laravel from 'laravel-vite-plugin'
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ command, mode }) => {
    const env = loadEnv(mode, process.cwd(), '')
    return {
        plugins: [
            laravel([
                'resources/css/site.css',
                'resources/css/style.css',
                'resources/css/plugin.css',
                'resources/js/site.js',
                'resources/js/init.js',
            ])
        ],
        server: {
            open: env.APP_URL
        }
    }
});
