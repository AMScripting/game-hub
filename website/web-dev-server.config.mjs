import { esbuildPlugin } from '@web/dev-server-esbuild';
import { hmrPlugin, presets } from '@open-wc/dev-server-hmr';
import { importMapsPlugin } from '@web/dev-server-import-maps';

/** Use Hot Module replacement by adding --hmr to the start command */
const hmr = process.argv.includes('--hmr');

export default /** @type {import('@web/dev-server').DevServerConfig} */ ({
  open: '/',
  rootDir: '.',
  watch: !hmr,
  nodeResolve: { browser: true, moduleDirectories: ['node_modules'], extensions: ['.mjs', '.js', '.ts', '.json'] },
  appIndex: 'index.html',
  plugins: [
    esbuildPlugin({ ts: true, json: true, target: 'auto' }),
    hmr && hmrPlugin({
      include: ['src/**/*'],
      presets: [presets.lit],
    }),
    importMapsPlugin({ // https://modern-web.dev/docs/dev-server/plugins/import-maps/
      inject: {
        importMap: {
          imports: {}
        }
      }
    }),
  ],
});
