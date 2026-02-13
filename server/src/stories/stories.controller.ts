import { Controller, Get, Post, Body, Param, UseGuards, Request } from '@nestjs/common';
import { StoriesService } from './stories.service';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';

@Controller('stories')
@UseGuards(JwtAuthGuard)
export class StoriesController {
    constructor(private storiesService: StoriesService) {}


    @Get()
    async findAll(@Request() req) {
        const userId = req.user.id;
        return this.storiesService.findAllByUser(userId);
    }


    @Post('generate')
    async generate(@Body() promptData: any, @Request() req) {
        const userId = req.user.id;
        return this.storiesService.generateStory(userId, promptData);
    }


    @Get(':id')
    async findOne(@Param('id') id: string, @Request() req) {
        const userId = req.user.id;
        return this.storiesService.findOne(id, userId);
    }
}