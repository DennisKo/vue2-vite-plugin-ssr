import { createRenderer } from 'vue-server-renderer';
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr'
import { createApp } from './app'

export { render }
export { passToClient }

const passToClient = ['pageProps']

async function render(pageContext) {
  const renderer = createRenderer()
  const app = createApp(pageContext)
  const appHtml = await renderer.renderToString(app)
  
  return escapeInject`<!DOCTYPE html>
    <html>
      <body>
        <div id="app">${dangerouslySkipEscape(appHtml)}</div>
      </body>
    </html>`
}