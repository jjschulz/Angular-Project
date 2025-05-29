import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Message } from './message/message';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HttpClientModule, FormsModule, Message],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone:true
})
export class App {
  protected title = 'Angular-Project';
}
