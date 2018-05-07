import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'

@Entity()
export default class Evaluation extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column('text', { nullable: false })
  student: number

  @Column('text', { nullable: false })
  batch: number

  @Column('text', { nullable: false })
  date: Date

  @Column('text', { nullable: false })
  evaluation: string

  @Column('text', { nullable: true })
  remarks?: string

}
