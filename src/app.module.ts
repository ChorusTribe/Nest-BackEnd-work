import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CampaignModule } from './controllers/campaign';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './controllers/user';

import dbconfig from 'src/config/db';

@Module({
  imports: [
    CampaignModule,
    UserModule,
    MongooseModule.forRoot(
      dbconfig.host
        .replace('<username>', dbconfig.username)
        .replace('<password>', dbconfig.password)
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
