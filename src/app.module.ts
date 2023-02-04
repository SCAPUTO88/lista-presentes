import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'; //1.1 import the mongoose module
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module'; // 2.1 import the product module
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/store'), // 1.2 Setup the database
    ProductModule, UserModule, // 2.2 Add the product module
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
