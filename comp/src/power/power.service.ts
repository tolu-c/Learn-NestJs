import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
  supplyPower(watts: number) {
    console.log(`supplying ${watts}W of power`);
    return watts;
  }
}
