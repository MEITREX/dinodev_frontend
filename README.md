# DinoDev Frontend

This is the UI of DinoDev. It is a vue.js project using TypeScript and Vuetify.

## Production Setup / Deployment

We provide a docker compose file to build the frontend and serve it using Nginx. 
To run the frontend in production mode, follow the steps below:
1. Ensure that the docker network `scrum_game_network` is available. If not, create it using the following command:
   ```bash
   $ docker network create scrum_game_network
   ```
2. Either use a deployed version of Gropius or deploy it locally. 
   If you want to deploy Gropius locally, follow the instructions in the [Gropius repository](https://github.com/ccims/gropius).
3. Add the login service and the Gropius frontend to the `scrum_game_network` network.
   ```bash
   $ docker network connect scrum_game_network <login-service-container>
   $ docker network connect scrum_game_network <gropius-frontend-container>
   ```
4. Figure out the Gropius Login Server URL
   The default would be `http://<gropius-login-service-container>:3000`
5. Add a new OAuth client in Gropius (under the Admin tab)
6. Adjust the values in the `docker-compose.yml` file:
    ```yaml
    environment:
      - GRAPHQL_ENDPOINT=http://scrum_game:12001/graphql
      - GRAPHQL_WS_ENDPOINT=http://scrum_game:12001/graphql-ws
      - WEBHOOK_ENDPOINT=http://scrum_game:12001/webhook
      - GRAPHIQL_ENDPOINT=http://scrum_game:12001/graphiql
      - FIXED_CLIENT_ID=<client-id>
      - AUTH_ENDPOINT=http://<gropius-frontend-container>:4200/auth/oath/
    ```
   If required, replace the backend URLs.
7. Run the following command:
   ```bash
   $ docker-compose up -d
   ```
8. The frontend should now be available at port 12200 of the host machine.

## Development Setup

To run the frontend in development mode, follow the steps below:
1. Figure out the Gropius Login Server URL
   If Gropius is run locally, this should be `http://localhost:3000`. 
2. Add a Gropius client, like described above.
3. Update the values in the `.env` file:
    ```
   VITE_APP_FIXED_CLIENT_ID=<client-id>
    ```
   Adjust other values as needed, the defaults assume that a local backend is running.
4. Run the following commands:
```bash
# install dependencies
$ npm install

# run in development mode
$ npm run dev
```
When the GraphQL server changes, the generated types must be updated. To do this, run the following command:
```bash
$ npx graphql-codegen
```

## Project Structure

The project is structured as follows:
- `src/` contains the source code of the project
  - `assets/` contains static assets like images
  - `components/` contains Vue components
  - `router/` contains the Vue router configuration
  - `store/` contains global state management
  - `gql/` contains the generated GraphQL types
  - `views/` contains the views of the project
  - `service/` contains the services used to communicate with the backend
  - `utils/` contains utility functions
  - `setup/` contains code to configure the app


