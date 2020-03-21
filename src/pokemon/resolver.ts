import { Arg, Query, Resolver } from "type-graphql";
import { Pokemon } from "./pokemon";

@Resolver(of => Pokemon)
export class PokemonResolver {
  @Query(returns => Pokemon)
  async pokemon(@Arg("name") name: string): Promise<Pokemon | undefined> {
    return Promise.resolve({
      id: 1,
      name: "Pikachu"
    });
  }
}
