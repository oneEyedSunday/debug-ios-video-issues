import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Feed } from '../interfaces/Feed';
import { ApiService } from '../services/mock-api';

@Component({
  selector: 'app-feed-test',
  templateUrl: './feed-test.component.html'
})
export class FeedTestComponent implements OnInit {
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
