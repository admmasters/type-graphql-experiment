import { Field, ObjectType } from "type-graphql";

@ObjectType({ description: "Object representing pokemon" })
export class Pokemon {
  @Field()
  id: number;

  @Field()
  name: string;
}
