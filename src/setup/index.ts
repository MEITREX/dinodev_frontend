import type { App } from 'vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createPinia } from 'pinia'
import router from '@/router'

export function registerPlugins(app: App): void {
  const vuetify = createVuetify({
    components,
    directives
  })

  registerToast(app)
  app.use(createPinia())
  app.use(vuetify)
  app.use(router)
}
