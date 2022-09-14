import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  listOfOption = [
    'Robótica', 'Seguridad Informática',
    'IOT',
    'Inteligencia Artificial',
    'Impresoras 3D',
    'Redes Computacionales',
    'Drones',
    'Taller Primeros Auxilios',
    'Taller Boletas Honorarios',
    'Taller Prevención de riesgos'
  ];
  listCareer = [
    'Técnico en Construcción',
    'Ingenieria en Prevención de Riesgos',
    'Ingeniería en Construcción',
    'Técnico en Marketing',
    'Técnico en Gestión de Personas',
    'Contabilidad General Mención Legislacióin Tributaria',
    'Ingeniería en Gestión Logistica',
    'Ingeniería en Administración Mención Marketing',
    'Ingeniería en Administración Mención Gestión de Personas',
    'Ingeniería en Administración Mención Finanzas',
    'Auditoria',
    'Técnico en Mecánica Automotriz y Autotrónica',
    'Ingeniería en Mecánica Automotriz y Autotrónica',
    'Ingeniería en Electricidad y Automatización Industrial',
    'Técnico en Odontología',
    'Técnico en Enfermeria',
    'Analista Programador Computacional',
    'Ingeniería en Informática',
    'Ingeniería en Conectividad y Redes',
    'Administrador de Redes Computacionales'
  ]
  listOfSelectedValue = [];


  constructor() { }

  ngOnInit(): void {
  }

  @Input() public userForm!: FormGroup;


  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.userForm.controls['checkPassword'].updateValueAndValidity());
  }

  get select(): AbstractControl {
    return this.userForm.get('themesInterest')!;
  }

}
