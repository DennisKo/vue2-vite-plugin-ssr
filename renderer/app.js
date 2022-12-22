import Vue, { h } from 'vue'
import PageLayout from './PageLayout.vue'

export { createApp }

function createApp(pageContext) {
  const { Page, pageProps } = pageContext
  const PageWithLayout = {
    render() {
      return h(
        PageLayout,
        {},
        [
          h(Page, pageProps)
        ]
      )
    }
  }
  const app = new Vue(PageWithLayout)
  return app
}