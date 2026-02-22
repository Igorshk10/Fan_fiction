import {Injectable, OnModuleInit} from '@nestjs/common';
import {CreateStoryDto} from './dto/create-story.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Story} from "./entities/story.entity";
import {Repository} from "typeorm";
import {GoogleGenAI} from '@google/genai';
import {ConfigService} from "@nestjs/config";
import {AiStoryDto} from "./dto/ai-story.dto";

@Injectable()
export class StoriesService {
    private genAI: GoogleGenAI;
    private model: any;

    constructor(
        @InjectRepository(Story) private storyRepository: Repository<Story>,
        private configService: ConfigService,
    ) {
    }

    async AiGenerate(dto: AiStoryDto) {
        const apiKey = this.configService.get<string>('GEMINI_API_KEY');

        if (!apiKey) {
            throw new Error('GEMINI_API_KEY is not defined');
        }

        const ai = new GoogleGenAI({apiKey});

        const prompt = `Create a story using this prompt: ${JSON.stringify(dto)}`;

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
        });

        return {text: response.text};
    }

    async create(dto: CreateStoryDto, userId: number) {
        const story = this.storyRepository.create({
            ...dto,
            userId,
        });
        return await this.storyRepository.save(story);
    }

    async generateAndSave(dto: CreateStoryDto, userId: number) {
        const apiKey = this.configService.get<string>('GEMINI_API_KEY');

        if (!apiKey) {
            throw new Error('GEMINI_API_KEY is not defined');
        }

        const ai = new GoogleGenAI({apiKey});

        const fullPrompt = `
            Write a ${dto.genre} story for the fandom "${dto.fandom}".
            Title: ${dto.title}
            Characters: ${dto.characters} 
            ${dto.prompt}  
            Return only the story text.
            `;

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: fullPrompt,
        });

        const aiText = response.text;

        const newStory = this.storyRepository.create({
            ...dto,
            content: aiText,
            userId,
        });

        return await this.storyRepository.save(newStory);
    }

    async findAllByUserId(userId: number) {
        return await this.storyRepository.find({
            where: {userId: userId},
            order: {createdAt: 'DESC'}
        });
    }

    findAll() {
        return this.storyRepository.find();
    }

    findOne(id: number) {
        return this.storyRepository.findOne({where: {id}});
    }
}
