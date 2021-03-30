import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import dataV from '@jiaminghi/data-view'

createApp(App).use(router).use(dataV).mount('#app')
