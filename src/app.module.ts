import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModel } from './entity/user.entity';
import { StudentModel, TeacherModel } from './entity/person.entity';
import {
  AirplaneModel,
  BookModel,
  CarModel,
  ComputerModel,
  SingleBaseModel,
} from './entity/inheritance.entity';
import { ProfileModel } from './entity/profile.entity';
import { PostModel } from './entity/post.entity';
import { TagModel } from './entity/tag.entity';
import { MongooseModule } from '@nestjs/mongoose';
// import { MongoModule } from './databases/mongo/mongo.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserModel, ProfileModel, PostModel, TagModel]),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'typeormstudy',
      entities: [
        UserModel,
        StudentModel,
        TeacherModel,
        BookModel,
        CarModel,
        SingleBaseModel,
        ComputerModel,
        AirplaneModel,
        ProfileModel,
        PostModel,
        TagModel,
        // MongoModule,
      ],
      synchronize: true,
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/file_test'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
