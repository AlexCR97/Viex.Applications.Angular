import { Component, OnInit } from '@angular/core';

const template = /*html*/`
<div class="container pb-5">

  <h2>Tooltips</h2>
  <hr>
  <div class="mb-5"></div>

  <div class="mb-5">
    <h6>Simple Tooltip</h6>
    <vx-card>
      <div body>
        <vx-tooltip message="This is a simple tooltip">
          <vx-button label="Hover over me to view the tooltip" variant="link"></vx-button>
        </vx-tooltip>
      </div>
    </vx-card>
  </div>

  <div class="mb-5">
    <h6>Tooltip placement</h6>
    <vx-card>
      <div body>
        <vx-flex>

          <vx-tooltip message="Top placement tooltip" placement="top">
            <vx-button label="Top placement" variant="link"></vx-button>
          </vx-tooltip>
          <div class="me-2"></div>

          <vx-tooltip message="Right placement tooltip" placement="right">
            <vx-button label="Right placement" variant="link"></vx-button>
          </vx-tooltip>
          <div class="me-2"></div>

          <vx-tooltip message="Bottom placement tooltip" placement="bottom">
            <vx-button label="Bottom placement" variant="link"></vx-button>
          </vx-tooltip>
          <div class="me-2"></div>

          <vx-tooltip message="Left placement tooltip" placement="left">
            <vx-button label="Left placement" variant="link"></vx-button>
          </vx-tooltip>
          <div class="me-2"></div>

        </vx-flex>
      </div>
    </vx-card>
  </div>

  <div class="mb-5">
    <h6>Tooltip with long content</h6>
    <vx-card>
      <div body>
        <vx-tooltip message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem aspernatur odit ratione molestias illo, nobis doloremque odio sed beatae quos non aperiam corrupti reiciendis consequatur maxime ea ipsa suscipit dolore. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem ducimus velit ipsam! Libero dolores totam deleniti consequatur explicabo ducimus voluptatibus numquam tempora odit. Asperiores, laboriosam! Quasi accusamus soluta eum reiciendis?">
          <vx-button label="Hover to view long content" variant="link"></vx-button>
        </vx-tooltip>
      </div>
    </vx-card>
  </div>

</div>
`
@Component({
  selector: 'app-tooltips-page',
  template,
})
export class TooltipsPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
