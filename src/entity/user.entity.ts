import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  private readonly uuid: string;

  @Column({ 
    type: 'varchar', 
    length: 24, 
    comment: 'username' 
  })
  private readonly username: string;
  
  @Column({ 
    type: 'varchar', 
    length: 50, 
    comment: 'email' 
  })
  email: string;

  @Column({ 
    type: 'varchar', 
    length: 255, 
    comment: 'password' 
  })
  password: string;

  @Column({
    type: 'varchar', 
    length: 64, 
    comment: 'salt' 
  })
  salt: string;

  @CreateDateColumn({ 
    name: 'create_at', 
    comment: 'user create_at' 
  })
  createAt: Date;

  @UpdateDateColumn({ 
    name: 'update_at', 
    comment: 'user update_at' 
  })
  updateAt: Date;

  @DeleteDateColumn({ 
    name: 'delete_at', 
    comment: 'user delete_at' 
  })
  deleteAt?: Date | null | undefined;
}