# Regalia 2022 website

### to start developing

- npm install
- Now in two separate terminals or sessions 👉
- in one terminal/session run `npm run dev` to run vite
- in other terminal/session run `npm run tw-watch` to run tailwind-jit
- open dev url at http://localhost:3000/

### Build for production
When you're ready for production. Go to the root of the project folder and use the commands as follows

```bash
npm run format src
npm run tw-build
```
- Now open _src/main.js_ and replace tailwind.css import with build.css

- Finally run ```npm run build```
- Publish the *deploy* folder to your host provider

To preview the production build run ```npm run preview```

