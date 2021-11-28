
import {
  Component,
  ComponentFactoryResolver,
  ViewChild,
  ElementRef,
  ViewContainerRef,
} from '@angular/core';
import { NbSidebarService, NbThemeService } from '@nebular/theme';
;
import { DynamicComponent } from '../../corporations/dynamic/dynamic.component'

@Component({
  selector: 'app-creator-compoinent',
  templateUrl: './creator-compoinent.component.html',
  styleUrls: ['./creator-compoinent.component.scss']
})
export class CreatorCompoinentComponent {
  @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private sidebarService: NbSidebarService, private nbthemeservice: NbThemeService) { }

  add(): void {
    const dinamicComponetFactoryCreater = this.componentFactoryResolver.resolveComponentFactory(DynamicComponent);
    const componentRef = this.container.createComponent(dinamicComponetFactoryCreater);


  }



}
