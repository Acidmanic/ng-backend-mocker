import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'mock-test';

  public items: { title: string; body: string }[] = [];

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http
      .get<{ title: string; body: string }[]>(
        'https://gorest.co.in/public/v2/posts'
      )
      .subscribe({
        next: (res) => {
          console.log('Response', res);
          this.items = res;
        },
        error: (err) => console.log('Error: ', err),
      });
  }
}
