import { ApiProperty } from '@nestjs/swagger';
import { ArrayNotEmpty, isArray, IsArray, IsEmail, IsNotEmpty, IsNumber, IsNumberString, IsOptional, IsString, Matches, MaxLength, MinLength } from 'class-validator'
import { Transform } from 'class-transformer';
import { sanitizeHelper } from 'src/common/helper';
import { regexHelper } from 'src/common/helper';

export class CreateUserDto {
  @IsString({ message: 'El usuario debe ser un texto.' })
  @IsNotEmpty({ message: 'El usuario no debe estar vacio.' })
  @MinLength(3, { message: 'El usuario debe contener $constraint1 o mas letras.' })
  @MaxLength(16, { message: 'El usuario debe contener un maximo de $constraint1 letras.' })
  @Transform(({ value }) => sanitizeHelper.satonizeALL(value))
  @Matches(regexHelper.specialCharacters, {message:'El usuario no puede contener caracteres especiales.'})
  @Matches(regexHelper.onlyNumbers, { message:'El usuario no puede contener solo numeros.'})
  @Matches(regexHelper.onlyTextfirst3, { message:'No se permiten numeros dentro de las primeras 3 letras.'})
  @ApiProperty()
  readonly username: string;

  @IsString({ message: 'El nombre debe ser un texto.' })
  @IsNotEmpty({ message: 'El nombre no debe estar vacio.' })
  @Transform(({ value }) => sanitizeHelper.satonizeALL(value))
  @Matches(regexHelper.onlyText, { message:'El nombre debe contener solo texto.'})
  @ApiProperty()
  readonly name: string;

  @IsString({ message: 'El apellido debe ser un texto.' })
  @IsNotEmpty({ message: 'El apellido no debe estar vacio.' })
  @Transform(({ value }) => sanitizeHelper.satonizeALL(value))
  @Matches(regexHelper.onlyText, { message:'El apellido debe contener solo texto.'})
  @ApiProperty()
  readonly lastName: string;

  @IsEmail()
  @IsNotEmpty()
  @Transform(({ value }) => sanitizeHelper.satonizeALL(value))
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => sanitizeHelper.satinizeOnlyScripts(value))
  @MinLength(5,{message:'La contraseña debe tener por lo menos $constraint1 caracteres'})
  @MaxLength(16,{message:'La contraseña debe tener por lo menos $constraint1 caracteres'})
  readonly password: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => sanitizeHelper.satonizeALL(value))
  @Matches(regexHelper.phoneNumberValidator, { message:'El numero de telefono debe contener el siguiente formato: +56 X XXXX XXXX.'})
  @Matches(regexHelper.onlyNumbersPlusSpace, { message:'El numero de telefono deben contener solo numeros, un simbolo + y 3 espacios.'})
  @MinLength(15, { message: 'El numero de telefono debe contener un minimo de 15 letras el siguiente formato: +56 X XXXX XXXX.' })
  @MaxLength(15, { message: 'El numero de telefono debe contener un maximo de 15 letras el siguiente formato: +56 X XXXX XXXX.' })
  readonly phone:string;
  
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => sanitizeHelper.satonizeALL(value))
  @MinLength(12, { message: 'El rut debe tener un minimo de 12 letras con el siguiente formato: 21.234.567-8.' })
  @MaxLength(12, { message: 'El rut debe tener un maximo de 12 letras con el siguiente formato: 21.234.567-8.' })
  readonly rut:string;


  @IsArray()
  @IsString({ each: true }) 
  @ArrayNotEmpty({message:'Debe tener por lo menos un tema de interes.'})
  @Transform(({ value }) => sanitizeHelper.satonizeALLArray(value))
  readonly themesInterest:[string];


  @IsNumberString({message:'Debe ingresar el numero del semestre que se encuentra.'})
  @IsNotEmpty({message:'Debe ingresar en el semestre que se encuentra actualmente.'})
  readonly semesterProgress:number;


  @IsString({message:'Debe ingresar una carrera'})
  @IsNotEmpty()
  @Transform(({ value }) => sanitizeHelper.satonizeALL(value))
  readonly career:string;

  //readonly roles:     [string];
  //  sede:        {type:mongoose.Types.ObjectId, ref:'Sede', required:true},
  //   rolesSede:   {type:mongoose.Types.ObjectId, ref:'Rol', required:true},
  // readonly status: string;
  // readonly createdAt:   Date;
  // readonly verified: boolean;

}
