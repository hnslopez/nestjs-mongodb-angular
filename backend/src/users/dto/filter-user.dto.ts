import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsString, Matches, MaxLength, MinLength } from 'class-validator'
import { Transform } from 'class-transformer';
import { sanitizeHelper } from 'src/common/helper';
import { regexHelper } from 'src/common/helper';

export class FilterUserDto {
    @IsString({ message: 'El usuario debe ser un texto.' })
    @IsNotEmpty({ message: 'El usuario no debe estar vacio.' })
    @MinLength(3, { message: 'El usuario debe contener $constraint1 o mas letras.' })
    @MaxLength(16, { message: 'El usuario debe contener un maximo de $constraint1 letras.' })
    @Transform(({ value }) => sanitizeHelper.satonizeALL(value))
    @Matches(regexHelper.specialCharacters, {message:'El usuario no puede contener caracteres especiales.'})
    @Matches(regexHelper.onlyNumbers, { message:'El usuario no puede contener solo numeros.'})
    @Matches(regexHelper.onlyTextfirst3, { message:'No se permiten numeros dentro de las primeras 3 letras.'})

    //blacklist
    @ApiProperty()
    readonly filter:string;
    
}