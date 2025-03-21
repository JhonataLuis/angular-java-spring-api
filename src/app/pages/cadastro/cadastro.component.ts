import { Component } from '@angular/core';
import { DefaultCadastroLayoutComponent } from '../../components/default-cadastro-layout/default-cadastro-layout.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [
    DefaultCadastroLayoutComponent,
    ReactiveFormsModule
  ],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {
cadastroForm!: FormGroup;

  constructor(){
    this.cadastroForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      cep: new FormControl('', Validators.required)
    })
  }
}
