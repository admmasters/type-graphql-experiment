import { ApolloServer } from "apollo-server";
import * as path from "path";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { PokemonResolver } from "./pokemon/resolver";
import { RecipeResolver } from "./recipe/recipe-resolver";

async function bootstrap() {
  // build TypeGraphQL executable schema
  const schema = await buildSchema({
    resolvers: [RecipeResolver, PokemonResolver],
    // automatically create `schema.gql` file with schema definition in current folder
    emitSchemaFile: path.resolve(__dirname, "schema.gql")
  });

  // Create GraphQL server
  const server = new ApolloServer({
    schema,
    // enable GraphQL Playground
    playground: true
  });

  // Start the server
  const { url } = await server.listen(8080);
  console.log(`Server is running, GraphQL Playground available at ${url}`);
}

bootstrap();
