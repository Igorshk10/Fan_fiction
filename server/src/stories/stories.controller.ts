import { Controller, Get, Post, Body, Param, UseGuards, Request } from '@nestjs/common';
import { CreateStoryDto } from './dto/create-story.dto';
import {JwtUsersGuard} from "../users/guards/jwt.users.guard";
import {StoriesService} from "./stories.server";

@Controller('stories')
@UseGuards(JwtUsersGuard)
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