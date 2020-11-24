import {
  Component, AfterViewInit, OnInit,
  Input, ViewChild, ElementRef, OnDestroy, HostListener
} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { debounceTime, filter, takeUntil, tap } from 'rxjs/operators';
import { FeedItem as FeedMediaItem } from '../feed-media/media.component';

function computeAspectRatio(width: number, height: number): number {
  return width / height;
}

function stopEvtProp(event: Event): void {
  if (!event) {
    return;
  }
  event.stopImmediatePropagation();
  event.stopPropagation();
}
@Component({
  selector: 'app-media-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./style.css']
})
export class MediaLightboxComponent implements AfterViewInit, OnDestroy, OnInit {
  @ViewChild('wrapper') wrapperRef: ElementRef<HTMLDivElement>;
  @ViewChild('mediaContainer') mediaContainerRef: ElementRef<HTMLDivElement>;
  @ViewChild('imgRef') imgRef: ElementRef<HTMLImageElement>;
  @ViewChild('videoRef') videoRef: ElementRef<HTMLVideoElement>;
  @ViewChild('closeCTARef') closeCTARef: ElementRef<HTMLDivElement>;
  @ViewChild('nextCTARef') nextCTARef: ElementRef<HTMLDivElement>;
  @ViewChild('previousCTARef') previousCTARef: ElementRef<HTMLDivElement>;
  @ViewChild('refCaption') captionRef: ElementRef<HTMLDivElement>;
  @Input() media: FeedMediaItem[] = [];
  @Input() meta: { creator: any; post?: any };
  @Input() isGroup?: boolean;
  @Input() index = 0;

  currentMedia: { url: string; type: 'video' | 'image' };
  mediaContainerRect: DOMRect;
  closed: boolean;

  destroyed$ = new Subject<void>();

  constructor(
    private activeModal: NgbActiveModal
  ) { }

  get canNext(): boolean {
    return this.index < (this.media.length - 1);
  }

  get canPrevious(): boolean {
    return this.index > 0;
  }

  @HostListener('click', ['$event'])
  onClick(evt: Event) {
    this.close(evt);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.mediaContainerRect = this.mediaContainerRef.nativeElement.getBoundingClientRect();
    this.handleMediaSelection(this.index);

    this.handleVideoCases();
    this.imgRef.nativeElement.addEventListener('load', evt => {
      if (!(this.currentMedia.type || '').startsWith('video')) {
        this.mediaContainerRef.nativeElement.classList.remove('loading');
        const img: HTMLImageElement = evt.target as any;
        this.mediaContainerRect = this.mediaContainerRef.nativeElement.getBoundingClientRect();
        this.positionCTAs(img.getBoundingClientRect(), img.naturalHeight);
        this.captionRef.nativeElement.style.top = 'calc(100% - 150px)';
      }
    });

    const that = this;

    this.imgRef.nativeElement.addEventListener('error', function() {
      if (!(that.currentMedia.type || '').startsWith('video')) {
        this.src = '/assets/images/Media-failed-Involved.png';
      }
    });

    this.imgRef.nativeElement.addEventListener('error', () => {
      if (!(this.currentMedia.type || '').startsWith('video')) {
        this.mediaContainerRef.nativeElement.classList.remove('loading');
      }
    });
  }

  handleMediaSelection(index: number): void {
    this.index = index;
    this.mediaContainerRef.nativeElement.classList.add('loading');
    this.currentMedia = {
      url: this.media[index].url,
      type: (this.media[index].type || this.media[index].contentType || '').startsWith('video') ? 'video' : 'image'
    };

    this.hideElements();
  }

