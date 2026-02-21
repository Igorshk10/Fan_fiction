import {IsNotEmpty, IsOptional, IsString} from "class-validator";

export class CreateStoryDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    content: string;

    @IsString()
    @IsNotEmpty()
    fandom: string;

    @IsString()
    @IsNotEmpty()
    characters: string;
    @IsString()
    @IsNotEmpty()
    genre: string;

    @IsString()
    @IsNotEmpty()
    prompt: string;
}
