import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class FashionEntity {
  @PrimaryGeneratedColumn("uuid")
  uuid: string;
}