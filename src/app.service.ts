import { Injectable } from '@nestjs/common';
import { getNftInfoByCollectionAndId } from './nft.service';

@Injectable()
export class AppService {
  async getHello(): Promise<string> {
    await getNftInfoByCollectionAndId(
      '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
      1859,
    );
    return 'Hello World!';
  }
}
