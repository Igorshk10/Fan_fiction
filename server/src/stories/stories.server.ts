import {Injectable} from "@nestjs/common";
import {CreateStoryDto} from "./dto/create-story.dto";

@Injectable()
export class StoriesService {
    private stories = []; // Тимчасово, поки немає БД

    async generate(createStoryDto: CreateStoryDto, userId: string) {

        const generatedText = `Одного разу в жанрі ${createStoryDto.genre}... (Тут текст від AI)`;

        const newStory = {
            id: Date.now().toString(),
            ...createStoryDto,
            content: generatedText,
            userId,
        };

        this.stories.push(newStory);
        return newStory;
    }

    async findAll(userId: string) {
        return this.stories.filter(s => {
            return s.userId === userId;
        });
    }

    findOne(id: string, userId: any) {
        return Promise.resolve(undefined);
    }

    generateStory(userId: any, createStoryDto: CreateStoryDto) {
        return Promise.resolve(undefined);
    }
}