import { readFile, rm, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

const projectRoot = fileURLToPath(new URL('../', import.meta.url))
const outputPath = fileURLToPath(new URL('../dist/index.html', import.meta.url))
const serverEntry = new URL('../dist-ssr/entry-server.js', import.meta.url)
const serverOutput = fileURLToPath(new URL('../dist-ssr', import.meta.url))

const [{ render }, template] = await Promise.all([
  import(serverEntry.href),
  readFile(outputPath, 'utf8'),
])

const rootMarker = '<div id="root"></div>'
if (!template.includes(rootMarker)) {
  throw new Error(`Unable to find the application root in ${outputPath.replace(projectRoot, '')}`)
}

const appHtml = render().replace(/\b(src|href)="\/(?!\/)/g, '$1="./')
const html = template.replace(rootMarker, `<div id="root">${appHtml}</div>`)
await writeFile(outputPath, html)
await rm(serverOutput, { recursive: true, force: true })
