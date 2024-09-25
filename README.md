# Express API Template

This is a template for an Express API. It uses the following core technologies, packages, and tools:

## Technologies, Packages, and Tools

### Core Technologies

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)

### Linting, Formatting, and Development Tools

- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [nodemon](https://www.npmjs.com/package/nodemon)

### Validation and Error Handling

- [http-status-codes](https://www.npmjs.com/package/http-status-codes)
- [express-async-errors](https://www.npmjs.com/package/express-async-errors)
- [zod](https://www.npmjs.com/package/zod)

### Environment Configuration

- [dotenvx](https://www.npmjs.com/package/dotenvx)

### Logging

- [winston](https://www.npmjs.com/package/winston)
- [express-winston](https://www.npmjs.com/package/express-winston)
- [winston-daily-rotate-file](https://www.npmjs.com/package/winston-daily-rotate-file)

### Authentication and Authorization

- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [bcrypt](https://www.npmjs.com/package/bcrypt)

### Container

- [docker](https://www.docker.com/)

## Getting Started

1. Clone the repository

```bash
    git clone https://github.com/samueljacobs98/express-typescript-template.git
```

2. Install dependencies:

```bash
    npm install
```

3. Create a `.env` file in the root directory and add the following environment variables:

```bash
    PORT=3000
    NODE_ENV=development
    JWT_SECRET=secret
```

4. Start the server:

```bash
    npm run dev
```

5. Alternatively, you can build the project and run the server:

```bash
    npm run build
    npm start
```

6. Or, use Docker:

```bash
    docker-compose build
    docker-compose up
```
