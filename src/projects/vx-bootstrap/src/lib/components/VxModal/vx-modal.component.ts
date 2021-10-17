import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Modal } from 'bootstrap';
import { VxComponentSize } from '../../types';
import { hasInnerContent } from '../../utils/angular';
import random from '../../utils/random';
import { VxModalBackdrop, VxModalFullscreen } from './VxModal.types';

const template = /*html*/`
<span (click)="onActivatorClicked()">
  <ng-content select="[vxModalActivator]"></ng-content>
</span>

<!-- Modal -->
<div [id]="vxModalId" class="modal fade" tabindex="-1">
  <div class="modal-dialog" [ngClass]="modalDialogClass">
    <div class="modal-content">

      <div #headerContainer [ngClass]="headerContainerClass">
        <ng-content select="[vxModalHeader]"></ng-content>
      </div>
      
      <div #bodyContainer [ngClass]="bodyContainerClass">
        <ng-content select="[vxModalBody]"></ng-content>
      </div>
      
      <div #footerContainer [ngClass]="footerContainerClass">
        <ng-content select="[vxModalFooter]"></ng-content>
      </div>

    </div>
  </div>
</div>
`

@Component({
  selector: 'vx-modal',
  template,
})
export class VxModalComponent implements AfterViewInit {

  @ViewChild('headerContainer', { static: true })
  headerContainer!: ElementRef<HTMLDivElement>

  @ViewChild('bodyContainer', { static: true })
  bodyContainer!: ElementRef<HTMLDivElement>

  @ViewChild('footerContainer', { static: true })
  footerContainer!: ElementRef<HTMLDivElement>
  
  @Input() backdrop: VxModalBackdrop | undefined
  @Input() centered = false
  @Input() fullscreen: VxModalFullscreen | undefined
  @Input() scrollable = false
  @Input() size: VxComponentSize = 'md'

  readonly vxModalId = random.newGuid()

  private modal!: Modal

  constructor() { }

  ngAfterViewInit(): void {
    const modalElement = document.getElementById(this.vxModalId)

    if (!modalElement)
      throw 'Could not initialize VxModal because no Bootstrap Modal was found'
    
    if (this.backdrop == 'static') {
      modalElement.setAttribute('data-bs-backdrop', 'static')
      modalElement.setAttribute('data-bs-keyboard', 'false')
    }

    this.modal = new Modal(modalElement)
  }

  get headerContainerClass() {
    const hasContent = hasInnerContent(this.headerContainer)
    return {
      'modal-header': hasContent,
      'd-none': !hasContent,
    }
  }

  get bodyContainerClass() {
    const hasContent = hasInnerContent(this.bodyContainer)
    return {
      'modal-body': hasContent,
      'd-none': !hasContent,
    }
  }

  get footerContainerClass() {
    const hasContent = hasInnerContent(this.footerContainer)
    return {
      'modal-footer': hasContent,
      'd-none': !hasContent,
    }
  }

  get modalDialogClass() {
    const classes: string[] = []

    if (this.size != 'md')
      classes.push(`modal-${this.size}`)

    if (this.fullscreen != undefined && this.fullscreen != null) {
      if (this.fullscreen == 'always')
        classes.push('modal-fullscreen')
      else
        classes.push(`modal-fullscreen-${this.fullscreen}-down`)
    }
    
    if (this.centered)
    
    if (this.scrollable)
      classes.push('modal-dialog-scrollable')
    
    return classes
  }

  onActivatorClicked() {
    this.modal.show()
  }
}
