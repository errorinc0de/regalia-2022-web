const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  base: '',
  root: 'src',
  build: {
    outDir: '../deploy',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src', 'index.html'),
        about: resolve(__dirname, 'src', 'about/index.html'),
        events: resolve(__dirname, 'src', 'events/index.html'),
      },
			external: [
				'events.css',
				'modals.js',
				'1.jpg', '2.jpg'
			]
    },
  },
})
