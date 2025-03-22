import { Component } from '@angular/core';
import { DefaultCadastroLayoutComponent } from '../../components/default-cadastro-layout/default-cadastro-layout.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { Router } from '@angular/router';
import { CadastroService } from '../../services/cadastro.service';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [
    DefaultCadastroLayoutComponent,
    ReactiveFormsModule,
    PrimaryInputComponent
  ],
  providers: [
    CadastroService
  ],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {
cadastroForm!: FormGroup;

  constructor( 
    private router: Router,
    private cadastroService: CadastroService
  ){

    this.cadastroForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      cep: new FormControl('', [Validators.required, Validators.minLength(10)])
    })
  }

  submit(){
    this.cadastroService.cadastro(this.cadastroForm.value.name, this.cadastroForm.value.cep).subscribe({
      next: () => console.log("sucesso"),
      error: () => console.log("error")
    })
  }

  navigate(){
    this.router.navigate(["cadastroUser"])
  }
}
