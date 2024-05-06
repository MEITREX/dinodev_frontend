import Toast, { type PluginOptions, POSITION } from 'vue-toastification'
import "vue-toastification/dist/index.css";
import type { App } from 'vue'

export function registerToast(app: App) {
  const options: PluginOptions = {
    position: POSITION.BOTTOM_LEFT,
    timeout: 10_000,
  };

  app.use(Toast, options);
}
