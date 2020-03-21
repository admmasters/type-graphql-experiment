import { Arg, Query, Resolver } from "type-graphql";
import { Pokemon } from "./pokemon";
import { PokemonService } from "./service";

@Resolver(of => Pokemon)
export class PokemonResolver {
  constructor(public service: PokemonService = new PokemonService()) {}
  @Query(returns => Pokemon)
  async pokemonById(@Arg("id") id: number): Promise<Pokemon | undefined> {
    return await this.service.getById(id);
  }

  @Query(returns => Pokemon)
  async pokemonByName(@Arg("name") name: string): Promise<Pokemon | undefined> {
    const results = await this.service.getByName(name);
    console.log(results);
    return results;
  }
}
