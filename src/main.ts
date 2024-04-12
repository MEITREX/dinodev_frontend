import '@mdi/font/css/materialdesignicons.css'

import { createApp, h, provide } from 'vue'

import App from './App.vue'

import 'vuetify/styles'
import { registerPlugins } from '@/setup'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { apolloClient } from '@/setup/apolloClient'

const app = createApp({
  setup () {
    provide(DefaultApolloClient, apolloClient)
  },

  render: () => h(App),
})

registerPlugins(app)

app.mount('#app')
