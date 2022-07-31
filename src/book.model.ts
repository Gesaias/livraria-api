import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Book extends Model<Book> {
  @Column({
    type: DataType.STRING(60),
    allowNull: false,
  })
  nome: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  codigo: string;

  @Column({
    type: DataType.DECIMAL,
    allowNull: false,
  })
  preco: number;
}
