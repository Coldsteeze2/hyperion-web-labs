# React + Vite

## Media Lab videos

The Media Lab uses stock video previews from Mixkit: [developer at work](https://mixkit.co/free-stock-video/hands-of-a-programmer-working-on-a-desk-41652/), [web design planning](https://mixkit.co/free-stock-video/work-team-planning-a-project-in-the-office-13231/) and [code on screen](https://mixkit.co/free-stock-video/computer-code-in-the-screen-9757/). The footage illustrates the process rather than showing actual project work. Video URLs and posters are configured in `src/components/MediaLab.jsx`; they may also point to files placed in `public`. If a video fails to load, the card displays an error message. The performance figures shown are example targets, not live measurements.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
