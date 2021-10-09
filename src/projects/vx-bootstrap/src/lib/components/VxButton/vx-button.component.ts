import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { VxButtonVariant, VxComponentSize, VxHorizontalPlacement, VxSpinnerAnimation } from '../../types';

const template = /*html*/`
<button
  [disabled]="disabled"
  [ngClass]="buttonClass"
  (click)="onClicked()">

  <span *ngIf="hasIcon && !loading && isIconPlacementStart" class="me-2">
    <vx-icon [icon]="icon"></vx-icon>
  </span>

  <span *ngIf="loading && isLoadingPlacementStart" class="me-2">
    <vx-spinner [animation]="loadingAnimation" size="sm"></vx-spinner>
  </span>

  <span>{{label}}</span>

  <span *ngIf="hasIcon && !loading && isIconPlacementEnd" class="ms-2">
    <vx-icon [icon]="icon"></vx-icon>
  </span>

  <span *ngIf="loading && isLoadingPlacementEnd" class="ms-2">
    <vx-spinner [animation]="loadingAnimation" size="sm"></vx-spinner>
  </span>

</button>
`

@Component({
  selector: 'vx-button',
  template,
})
export class VxButtonComponent implements OnInit {

  @Input() disabled = false
  @Input() icon: string | undefined
  @Input() iconPlacement: VxHorizontalPlacement = 'start'
  @Input() outlined = false
  @Input() label = 'Button'
  @Input() loading = false
  @Input() loadingAnimation: VxSpinnerAnimation = 'border'
  @Input() loadingPlacement: VxHorizontalPlacement = 'end'
  @Input() size: VxComponentSize = 'md'
  @Input() variant: VxButtonVariant | undefined

  @Output() clicked = new EventEmitter<void>()

  constructor() { }

  ngOnInit(): void {
  }

  get buttonClass() {
    const classes = [ 'btn', `btn-${this.size}` ]

    if (this.outlined)
      classes.push(`btn-outline-${this.variant}`)
    else
      classes.push(`btn-${this.variant}`)
    
    return classes
  }

  get hasIcon() {
    return this.icon != undefined && this.icon != null && this.icon.trim().length != 0
  }

  get isIconPlacementEnd() {
    return this.iconPlacement == 'end'
  }

  get isIconPlacementStart() {
    return this.iconPlacement == 'start'
  }

  get isLoadingPlacementEnd() {
    return this.loadingPlacement == 'end'
  }

  get isLoadingPlacementStart() {
    return this.loadingPlacement == 'start'
  }

  onClicked() {
    this.clicked.emit()
  }

}
