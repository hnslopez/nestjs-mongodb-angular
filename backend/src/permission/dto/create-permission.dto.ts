import { Transform } from "class-transformer";
import { IsBoolean, IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";
import { ECrud } from "src/common/enum/crud.enum";
import { EMethod } from "src/common/enum/method.enum";
import { sanitizeHelper } from "src/common/helper";

export class CreatePermissionDto {

    @IsString({ message: 'Ingrese un una ruta.' })
    @IsNotEmpty({ message: 'La ruta no debe estar vacia.' })
    @Transform(({ value }) => sanitizeHelper.satonizeALL(value))
    readonly router:string;

    @IsEnum(EMethod,{message:'Debe ingresar un metodo valido: GET, POST, PATCH, DELETE'})
    readonly method: EMethod;

    @IsString({ message: 'El nombre debe ser un texto.' })
    @IsNotEmpty({ message: 'El nombre no debe estar vacio.' })
    @MinLength(3, { message: 'El nombre debe contener $constraint1 o mas letras.' })
    @MaxLength(48, { message: 'El nombre debe contener un maximo de $constraint1 letras.' })
    @Transform(({ value }) => sanitizeHelper.satonizeALL(value))
    readonly name:string;

    
    @IsBoolean({message:'El estado debe ser un booleano'})
    @IsNotEmpty({ message: 'El estado no debe estar vacio.' })
    readonly enable:Boolean;



}
