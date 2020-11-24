import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Feed } from './interfaces/Feed';
import { ApiService } from './services/mock-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ios-debug';
  feedData: { items: Feed[]; totalCount: number };

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getFeed()
      .pipe(
        tap((res) => this.feedData = res)
      )
      .subscribe();
  }
}
