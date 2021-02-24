import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-onload-test',
  template: '<p>App is here. Click on <button class="btn btn-link">refresh</button> to test before on load func</p>'
})
export class BeforeOnloadTestComponent {

  constructor() { }

  @HostListener('window:beforeunload', ['$event'])
  logoutIfNotDone($event: BeforeUnloadEvent) {
    console.log('before unload evt: ', $event);
    $event.preventDefault();
    console.log('Unload event triggered in Create Profile component');
    // Whyis this needed? if user manually enters the home page from the url bar
    // Setting the value of $event.returnValue will show a dialog
    // $event.returnValue = 'This message cannot be customized';
    $event.returnValue = 'This message cannot be customized';
    // return $event.returnValue;
    // $event.returnValue = false;
    // return false;
  }

  @HostListener('window:pageshow', ['$event'])
  checkBfCache($event: PageTransitionEvent) {
    console.log('onpageshow evt: ', $event);
  }

}
