import {
  Component, OnInit, Input, AfterViewInit,
  OnDestroy, ViewChild, ViewChildren, QueryList, ElementRef
} from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgxMasonryComponent, NgxMasonryOptions } from 'ngx-masonry';
import { AppUtils } from 'src/app/utils';
import { MediaLightboxComponent } from '../lightbox/lightbox.component';

export interface FeedItem {
  contentType: string | null;
  url: string;
  type?: string;
  file: File;
}

@Component({
  selector: 'app-feed-media',
  templateUrl: './media.component.html',
  styleUrls: ['./style.css']
})
export class FeedMediaComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild(NgxMasonryComponent) masonry: NgxMasonryComponent;
  @ViewChildren('applyAspectRatio') imagesToApplyAspectRatioTo: QueryList<ElementRef<HTMLImageElement>>;
  @ViewChild('mediaContainer') mediaContainer: ElementRef<HTMLDivElement>;
  @Input() items: FeedItem[];
  @Input() meta: any;
  @Input() isGroup?: boolean;
  @Input() disableInteraction: boolean;
  pItems: FeedItem[];
  showGrid = false;
  objectUrls: string[] = [];
  fallbackImageSrc = '/assets/images/Media-failed-Involved.png';
  updateLayout = 0;
  itemsLeft: number;
  masonryOpts: NgxMasonryOptions = { horizontalOrder: true };
  lightboxModalRef: NgbModalRef;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    this.pItems = (this.items || []).filter(item => !!(item.url || item.file)); // ignore items without a url
    this.pItems.forEach(feedItem => {
      if (feedItem.file) {
        feedItem.url = URL.createObjectURL(feedItem.file);
      }
      if ((feedItem.contentType || '').startsWith('video')) {
        feedItem.url = feedItem.url + '#t=0.1';
      }
    });
    setTimeout(() => this.showGrid = (this.pItems || []).length > 1, 1000);
  }

  ngAfterViewInit(): void {
    if (this.pItems.length > 2) {
      this.mediaContainer.nativeElement.style.maxHeight = '' + 1.25 * this.mediaContainer.nativeElement.offsetWidth + 'px';
    }
    const allLoaded = Array(Math.min(this.pItems.length, 4)).fill(false);
    this.imagesToApplyAspectRatioTo.forEach((item, index) => {
      if (![this.fallbackImageSrc, window.location.hostname + this.fallbackImageSrc].includes(item.nativeElement.src)) {
        const that = this;
        // tslint:disable-next-line: only-arrow-functions
        item.nativeElement.onload = function() {
          console.log(that.computeAspectRation(item.nativeElement));
          if (that.pItems.length === 1) {
            const aspectRatio = that.computeAspectRation(item.nativeElement);
            if (aspectRatio < 0.8) {
              that.mediaContainer.nativeElement.style.overflowY = 'auto';
              that.mediaContainer.nativeElement.style.height = (that.mediaContainer.nativeElement.clientWidth / aspectRatio) + 'px';
              that.mediaContainer.nativeElement.style.maxHeight = '80vh';
            } else {
              // fit media container to accomodate image
              // Fix for much more height resulting in blank space on Safari
              // Blob images for one get much more height than the live images from AWS
              item.nativeElement.style.maxHeight = AppUtils.isSafari ? '-webkit-fill-available' : 'unset';
              if (AppUtils.isSafari) {
                item.nativeElement.style.height = 'intrinsic';
              }

              if (item.nativeElement.offsetHeight > item.nativeElement.naturalHeight) {
                // NOTE (oneeyedsunday) point this out in demo
                // image now taller than normal, will result in loss of quality.
                item.nativeElement.style.height = item.nativeElement.naturalHeight + 'px';
                // especially this "contain" restriction
                // smart phone images should be taller than 673px usually though.
                item.nativeElement.style.objectFit = 'contain';

              }
            }
          } else {
            if (that.computeAspectRation(item.nativeElement) < 0.8 ) {
              item.nativeElement.style.maxHeight = 'unset';
              item.nativeElement.style.objectFit = 'cover';

              if (item.nativeElement.offsetHeight > item.nativeElement.naturalHeight) {
                // image now more than normal, will result in loss of quality.
                item.nativeElement.style.height = item.nativeElement.naturalHeight + 'px';
                item.nativeElement.style.objectFit = 'contain';

              }
            }
          }

          allLoaded[index] = true;

          if (allLoaded.every(x => !x)) {
            that.triggerReset();
          }
        };
      }
    });
  }

  triggerUpdate(): void {
    this.updateLayout += 1;
  }

  triggerReset(masonry?: NgxMasonryComponent) {
    (this.masonry || masonry).reloadItems();
    (this.masonry || masonry).layout();
  }

  private computeAspectRation(img: HTMLImageElement): number {
    return img.naturalWidth / img.naturalHeight;
  }

  handleMasonryComplete(evt: any) {
    // TODO (oneeyedsunday) try to deduce how many items fit into masonry here
    // console.log(evt);
    this.itemsLeft = this.pItems.length - this.howManyItemsDidMasonryFit(evt);
  }

  private howManyItemsDidMasonryFit(masonryLayout: any): number {
    return 4;
  }

  openLightbox($event: Event, index: number): void {
    if (this.disableInteraction) {
      return;
    }

    if ($event) {
      $event.preventDefault();
    }

    this.lightboxModalRef = this.modalService.open(MediaLightboxComponent,
        { keyboard: true, size: 'lg', windowClass: 'lightbox-modal' });

    this.lightboxModalRef.componentInstance.index = index || 0;
    this.lightboxModalRef.componentInstance.media = this.pItems;
    this.lightboxModalRef.componentInstance.meta = this.meta;
    this.lightboxModalRef.componentInstance.isGroup = this.isGroup;
  }

  closeLightbox(): void {
    if (this.lightboxModalRef) {
      this.lightboxModalRef.close();
    }
  }

  ngOnDestroy() {
    if (this.lightboxModalRef) {
      this.lightboxModalRef.close();
    }
    this.objectUrls.forEach(url => {
      try {
        URL.revokeObjectURL(url);
      } catch (error) {
      }
    });
  }
}
