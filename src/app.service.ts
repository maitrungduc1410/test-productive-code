import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getName(): string {
    return 'My name is James';
  }

  getAge(): number {
    return 25;
  }
}
