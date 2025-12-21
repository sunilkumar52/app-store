import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ItemsList } from './items-list/items-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ItemsList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
