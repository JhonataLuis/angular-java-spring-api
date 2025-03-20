import { Component } from '@angular/core';
import { DefaultCadastroLayoutComponent } from '../../components/default-cadastro-layout/default-cadastro-layout.component';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [
    DefaultCadastroLayoutComponent
  ],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {

}
