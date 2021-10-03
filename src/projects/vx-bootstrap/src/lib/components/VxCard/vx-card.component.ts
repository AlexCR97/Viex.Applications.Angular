import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { VxComponentSize } from '../../types';

const template = /*html*/`
<div class="card" [ngClass]="cardClass">

  <div #cardHeaderContainer [ngClass]="cardHeaderClass">
    <ng-content select="[vxCardHeader]"></ng-content>
  </div>

  <div #cardBodyContainer [ngClass]="cardBodyClass">
    <ng-content select="[vxCardBody]"></ng-content>
  </div>
  
  <div #cardFooterContainer [ngClass]="cardFooterClass">
    <ng-content select="[vxCardFooter]"></ng-content>
  </div>

  <ng-content></ng-content>

</div>
`

@Component({
  selector: 'vx-card',
  template,
})
export class VxCardComponent implements OnInit {

  @ViewChild('cardHeaderContainer', { static: true })
  cardHeaderContainer!: ElementRef<HTMLDivElement>;

  @ViewChild('cardBodyContainer', { static: true })
  cardBodyContainer!: ElementRef<HTMLDivElement>;

  @ViewChild('cardFooterContainer', { static: true })
  cardFooterContainer!: ElementRef<HTMLDivElement>;

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
    const hasContent = this.hasInnerContent(this.cardHeaderContainer)
    
    return {
      'card-header': hasContent,
      'd-none': !hasContent,
    }
  }

  get cardBodyClass() {
    const hasContent = this.hasInnerContent(this.cardBodyContainer)

    return {
      'card-body': hasContent,
      'd-none': !hasContent,
    }
  }

  get cardFooterClass() {
    const hasContent = this.hasInnerContent(this.cardFooterContainer)

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
