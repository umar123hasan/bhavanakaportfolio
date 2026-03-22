import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        login: 'login/login.html',
        signup: 'login/signup.html'
      }
    }
  }
});
