// export { render }

// import { createApp } from './app'


// async function render(pageContext) {

//     const app = createApp(pageContext)
//     app.$mount('#app')
// }

import { createApp } from './app'
export { render }

let app
async function render(pageContext) {
    app = createApp(pageContext)
    app.$mount('#app')

}
