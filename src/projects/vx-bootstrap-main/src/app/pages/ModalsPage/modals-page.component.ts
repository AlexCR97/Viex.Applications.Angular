import { Component, OnInit } from '@angular/core';
import { VxModalFullscreen } from 'dist/vx-bootstrap/lib/components/VxModal/VxModal.types';
import { VxComponentSize } from 'dist/vx-bootstrap/lib/types';

const template = /*html*/`
<div class="container pb-5">

  <h2>Modals</h2>
  <hr>
  <div class="mb-5"></div>

  <div class="mb-5">
    <h6>Simple Modal</h6>
    <vx-card>
      <div body>
        <vx-modal>
          <vx-button vxModalActivator label="Click here to open a simple modal" [outlined]="true" variant="secondary"></vx-button>
          <div vxModalHeader style="width: 100%;">
            <vx-flex justify="between" [align]="'center'">
              <h5 class="m-0">Simple modal</h5>
              <button class="btn-close" data-bs-dismiss="modal"></button>
            </vx-flex>
          </div>
          <div vxModalBody>
            <p>This is a simple modal!</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, delectus est quo laboriosam doloribus ut expedita reiciendis maiores pariatur necessitatibus! Vitae inventore delectus, adipisci quia corporis distinctio est asperiores enim.</p>
          </div>
          <div vxModalFooter>
            <vx-button label="Save Changes" variant="primary"></vx-button>
          </div>
        </vx-modal>
      </div>
    </vx-card>
  </div>

  <div class="mb-5">
    <h6>Modal Backdrop</h6>
    <vx-card>
      <div body>
        <vx-modal backdrop="static">
          <vx-button vxModalActivator label="Static Backdrop" [outlined]="true" variant="secondary"></vx-button>
          <div vxModalHeader style="width: 100%;">
            <vx-flex justify="between" [align]="'center'">
              <h5 class="m-0">Static Backdrop</h5>
              <button class="btn-close" data-bs-dismiss="modal"></button>
            </vx-flex>
          </div>
          <div vxModalBody>
            <p>This modal has a static backdrop.</p>
            <p>Modals with a static backdrop cannot be closed by clicking on the overlay.</p>
          </div>
        </vx-modal>
      </div>
    </vx-card>
  </div>

  <div class="mb-5">
    <h6>Scrollable Modal</h6>
    <vx-card>
      <div body>
        <vx-modal>
          <vx-button vxModalActivator label="Open Scrollable Modal" [outlined]="true" variant="secondary"></vx-button>
          <div vxModalHeader style="width: 100%;">
            <vx-flex justify="between" [align]="'center'">
              <h5 class="m-0">Scrollable Modal</h5>
              <button class="btn-close" data-bs-dismiss="modal"></button>
            </vx-flex>
          </div>
          <div vxModalBody>
            <p>Modals with really long content will scroll the entire modal automatically.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus temporibus nostrum ipsa itaque cumque necessitatibus reiciendis? Illum, fugit repellat autem fuga dicta magni necessitatibus provident unde amet iusto ipsum. Fugiat.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur cumque in est deserunt esse iure itaque quos expedita ea nemo, odio perferendis laudantium unde sequi fugiat omnis dolorem ipsum ex?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quas dicta vitae vero quam ullam beatae veritatis necessitatibus ad nulla ipsa, explicabo, officia quaerat reprehenderit magni. Reprehenderit voluptate ea excepturi.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo doloremque cum quaerat distinctio velit fugiat eaque, voluptatum quos iure non accusantium sapiente odio optio! Impedit atque aperiam animi facilis reprehenderit.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur eos quia quos commodi, vero, atque, iure ex facere autem ab odio molestiae consequuntur dolor. Facilis expedita doloribus dolor eum? Dolorum.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus temporibus nostrum ipsa itaque cumque necessitatibus reiciendis? Illum, fugit repellat autem fuga dicta magni necessitatibus provident unde amet iusto ipsum. Fugiat.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur cumque in est deserunt esse iure itaque quos expedita ea nemo, odio perferendis laudantium unde sequi fugiat omnis dolorem ipsum ex?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quas dicta vitae vero quam ullam beatae veritatis necessitatibus ad nulla ipsa, explicabo, officia quaerat reprehenderit magni. Reprehenderit voluptate ea excepturi.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo doloremque cum quaerat distinctio velit fugiat eaque, voluptatum quos iure non accusantium sapiente odio optio! Impedit atque aperiam animi facilis reprehenderit.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur eos quia quos commodi, vero, atque, iure ex facere autem ab odio molestiae consequuntur dolor. Facilis expedita doloribus dolor eum? Dolorum.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus temporibus nostrum ipsa itaque cumque necessitatibus reiciendis? Illum, fugit repellat autem fuga dicta magni necessitatibus provident unde amet iusto ipsum. Fugiat.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur cumque in est deserunt esse iure itaque quos expedita ea nemo, odio perferendis laudantium unde sequi fugiat omnis dolorem ipsum ex?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quas dicta vitae vero quam ullam beatae veritatis necessitatibus ad nulla ipsa, explicabo, officia quaerat reprehenderit magni. Reprehenderit voluptate ea excepturi.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo doloremque cum quaerat distinctio velit fugiat eaque, voluptatum quos iure non accusantium sapiente odio optio! Impedit atque aperiam animi facilis reprehenderit.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur eos quia quos commodi, vero, atque, iure ex facere autem ab odio molestiae consequuntur dolor. Facilis expedita doloribus dolor eum? Dolorum.</p>
          </div>
        </vx-modal>
      </div>
    </vx-card>
  </div>

  <div class="mb-5">
    <h6>Scrollable Modal Content</h6>
    <vx-card>
      <div body>
        <vx-modal [scrollable]="true">
          <vx-button vxModalActivator label="Open Modal with Scrollable Content" [outlined]="true" variant="secondary"></vx-button>
          <div vxModalHeader style="width: 100%;">
            <vx-flex justify="between" [align]="'center'">
              <h5 class="m-0">Modal with Scrollable Content</h5>
              <button class="btn-close" data-bs-dismiss="modal"></button>
            </vx-flex>
          </div>
          <div vxModalBody>
            <p>Modals with really long content will scroll the entire modal automatically.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus temporibus nostrum ipsa itaque cumque necessitatibus reiciendis? Illum, fugit repellat autem fuga dicta magni necessitatibus provident unde amet iusto ipsum. Fugiat.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur cumque in est deserunt esse iure itaque quos expedita ea nemo, odio perferendis laudantium unde sequi fugiat omnis dolorem ipsum ex?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quas dicta vitae vero quam ullam beatae veritatis necessitatibus ad nulla ipsa, explicabo, officia quaerat reprehenderit magni. Reprehenderit voluptate ea excepturi.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo doloremque cum quaerat distinctio velit fugiat eaque, voluptatum quos iure non accusantium sapiente odio optio! Impedit atque aperiam animi facilis reprehenderit.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur eos quia quos commodi, vero, atque, iure ex facere autem ab odio molestiae consequuntur dolor. Facilis expedita doloribus dolor eum? Dolorum.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus temporibus nostrum ipsa itaque cumque necessitatibus reiciendis? Illum, fugit repellat autem fuga dicta magni necessitatibus provident unde amet iusto ipsum. Fugiat.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur cumque in est deserunt esse iure itaque quos expedita ea nemo, odio perferendis laudantium unde sequi fugiat omnis dolorem ipsum ex?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quas dicta vitae vero quam ullam beatae veritatis necessitatibus ad nulla ipsa, explicabo, officia quaerat reprehenderit magni. Reprehenderit voluptate ea excepturi.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo doloremque cum quaerat distinctio velit fugiat eaque, voluptatum quos iure non accusantium sapiente odio optio! Impedit atque aperiam animi facilis reprehenderit.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur eos quia quos commodi, vero, atque, iure ex facere autem ab odio molestiae consequuntur dolor. Facilis expedita doloribus dolor eum? Dolorum.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus temporibus nostrum ipsa itaque cumque necessitatibus reiciendis? Illum, fugit repellat autem fuga dicta magni necessitatibus provident unde amet iusto ipsum. Fugiat.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur cumque in est deserunt esse iure itaque quos expedita ea nemo, odio perferendis laudantium unde sequi fugiat omnis dolorem ipsum ex?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quas dicta vitae vero quam ullam beatae veritatis necessitatibus ad nulla ipsa, explicabo, officia quaerat reprehenderit magni. Reprehenderit voluptate ea excepturi.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo doloremque cum quaerat distinctio velit fugiat eaque, voluptatum quos iure non accusantium sapiente odio optio! Impedit atque aperiam animi facilis reprehenderit.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur eos quia quos commodi, vero, atque, iure ex facere autem ab odio molestiae consequuntur dolor. Facilis expedita doloribus dolor eum? Dolorum.</p>
          </div>
        </vx-modal>
      </div>
    </vx-card>
  </div>

  <div class="mb-5">
    <h6>Vetically Centered Modal</h6>
    <vx-card>
      <div body>
        <vx-modal [centered]="true">
          <vx-button vxModalActivator label="Open Vertically Centered Modal" [outlined]="true" variant="secondary"></vx-button>
          <div vxModalHeader style="width: 100%;">
            <vx-flex justify="between" [align]="'center'">
              <h5 class="m-0">Centered Modal</h5>
              <button class="btn-close" data-bs-dismiss="modal"></button>
            </vx-flex>
          </div>
          <div vxModalBody>
            <p>This modal is vertically centered!</p>
          </div>
        </vx-modal>
      </div>
    </vx-card>
  </div>

  <div class="mb-5">
    <h6>Modal Sizes</h6>
    <vx-card>
      <div body>
        <vx-flex>
          <div *ngFor="let item of modalSizes" class="me-3">
            <vx-modal [size]="item">
              <vx-button vxModalActivator [label]="'Open ' + item + ' Modal'" [outlined]="true" variant="secondary"></vx-button>
              <div vxModalHeader style="width: 100%;">
                <vx-flex justify="between" [align]="'center'">
                  <h5 class="m-0">Modal with size</h5>
                  <button class="btn-close" data-bs-dismiss="modal"></button>
                </vx-flex>
              </div>
              <div vxModalBody>
                <p>This modal has a size of <b>{{item}}</b></p>
              </div>
            </vx-modal>
          </div>
        </vx-flex>
      </div>
    </vx-card>
  </div>

  <div class="mb-5">
    <h6>Fullscreen Modal</h6>
    <vx-card>
      <div body>
        <vx-flex>
          <div *ngFor="let item of modalFullscreenItems" class="me-3">
            <vx-modal [fullscreen]="item">
              <vx-button vxModalActivator [label]="'Fullscreen ' + item" [outlined]="true" variant="secondary"></vx-button>
              <div vxModalHeader style="width: 100%;">
                <vx-flex justify="between" [align]="'center'">
                  <h5 class="m-0">Fullscreen {{item}}</h5>
                  <button class="btn-close" data-bs-dismiss="modal"></button>
                </vx-flex>
              </div>
              <div vxModalBody>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates autem aspernatur officiis voluptatem perspiciatis fugit natus distinctio, corrupti saepe similique dolor ad libero magnam sequi voluptas possimus! Quis, possimus labore!
              </div>
            </vx-modal>
          </div>
        </vx-flex>
      </div>
    </vx-card>
  </div>

</div>
`

@Component({
  selector: 'app-modals-page',
  template,
})
export class ModalsPageComponent implements OnInit {

  modalSizes: VxComponentSize[] = [ 'sm', 'md', 'lg', 'xl' ]
  modalFullscreenItems: VxModalFullscreen[] = [ 'always', 'sm', 'md', 'lg', 'xl', 'xxl' ]

  constructor() { }

  ngOnInit(): void {
  }

}
