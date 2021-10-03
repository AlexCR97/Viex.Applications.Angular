import { Component, OnInit } from '@angular/core';
import { VxButtonVariant } from 'projects/vx-bootstrap/src/lib/types';

const template = /*html*/`
<div class="container">

  <h2>Buttons</h2>
  <hr>
  <div class="mb-5"></div>

  <div class="mb-5">
    <h5>Buttons Variants</h5>
    <div class="card">
      <div class="card-body">
        <vx-flex>
          <div *ngFor="let item of buttonVariants" class="mx-1">
            <vx-button  [label]="item" [variant]="item"></vx-button>
          </div>
        </vx-flex>
      </div>
    </div>
  </div>

  <div class="mb-5">
    <h5>Outlined buttons</h5>
    <div class="card">
      <div class="card-body">
        <vx-flex>
          <div *ngFor="let item of buttonVariants" class="mx-1">
            <vx-button [outlined]="true" [label]="item" [variant]="item"></vx-button>
          </div>
        </vx-flex>
      </div>
    </div>
  </div>

  <div class="mb-5">
    <h5>Button sizes</h5>
    <div class="card">
      <div class="card-body">
        <vx-flex [align]="'center'">
          <div class="mx-1"></div>
          <vx-button label="Small" size="sm" variant="primary"></vx-button>
          <div class="mx-1"></div>
          <vx-button label="Medium" size="md" variant="primary"></vx-button>
          <div class="mx-1"></div>
          <vx-button label="Large" size="lg" variant="primary"></vx-button>
          <div class="mx-1"></div>
        </vx-flex>
      </div>
    </div>
  </div>

  <div class="mb-5">
    <h5>Disabled buttons</h5>
    <div class="card">
      <div class="card-body">
        <vx-flex>
          <div class="mx-1"></div>
          <vx-button label="This is a normal button" variant="primary"></vx-button>
          <div class="mx-1"></div>
          <vx-button [disabled]="true" label="This is a disabled button" variant="primary"></vx-button>
          <div class="mx-1"></div>
        </vx-flex>
      </div>
    </div>
  </div>

  <div class="mb-5">
    <h5>Loading buttons</h5>
    <div class="card">
      <div class="card-body">

        <vx-flex>
          <div *ngFor="let item of buttonVariants" class="mx-1">
            <vx-button label="Loading" [loading]="true" [variant]="item"></vx-button>
          </div>
        </vx-flex>
        <div class="mb-2"></div>
        
        <vx-flex>
          <div *ngFor="let item of buttonVariants" class="mx-1">
            <vx-button label="Loading" [loading]="true" loadingAnimation="grow" [variant]="item"></vx-button>
          </div>
        </vx-flex>
        <div class="mb-2"></div>
        
        <vx-flex>
          <div *ngFor="let item of buttonVariants" class="mx-1">
            <vx-button label="Loading" [loading]="true" loadingPlacement="start" [variant]="item"></vx-button>
          </div>
        </vx-flex>
        <div class="mb-2"></div>

        <vx-flex>
          <div *ngFor="let item of buttonVariants" class="mx-1">
            <vx-button label="Loading" [loading]="true" loadingAnimation="grow" loadingPlacement="start" [variant]="item"></vx-button>
          </div>
        </vx-flex>

      </div>
    </div>
  </div>

  <div class="mb-5">
    <h5>Buttons with icons</h5>
    <div class="card">
      <div class="card-body">

        <div class="d-flex align-items-center mb-2">
          <div *ngFor="let item of buttonVariants" class="mx-1">
            <vx-button icon="house" label="Icon" [variant]="item"></vx-button>
          </div>
        </div>

        <div class="d-flex align-items-center">
          <div *ngFor="let item of buttonVariants" class="mx-1">
            <vx-button icon="house" iconPlacement="end" label="Icon" [variant]="item"></vx-button>
          </div>
        </div>

      </div>
    </div>
  </div>

  <vx-icon></vx-icon>
</div>

`

@Component({
  selector: 'app-buttons-page',
  template,
  styles: [
  ]
})
export class ButtonsPageComponent implements OnInit {


  buttonVariants: VxButtonVariant[] = [ 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link' ]

  constructor() { }

  ngOnInit(): void {
  }

}
