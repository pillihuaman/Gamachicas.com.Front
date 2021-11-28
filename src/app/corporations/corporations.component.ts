import {
  Component,
  ComponentFactoryResolver,
  ViewChild,
  ElementRef,
  ViewContainerRef,
} from '@angular/core';
import { NbSidebarService, NbThemeService } from '@nebular/theme';
;
import { DynamicComponent } from '../corporations/dynamic/dynamic.component'
@Component({
  selector: 'app-corporations',
  templateUrl: './corporations.component.html',
  styleUrls: ['./corporations.component.scss']
})
export class CorporationsComponent {
  @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private sidebarService: NbSidebarService, private nbthemeservice: NbThemeService) { }

  add(): void {
    const dinamicComponetFactoryCreater = this.componentFactoryResolver.resolveComponentFactory(DynamicComponent);
    const componentRef = this.container.createComponent(dinamicComponetFactoryCreater);


  }


  toggle(): boolean {
    this.sidebarService.toggle(true, 'menu-barapp');
    return false;
  }

  toggleout() {
    this.sidebarService.collapse('menu-barapp');

  }


}
