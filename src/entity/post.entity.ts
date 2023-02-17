import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "postEntity" })
export class PostEntity {
  @PrimaryGeneratedColumn("uuid")
  uuid: string;
}