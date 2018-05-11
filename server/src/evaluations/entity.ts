import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'

export type EvaluationColor = 'red' | 'green' | 'yellow' | 'grey'

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
  evaluation: EvaluationColor

  @Column('text', { nullable: true })
  remarks?: string

}
