import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import {
  collapseTextChangeRangesAcrossMultipleVersions,
  isEntityName,
} from "typescript";

@Entity()
export class Guitars extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  brand!: string;

  @Column()
  model!: string;

  @Column()
  pickupConfig!: string;
}
