import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class AuthEntity {
  @PrimaryGeneratedColumn("uuid")
  uuid: string;

  @Column({ length: 255, nullable: false, unique: true, name: "email" })
  email: string;

  @Column({ length: 30, nullable: false, name: "platform" })
  platform: string;
}
