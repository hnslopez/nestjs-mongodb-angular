import { Transform } from "class-transformer";
import { IsEmpty, IsEnum, IsMongoId, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";
import mongoose from "mongoose";
import { ERoles } from "src/common/enum/roles-status.enum";
import { sanitizeHelper } from "src/common/helper";

export class CreateRoleDto {

    @IsString({ message: 'El nombre debe ser un texto.' })
    @IsNotEmpty({ message: 'El nombre no debe estar vacio.' })
    @MinLength(3, { message: 'El nombre debe contener $constraint1 o mas letras.' })
    @MaxLength(16, { message: 'El nombre debe contener un maximo de $constraint1 letras.' })
    @Transform(({ value }) => sanitizeHelper.satonizeALL(value))
    readonly name:string;

    @IsEnum(ERoles)
    @IsNotEmpty()
    @Transform(({ value }) => sanitizeHelper.satonizeALL(value))
    readonly status:ERoles;

    @IsMongoId({message:'El permiso no es valido.'})
    @IsOptional()
    @Transform(({ value }) => sanitizeHelper.satonizeALL(value))
    readonly permission: string;

}
