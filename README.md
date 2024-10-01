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
- [application insights](https://www.npmjs.com/package/applicationinsights)

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

3. Install Docker:

   Follow the instructions at [Get Docker](https://docs.docker.com/get-docker/)

4. Set up environment variables:

   Create the necessary `.env` files in the root directory. You can create the following files based on your environment:

   - `.env.local`
   - `.env.development`
   - `.env.staging`
   - `.env.production`

   Each `.env` file should contain the required environment variables for the application. Here is an example of what the `.env` file might look like:

   ```env
   PORT=3000
   DATABASE_URL=your_database_url
   ```

5. Add your app name to the Makefile and package.json:

   - In the Makefile, add your app name to the `APP_NAME` variable:

     ```makefile
     APP_NAME=your_app_name
     ```

   - In the `package.json` file, add your app name to the `name` field:

     ```json
     {
       "name": "your_app_name",
       ...
     }
     ```

6. Start the application:

   You can start the application in different environments using the Makefile commands:

   - For local development (with hot reloading):

     ```bash
     make local
     ```

     > **Note**: The `local` environment will automatically reload the server when changes are made to the source code. However, changes to the `.env.local` file will not be picked up automatically. You will need to restart the server to apply changes to the `.env.local` file.

   - For development environment:

     ```bash
     make development
     ```

   - For staging environment:

     ```bash
     make staging
     ```

   - For production environment:

     ```bash
     make production
     ```

7. View logs:

   To view the logs for a specific environment, use the following command:

   ```bash
   make logs env=your_environment
   ```

   Replace `your_environment` with `local`, `development`, `staging`, or `production`. If you don't specify an environment, the logs for the `local` environment will be displayed.

8. Stop the application:

   To stop the application for a specific environment, use the following command:

   ```bash
   make stop env=your_environment
   ```

   Replace `your_environment` with `local`, `development`, `staging`, or `production`.
   If you don't specify an environment, the application for the `local` environment will be stopped.
