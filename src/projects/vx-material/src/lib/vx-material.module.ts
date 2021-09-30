import { NgModule } from '@angular/core';
import { AngularMaterialModule } from './modules/angular-material.module';
import { VxMaterialComponent } from './vx-material.component';



@NgModule({
  declarations: [
    VxMaterialComponent
  ],
  imports: [
    AngularMaterialModule,
  ],
  exports: [
    VxMaterialComponent
  ]
})
export class VxMaterialModule { }
