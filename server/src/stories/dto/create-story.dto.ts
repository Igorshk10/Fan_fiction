import { IsString, MinLength } from 'class-validator';
export class CreateStoryDto {
     title: string;
     prompt: string;
     length: number;
    @IsString()
    @MinLength(3)
    title: string;

    @IsString()
  genre: string;
}
