import {IsNotEmpty, IsOptional, IsString} from "class-validator";
import {CreateDateColumn} from "typeorm";

export class CreateStoryDto {
    @IsString()
    @IsNotEmpty()
    title: string;

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
