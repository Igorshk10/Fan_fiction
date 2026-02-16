import {Injectable} from '@nestjs/common';
import {CreateStoryDto} from './dto/create-story.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Story} from "./entities/story.entity";
import {Repository} from "typeorm";

@Injectable()
export class StoriesService {

    constructor(
        @InjectRepository(Story) private storyRepository: Repository<Story>
    ) {
    }

    create(dto: CreateStoryDto, userId: number) {
        const story = this.storyRepository.create({
            ...dto,
            userId,
        });

        return this.storyRepository.save(story);
    }

    findAll() {
        return this.storyRepository.find();
    }

    findOne(id: number) {
        return this.storyRepository.findOne({
                where: {
                    id: id
                }
            }
        )
    }
}
