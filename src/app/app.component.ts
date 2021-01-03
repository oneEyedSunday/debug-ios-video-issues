import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Feed } from './interfaces/Feed';
import { FileWithMeta } from './interfaces/FeedFile';
import { ApiService } from './services/mock-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ios-debug';
  feedData: { items: Feed[]; totalCount: number };

  files: FileWithMeta[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getFeed()
      .pipe(
        tap((res) => this.feedData = res)
      )
      .subscribe();
  }

  handleFileInput(files: FileList): void {
    for (const file of Array.from(files)) {
      const url = URL.createObjectURL(file);
      this.files.push({
        type: 'video',
        url,
        file
      });

      this.feedData.items.unshift({
        creator: this.feedData.items[0].creator,
        post: {
          ...this.feedData.items[0].post,
          media: [{
            type: 'video',
            url,
            // @ts-ignore
            file
          }]
        }
      });
      this.feedData.totalCount++;
    }
  }
}
