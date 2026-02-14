import { IsString, MinLength } from 'class-validator';
export class CreateStoryDto {
     prompt: string;
     length: number;
    @IsString()
    @MinLength(3)
    title: string;

    @IsString()
  genre: string;
}
