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
  // stores message entered by user
  message: string = '';
  constructor(private http: HttpClient){}

  //sends message to API and displays the response in an alert
  sendMessage(){
    const url = "https://sample.lteprocess.com/trythis"

    //required headers for API request
    const headers = new HttpHeaders({
      'sendthis' : '123Lucas'
    });
    const body = { message: this.message };

    //makes POST request, then handles response
    this.http.post<{returnMessage:string}>(url, body, {headers}).subscribe({
      next: (response) => {
        //displays returned message in an alert box
        alert('returnMessage: ' + response.returnMessage)
      },
      error: (error) => {
        console.error('Error: ', error);
        alert('Error sending message.')
      }
    });

  }
}
