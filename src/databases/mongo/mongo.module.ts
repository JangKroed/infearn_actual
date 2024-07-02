// import { Global, Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
// import { MongooseConfigService } from './mongo-config.service';
// import { File, FileSchema } from './schemas/file.schema';

// @Global()
// @Module({
//   imports: [
//     MongooseModule.forRootAsync({
//       useClass: MongooseConfigService,
//     }),
//     MongooseModule.forFeature([{ name: File.name, schema: FileSchema }]),
//   ],
//   controllers: [],
//   providers: [],
//   exports: [MongooseModule],
// })
// export class MongoModule {}
