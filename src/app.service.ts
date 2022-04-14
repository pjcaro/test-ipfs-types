import { Injectable } from '@nestjs/common';
import { getNftInfoByCollectionAndId } from './nft.service';

@Injectable()
export class AppService {
  async getHello(): Promise<string> {
    await getNftInfoByCollectionAndId(
      '0xec9c519d49856fd2f8133a0741b4dbe002ce211b',
      5023,
    );
    return 'Hello World!';
  }
}
