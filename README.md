# 📘 Tutorial: Usando Event Listeners no Angular 19

## 🎯 Objetivo

- Compreender como lidar com eventos no Angular 19 utilizando o template syntax.
- Demonstrar exemplos de eventos comuns: `click`, `input`, `keyup`, `mouseover`, `submit`, etc.
- Aplicar os conceitos em componentes e formulários.

---

## ✅ Pré-requisitos

- Angular 19 instalado e projeto criado (`ng new eventos-demo`)
- Um componente criado (`ng generate component eventos`)

---

## 🧩 Passo 1: Criar o componente

No terminal, dentro do seu projeto:

```bash
ng generate component eventos
```

---

## 🖥️ Passo 2: Template HTML com Event Listeners

Abra o arquivo `eventos.component.html` e adicione o seguinte conteúdo:

```html
<h2>Exemplos de Event Listeners</h2>

<!-- Evento Click -->
<button (click)="onClick()">Clique Aqui</button>
<p>{{ mensagemClick }}</p>

<!-- Evento Input -->
<input type="text" (input)="onInput($event)" placeholder="Digite algo..." />
<p>Você digitou: {{ valorDigitado }}</p>

<!-- Evento Keyup -->
<input type="text" (keyup.enter)="onEnterPress()" placeholder="Pressione Enter" />
<p>{{ mensagemEnter }}</p>

<!-- Evento Mouseover -->
<div (mouseover)="onMouseOver()" style="padding: 10px; background-color: lightblue;">
  Passe o mouse aqui
</div>
<p>{{ mensagemMouseOver }}</p>

<!-- Evento Submit com ngSubmit -->
<form (ngSubmit)="onFormSubmit()" #meuForm="ngForm">
  <input name="nome" [(ngModel)]="nome" required />
  <button type="submit">Enviar</button>
</form>
@if (mensagemForm) {
  <p>Mensagem do Formulário: {{ mensagemForm }}</p>
} @else {
  <p>Preencha o formulário e clique em Enviar.</p>
}
```

---

## 🧠 Passo 3: Lógica no Componente

Edite o arquivo `eventos.component.ts`:

```ts
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
```

---

## 🧪 Passo 4: Exibir o componente

No `app.component.ts`, adicione:

```ts
import { EventosComponent } from './eventos/eventos.component';

...

  imports: [RouterOutlet, EventosComponent],
```

No `app.component.html`, adicione:

```html
<app-eventos></app-eventos>
```

---

## 💡 Dicas Adicionais

- Use `$event` para acessar o evento original do DOM.
- Combine com `[(ngModel)]` para capturar e exibir valores dinamicamente.
- Use controle de fluxo como `@if` para exibir mensagens condicionais após eventos.

---

## 🧼 Conclusão

Este tutorial mostrou como usar os principais **event listeners no Angular 19**, facilitando a **interação com o usuário** de forma reativa. Os eventos são tratados de maneira declarativa e integrada com o template.

