import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <section class="home">
      <h1>Welcome to 🌟 NgNova</h1>
      <p>A modern Angular 18 boilerplate with Signals, Standalone Components & SCSS.</p>

      <h3>Counter Example (Signal)</h3>
      <div class="counter">
        <p>Count: {{ count() }}</p>
        <button (click)="increment()">Increment</button>
      </div>
    </section>
  `,
  styles: [
    `
      .home {
        text-align: center;
        padding: 2rem;
      }
      .counter {
        margin-top: 1rem;
      }
      button {
        background: #007bff;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 6px;
        color: white;
        cursor: pointer;
      }
    `,
  ],
})
export class Home {
  count = signal(0);
  increment() {
    this.count.update((v) => v + 1);
  }
}
