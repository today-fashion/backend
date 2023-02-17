import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "AuthEntity" })
export class AuthEntity {
  @PrimaryGeneratedColumn("uuid")
  uuid: string;

  @Column({ name: "username", type: "varchar", length: 24, nullable: false })
  username: string;

  @Column({ name: "email", type: "varchar", length: 255, nullable: false, unique: true })
  email: string;

  @Column({ name: "verify", type: "bool", nullable: false, default: 0 })
  verify: boolean;
  
  @Column({ name: "profileImage", length: 255, nullable: true })
  profileImage: string;

  @Column({ length: 30, nullable: false, name: "platform" })
  platform: string;
}
