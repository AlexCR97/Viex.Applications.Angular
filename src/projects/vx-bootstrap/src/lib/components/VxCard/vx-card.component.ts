import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { VxComponentSize } from '../../types';

const template = /*html*/`
<div class="card" [ngClass]="cardClass">

  <div #headerContainer [ngClass]="cardHeaderClass">
    <ng-content select="[header]"></ng-content>
  </div>

  <div #bodyContainer [ngClass]="cardBodyClass">
    <ng-content select="[body]"></ng-content>
  </div>
  
  <div #footerContainer [ngClass]="cardFooterClass">
    <ng-content select="[footer]"></ng-content>
  </div>

  <ng-content></ng-content>

</div>
`

@Component({
  selector: 'vx-card',
  template,
})
export class VxCardComponent implements OnInit {

  @ViewChild('headerContainer', { static: true })
  headerContainer!: ElementRef<HTMLDivElement>;

  @ViewChild('bodyContainer', { static: true })
  bodyContainer!: ElementRef<HTMLDivElement>;

  @ViewChild('footerContainer', { static: true })
  footerContainer!: ElementRef<HTMLDivElement>;

  @Input() shadow: VxComponentSize | undefined

  constructor() { }

  ngOnInit(): void { }

  get cardClass() {
    const classes: string[] = []

    if (!this.shadow)
      classes.push('shadow-none')  
    else if (this.shadow == 'md')
      classes.push('shadow')
    else
      classes.push(`shadow-${this.shadow}`)

    return classes
  }
  
  get cardHeaderClass() {
    const hasContent = this.hasInnerContent(this.headerContainer)
    
    return {
      'card-header': hasContent,
      'd-none': !hasContent,
    }
  }

  get cardBodyClass() {
    const hasContent = this.hasInnerContent(this.bodyContainer)

    return {
      'card-body': hasContent,
      'd-none': !hasContent,
    }
  }

  get cardFooterClass() {
    const hasContent = this.hasInnerContent(this.footerContainer)

    return {
      'card-footer': hasContent,
      'd-none': !hasContent,
    }
  }
  
  private hasInnerContent(ref: ElementRef) {
    const element = ref.nativeElement
    return element.hasChildNodes() || element.innerHTML.trim().length > 0
  }

}
