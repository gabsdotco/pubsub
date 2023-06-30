### 👂 pubsub

This is a basic implementation of a Pub/Sub using Node.js and Typescript.

### 🏃 running

To run this application, follow these commands:

```bash
# setup the project
pnpm install # install all the deps

# running the application build
pnpm build # build the typescript application
pnpm start # run the build

# or running the development mode
pnpm dev
```

Make sure that you have the `.env` file created with all the required environment variables.

### 🚀 deployment

As this application uses the Streaming Pull model, it needs to be deployed to a VM Instance instead of any type of Serverless solution, since this application needs to be running indefinitely.
