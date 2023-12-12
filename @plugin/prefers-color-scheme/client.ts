import { defineClientConfig } from '@vuepress/client'
import { setupDarkMode } from './useDarkMode';
export default defineClientConfig({
  enhance({app}){

  },
  setup(){
    setupDarkMode();
  }
})


