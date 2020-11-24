import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})

export class AppUtils {
  public static isSafari = navigator.vendor.toLowerCase().indexOf('apple') > -1;
}
