# Opening hours project

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (20.10.0)
- npm (10.2.3)

### Installing

1. After unpacking the .ZIP folder, navigate to the project directory:

```bash
cd open-hour-project
```

2. Install the project dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

This will start the Vite development server. You can now visit `http://localhost:5173` to view the application in the browser.

## Scripts

A brief overview of the available scripts in the project:

- `npm run dev`: Starts the Vite development server.
- `npm run dpdm`: Runs dependency tree analysis with dpdm.
- `npm run build`: Compiles TypeScript files and builds the project for production with Vite.
- `npm run lint`: Runs ESLint to check for code quality and style issues.
- `npm run preview`: Serves the production build locally for preview.
- `npm run test`: Runs Jest to execute all tests.
- `npm run test:watch`: Runs Jest in watch mode, re-running tests as files change.
- `npm run test:update`: Updates Jest snapshots.
- `npm run type-check`: Runs TypeScript compiler for type checking without emitting files.

The project is also using husky for a pre-commit hook to check that dependencies, types, linting and tests are in order.

## Authors

- **Elena Kazakova** - [Github](https://github.com/jphawk)
