# jboilerplate

`jboilerplate` is a TypeScript-based server boilerplate designed for quick project setup using the `tsx` runtime for fast, lightweight execution. This boilerplate includes essential configurations for setting up an Express server, with linting, environment management, and TypeScript support right out of the box.

## Features

- **Express**: Set up a basic Express server.
- **TypeScript**: Fully configured TypeScript support.
- **TSX**: Fast TypeScript runtime for node.js, allowing for quick execution without pre-compilation.
- **Prettier and ESLint**: Code formatting and linting for consistent code style.
- **Dotenv**: Support for environment variables.

## Installation

To install this boilerplate, simply run:

```bash
npm i -g jboilerplate

jboiler <your package name>
```

## Directory

Open your directory

```bash
cd <your package name>

//install node packages
npm install

//start developement

npm start
```

## Tree

```bash
├── eslint.config.mjs
├── package-lock.json
├── package.json
├── src
│   ├── handler
│   │   └── main.handler.ts
│   ├── index.ts
│   ├── middleware
│   │   └── middleware.server.ts
│   ├── routes
│   │   └── route.server.ts
│   └── server
│       └── server.ts
└── tsconfig.json
```
