import { IsString, MinLength } from 'class-validator';

export class CreateStoryDto {
    @IsString()
    @MinLength(3)
    title: string;

    @IsString()
    genre: string;
}