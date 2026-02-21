import {Controller, Get, Post, Body, Param, UseGuards, Request} from '@nestjs/common'; // Додано Request
import {StoriesService} from './stories.service';
import {CreateStoryDto} from './dto/create-story.dto';
import { JwtAuthGuard } from '../users/guards/jwt-auth.guard';
import {AiStoryDto} from "./dto/ai-story.dto";

@Controller('stories')
    export class StoriesController {
    constructor(private readonly storiesService: StoriesService) {
    }

    @Post('generate')
    @UseGuards(JwtAuthGuard)
    generate(@Body() dto: CreateStoryDto, @Request() req) {
        return this.storiesService.generateAndSave(dto, req.user.userId);
    }
    @Post('ai')
    ai(@Body() dto: AiStoryDto, @Request() req) {
        return this.storiesService.AiGenerate(dto);
    }

    @Get('my-stories')
    @UseGuards(JwtAuthGuard)
    findAllMyStories(@Request() req) {
        return this.storiesService.findAllByUserId(req.user.userId);
    }

    @Get()
    findAll() {
        return this.storiesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.storiesService.findOne(+id);
    }
}
