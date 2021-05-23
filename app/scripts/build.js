require('esbuild').build({
  entryPoints: ['src/app.jsx'],
  bundle: true,
  outfile: 'src/out.js'
}).catch(() => process.exit(1))