import { Controller, Get, Post, Body, Param, UseGuards, Request } from '@nestjs/common';
import { StoriesService } from './stories.service';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { CreateStoryDto } from './dto/create-story.dto'; // Імпортуємо ваш DTO

@Controller('stories')
@UseGuards(JwtAuthGuard)
export class StoriesController {
    constructor(private readonly storiesService: StoriesService) {}

    @Get()
    async findAll(@Request() req) {

        const userId = req.user.userId;
        return this.storiesService.findAllByUser(userId);
    }

    @Post('generate')
    async generate(@Body() createStoryDto: CreateStoryDto, @Request() req) {
        const userId = req.user.userId;
        return this.storiesService.generateStory(userId, createStoryDto);
    }

    @Get(':id')
    async findOne(@Param('id') id: string, @Request() req) {
        const userId = req.user.userId;
        return this.storiesService.findOne(id, userId);
    }
}