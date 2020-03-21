import { Field, ObjectType } from "type-graphql";

@ObjectType({ description: "Object representing pokemon type" })
export class PokemonType {
  @Field()
  slot: number;

  @Field(type => PokemonResource)
  type: {
    name: string;
    url: string;
  };
}

@ObjectType({ description: "Object representing pokemon resource" })
export class PokemonResource {
  @Field()
  name: string;

  @Field()
  url: string;
}

@ObjectType({ description: "Object representing pokemon" })
export class Pokemon {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field()
  base_experience: number;

  @Field()
  height: number;

  @Field()
  is_default: boolean;

  @Field()
  location_area_encounters: string;

  @Field()
  order: number;

  @Field()
  weight: number;

  @Field(type => [PokemonType])
  types: PokemonType[];
}
