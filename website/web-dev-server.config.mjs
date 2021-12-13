import { esbuildPlugin } from '@web/dev-server-esbuild';
import { hmrPlugin, presets } from '@open-wc/dev-server-hmr';

/** Use Hot Module replacement by adding --hmr to the start command */
const hmr = process.argv.includes('--hmr');

export default /** @type {import('@web/dev-server').DevServerConfig} */ ({
  open: '/',
  rootDir: '.',
  watch: !hmr,
  nodeResolve: { browser: true, moduleDirectories: ['node_modules'], extensions: ['.mjs', '.js', '.ts', '.json'] },
  appIndex: 'index.html',
  plugins: [
    esbuildPlugin({
      loaders: {
        '.ts': 'ts',
        '.js': 'js',
        '.json': 'json',
      },
      target: 'esnext',
    }),
    hmr && hmrPlugin({
      include: ['src/**/*'],
      presets: [presets.lit],
    }),
  ],
});
