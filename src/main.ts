import '@mdi/font/css/materialdesignicons.css'

import { createApp, h, provide } from 'vue'

import App from './App.vue'

import 'vuetify/styles'
import { registerPlugins } from '@/setup'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { apolloClient } from '@/setup/apollo-client'
import { useErrorManager } from '@/utils/error-manager'

const app = createApp({
  setup () {
    provide(DefaultApolloClient, apolloClient)
  },

  render: () => h(App),
})

app.config.errorHandler = useErrorManager().catchError
registerPlugins(app)

app.mount('#app')
