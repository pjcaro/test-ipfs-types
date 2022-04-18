import { Injectable } from '@nestjs/common';
import { getNftInfoByCollectionAndId } from './nft.service';

@Injectable()
export class AppService {
  async getHello(): Promise<string> {
    await getNftInfoByCollectionAndId(
      '0x733d8fe52aa82304d697d4c4f5312ac95459d7b9',
      10234,
    );
    return 'Hello World!';
  }
}
