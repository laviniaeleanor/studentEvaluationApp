import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'

@Entity()
export default class Student extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column('text', { nullable: false })
  name: string

  @Column('text', { nullable: false })
  picture: string

  @Column('text', { nullable: false })
  batch: number

  @Column('text', { nullable: true })
  latestEvaluation?: string

}
