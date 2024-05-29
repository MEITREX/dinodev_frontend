import type { App } from 'vue'
import { createPinia } from 'pinia'
import router from '@/router'
import { registerVuetify } from '@/setup/vuetify-setup'
import { registerToast } from '@/setup/toast-setup'

export function registerPlugins(app: App): void {
  registerVuetify(app)
  registerToast(app)
  app.use(createPinia())
  app.use(router)
}
