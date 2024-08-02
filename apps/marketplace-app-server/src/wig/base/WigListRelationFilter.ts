/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { WigWhereInput } from "./WigWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class WigListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => WigWhereInput,
  })
  @ValidateNested()
  @Type(() => WigWhereInput)
  @IsOptional()
  @Field(() => WigWhereInput, {
    nullable: true,
  })
  every?: WigWhereInput;

  @ApiProperty({
    required: false,
    type: () => WigWhereInput,
  })
  @ValidateNested()
  @Type(() => WigWhereInput)
  @IsOptional()
  @Field(() => WigWhereInput, {
    nullable: true,
  })
  some?: WigWhereInput;

  @ApiProperty({
    required: false,
    type: () => WigWhereInput,
  })
  @ValidateNested()
  @Type(() => WigWhereInput)
  @IsOptional()
  @Field(() => WigWhereInput, {
    nullable: true,
  })
  none?: WigWhereInput;
}
export { WigListRelationFilter as WigListRelationFilter };
