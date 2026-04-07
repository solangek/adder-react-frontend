# Frontend for a Spring REST API (Vite + React)

This project is a React frontend for a Spring backend (see `adder-spring-backend` in the same repo collection).

The frontend is now powered by Vite.

## Development

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

The app runs at [http://localhost:3000](http://localhost:3000).

## Spring backend integration

By default, API calls use `/api/...` paths.

- In development, Vite proxies `/api` to `http://localhost:8080` (configured in `vite.config.js`), which avoids CORS issues.
- In production, serve the frontend and backend behind the same host/reverse proxy, or set `VITE_API_BASE_URL` to your backend URL.

Optional environment override:

```bash
VITE_API_BASE_URL=http://localhost:8080
```

You can put this in a `.env.local` file for local use.

## Scripts

- `npm run dev` (or `npm start`): start Vite dev server
- `npm run build`: create production build in `dist/`
- `npm run preview`: preview production build locally
- `npm test`: run tests with Vitest

## Notes

- Entry HTML is now `index.html` at the project root (Vite convention).
- The old CRA `proxy` field in `package.json` is replaced by `server.proxy` in `vite.config.js`.
