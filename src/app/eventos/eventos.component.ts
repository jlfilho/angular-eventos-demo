import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-eventos',
  imports: [FormsModule],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.scss'
})
export class EventosComponent {
  mensagemClick = '';
  valorDigitado = '';
  mensagemEnter = '';
  mensagemMouseOver = '';
  mensagemForm = '';
  nome = '';

  onClick() {
    this.mensagemClick = 'Você clicou no botão!';
  }

  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.valorDigitado = input.value;
  }

  onEnterPress() {
    this.mensagemEnter = 'Você pressionou Enter!';
  }

  onMouseOver() {
    this.mensagemMouseOver = 'Mouse passou sobre o elemento!';
  }

  onFormSubmit() {
    this.mensagemForm = `Formulário enviado com o nome: ${this.nome}`;
  }
}
