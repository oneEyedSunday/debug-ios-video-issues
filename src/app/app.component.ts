import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ios-debug';

  constructor() {}

  ngOnInit(): void {
    window.onpageshow = function(event) {
      console.log('On Page show: ', event);
      if (event.persisted) {
        console.log('Yes persisted from cache');
          // window.location.reload()
      }
    };
  }
}