  positionCTAs(imageBounds: DOMRect, imgHeight: number): void {
   /**
    * For now, position CTAs wrt media container as images dims may change and would result in CTAs jumping around
    * this.nextCTARef.nativeElement.style.top = (0.5 * (15 + height)) + 'px';
    * this.nextCTARef.nativeElement.style.right = (15 + offsetWidth) + 'px';
    */
    this.closeCTARef.nativeElement.style.right = (this.mediaContainerRect.right - imageBounds.right) + 36 + 'px';
    this.nextCTARef.nativeElement.style.right = (this.mediaContainerRect.right - imageBounds.right) + 36 + 'px';
    this.nextCTARef.nativeElement.style.top = ((0.5 * imageBounds.height) + (imageBounds.top - this.mediaContainerRect.top)) + 'px';
    this.previousCTARef.nativeElement.style.top = ((0.5 * imageBounds.height) + (imageBounds.top - this.mediaContainerRect.top)) + 'px';
    this.previousCTARef.nativeElement.style.left = (6 + (imageBounds.left -  this.mediaContainerRect.left) - 30) + 'px';
    // (258 - 48) + 46 - (60)
    // space btw image and container + 46 px from XD - 60px discrepancy from transparent bg
    this.closeCTARef.nativeElement.style.top = ((imageBounds.top - this.mediaContainerRect.top) + (46 - 60))  + 'px';
    this.closeCTARef.nativeElement.style.left = 'unset';
  }

  private hideElements(): void {
    if ((this.currentMedia.type || '').startsWith('video')) {
      this.imgRef.nativeElement.style.display = 'none';
      this.videoRef.nativeElement.style.display = 'block';
    } else {
      this.videoRef.nativeElement.style.display = 'none';
      this.imgRef.nativeElement.style.display = 'block';
    }
  }

  private handleVideoCases() {
    /*
    * Former Code - Now, dont wait for loaded events just show
    this.videoRef.nativeElement.addEventListener('loadeddata', evt => {
      if ((this.currentMedia.type || '').startsWith('video')) {
        this.mediaContainerRef.nativeElement.classList.remove('loading');
        const video: HTMLVideoElement = evt.target as any;
        this.mediaContainerRect = this.mediaContainerRef.nativeElement.getBoundingClientRect();
        this.positionCTAs(video.getBoundingClientRect(), video.videoHeight);
        const vRect = video.getBoundingClientRect();
        this.captionRef.nativeElement.style.top = `calc((100% + 40px) - ${vRect.top}px)`;
      }
    });

    this.videoRef.nativeElement.addEventListener('error', () => {
      if ((this.currentMedia.type || '').startsWith('video')) {
        this.mediaContainerRef.nativeElement.classList.remove('loading');
      }
    });
    */

    // Fallback
    if ((this.currentMedia.type || '').startsWith('video')) {
      Promise.resolve()
        .then(() => {
          this.mediaContainerRef.nativeElement.classList.remove('loading');
          const video = this.videoRef.nativeElement;
          this.mediaContainerRect = this.mediaContainerRef.nativeElement.getBoundingClientRect();
          this.positionCTAs(video.getBoundingClientRect(), video.videoHeight);
          const vRect = video.getBoundingClientRect();
          this.captionRef.nativeElement.style.top = `calc((100% + 40px) - ${vRect.top}px)`;
        });
    }
  }

  close(event: Event) {
    stopEvtProp(event);
    this.activeModal.close();
    this.closed = true;
  }

  next(event: Event) {
    stopEvtProp(event);
    if (this.canNext) {
      this.handleMediaSelection(this.index + 1);
    }
  }

  previous(event: Event) {
    stopEvtProp(event);
    if (this.canPrevious) {
      this.handleMediaSelection(this.index - 1);
    }
  }

  handleWrapperClick(event: Event): void {
    stopEvtProp(event);
    this.close(event);
  }

  noop(event: Event) {
    stopEvtProp(event);
  }

  ngOnDestroy() {
    this.destroyed$.next();
    if (!this.closed) {
      try {
        this.close(null);
      } catch (error) {
        // perhaps already closed or no lonerg in DOM
      }
    }
  }
}
