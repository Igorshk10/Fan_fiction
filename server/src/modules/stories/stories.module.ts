import { Module } from '@nestjs/common';
import { StoriesService } from './stories.service';
import { StoriesController } from './stories.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Story} from "./entities/story.entity";
import {ConfigModule} from "@nestjs/config";
import {PassportModule} from "@nestjs/passport";

@Module({
  imports: [
    //PassportModule.register({ defaultStrategy: 'jwt' }),
    TypeOrmModule.forFeature([Story]),
    ConfigModule,
  ],
  controllers: [StoriesController],
  providers: [StoriesService],
})
export class StoriesModule {}
