import {
  Body,
  Controller,
  Delete,
  Get,
  // HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Book } from './book.model';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BooksServices } from './books.service';

export interface BookParams {
  id: string;
}

export interface BookRes {
  msg: string;
  status: number;
  data: any;
  erro: string;
}

@Controller('books')
export class BooksController {
  // Provider no constructor
  constructor(private BooksServices: BooksServices) {}

  // POST /books
  @Post()
  create(@Body() book: Book): Book {
    try {
      this.BooksServices.create(book);
      return book;
    } catch (e) {
      return book;
    }
  }

  // GET /books
  @Get()
  async getAllBooks(): Promise<Book[]> {
    return await this.BooksServices.getAllBooks();
  }

  // GET /books/:id
  // Faz a leitura e return de um book somente,
  // com um id do book passado por parâmetro
  @Get(':id')
  async getOneBook(@Param() params: BookParams): Promise<Book> {
    const id: number = parseInt(params.id);
    return await this.BooksServices.getOneBook(id);
  }

  // PUT /books
  @Put()
  async update(@Body() book: Book): Promise<[number]> {
    try {
      return this.BooksServices.update(book);
    } catch (e) {
      return;
    }
  }

  // DELETE /books/:id
  @Delete(':id')
  async delete(@Param() params: BookParams) {
    const id: number = parseInt(params.id);
    return this.BooksServices.delete(id);
  }
}
