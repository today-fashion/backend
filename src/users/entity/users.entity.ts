import { 
  BaseEntity, 
  Column, 
  CreateDateColumn, 
  DeleteDateColumn, 
  Entity, 
  PrimaryGeneratedColumn, 
  UpdateDateColumn 
} from "typeorm";

@Entity({ name: 'users' })
export class Users extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  public readonly uuid: string;

  @Column({ 
    type: 'varchar', 
    length: 24, 
    comment: 'username',
    nullable: false
  })
  public readonly username: string;
  
  @Column({ 
    type: 'varchar', 
    length: 50, 
    comment: 'email',
    nullable: false
  })
  public email: string;

  @Column({ 
    type: 'varchar', 
    length: 255, 
    comment: 'password',
    nullable: false
  })
  public password: string;

  @Column({
    type: 'varchar', 
    length: 64, 
    comment: 'salt',
    nullable: false
  })
  public salt: string;

  @CreateDateColumn({ 
    name: 'create_at', 
    comment: 'user create_at',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: false
  })
  public createAt: Date;

  @UpdateDateColumn({ 
    name: 'update_at', 
    comment: 'user update_at' 
  })
  public updateAt: Date;

  @DeleteDateColumn({ 
    name: 'delete_at', 
    comment: 'user delete_at' 
  })
  public deleteAt?: Date | null | undefined;
}