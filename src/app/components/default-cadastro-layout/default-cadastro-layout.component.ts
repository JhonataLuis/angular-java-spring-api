import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-default-cadastro-layout',
  standalone: true,
  imports: [],
  templateUrl: './default-cadastro-layout.component.html',
  styleUrl: './default-cadastro-layout.component.scss'
})
export class DefaultCadastroLayoutComponent {
  @Input() title: string = "";
  @Input() primaryBtnText: string = "";
  @Input() secundaryBtnText: string = "";
}
