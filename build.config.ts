import { build } from 'esbuild'
build({
  "entryPoints": ["./index.js"],
  "outdir": "./dist",
  "bundle": true,
  "minify": true,
  "target": "node16",
  "platform": "node"
})