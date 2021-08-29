import { ApplicationRef, Injectable } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root',
})
export class MobilResponsibe {
  public mobileQuery: MediaQueryList;
  mobileQueryListener: () => void;
  constructor(
    public media: MediaMatcher,
    public changeDetector: ApplicationRef
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetector.tick();
    this.mobileQuery.addEventListener('change', () => changeDetector.tick());
  }
}
