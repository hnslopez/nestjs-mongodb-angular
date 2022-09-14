import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsEnum, IsMongoId, IsNotEmpty, IsString, Matches, MaxLength, MinLength } from "class-validator";
import { EstatusBranch } from "src/common/enum";
import { regexHelper, sanitizeHelper } from "src/common/helper";

export class CreateBranchDto {
    @IsString({ message: 'La sede debe ser un texto.' })
    @IsNotEmpty({ message: 'La sede no debe estar vacio.' })
    @MinLength(3, { message: 'La sede debe contener $constraint1 o mas letras.' })
    @MaxLength(16, { message: 'La sede debe contener un maximo de $constraint1 letras.' })
    @Transform(({ value }) => sanitizeHelper.satonizeALL(value))
    @Matches(regexHelper.specialCharacters, {message:'La sede no puede contener caracteres especiales.'})
    @Matches(regexHelper.onlyNumbers, { message:'La sede no puede contener solo numeros.'})
    @ApiProperty()
    readonly name:string;


    @IsNotEmpty({ message: 'Debe selecionar un usuario.' })
    @IsMongoId({message:'Debe ingresar un usuario valido'})
    @Transform(({ value }) => sanitizeHelper.satonizeALL(value))
    readonly user:string;

    @IsEnum(EstatusBranch)
    @IsNotEmpty({ message: 'El estado no debe estar vacio.' })
    @Transform(({ value }) => sanitizeHelper.satonizeALL(value))
    readonly status: string;

}
