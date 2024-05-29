import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import type { App } from 'vue'

export function registerVuetify(app: App): void {
  const vuetify = createVuetify({
    components,
    directives
  })

  app.use(vuetify)
}
