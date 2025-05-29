import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-message',
  imports: [HttpClientModule, FormsModule],
  templateUrl: './message.html',
  styleUrl: './message.css',
  standalone: true,
})
export class Message {
  message: string = '';
  constructor(private http: HttpClient){}
  sendMessage(){
    const url = "https://sample.lteprocess.com/trythis"
    const headers = new HttpHeaders({
      'sendthis' : '123Lucas'
    });
    const body = { message: this.message };

    this.http.post<{returnMessage:string}>(url, body, {headers}).subscribe({
      next: (response) => {
        alert('returnMessage: ' + response.returnMessage)
      },
      error: (error) => {
        console.error('Error: ', error);
      }
    });

  }
}
