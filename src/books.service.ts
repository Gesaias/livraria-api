import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Book } from './book.model';

@Injectable()
export class BooksServices {
  constructor(
    @InjectModel(Book)
    private bookModel: typeof Book,
  ) {}

  async getAllBooks(): Promise<Book[]> {
    return this.bookModel.findAll();
  }

  async getOneBook(id: number): Promise<Book> {
    return this.bookModel.findByPk(id);
  }

  async create(book: Book) {
    this.bookModel.create(book);
  }

  async update(book: Book): Promise<[number]> {
    return this.bookModel.update(book, {
      where: {
        id: book.id,
      },
    });
  }

  async delete(id: number): Promise<Book> {
    const book = await this.getOneBook(id);
    book.destroy();

    return book;
  }
}
