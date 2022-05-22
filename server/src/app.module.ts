import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { NotesModule } from './notes/notes.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    UsersModule,
    MongooseModule.forRoot('mongodb://localhost:27017/MarkdownEditor'),
    NotesModule,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware);
    //.exclude({path:'', method:RequestMethod.POST})
    //.forRoutes('')
  }
}
