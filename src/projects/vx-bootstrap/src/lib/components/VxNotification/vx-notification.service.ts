import { ApplicationRef, ComponentFactory, ComponentFactoryResolver, ComponentRef, Injectable, Type, ViewContainerRef } from '@angular/core';
import { VxFixedPosition } from '../../types';
import { htmlToElement } from '../../utils/dom';
import { VxNotificationComponent } from './vx-notification.component';
import { VxNotificationOptions } from './VxNotificationOptions';
import { VxNotificationRef } from './VxNotificationRef';

@Injectable({
  providedIn: 'root'
})
export class VxNotificationService {

  constructor(
    private applicationRef: ApplicationRef,
    private componentFactoryResolver: ComponentFactoryResolver,
  ) { }

  show(options: VxNotificationOptions) {
    const appEntryComponent = this.applicationRef.components[0]
    const vxNotificationsViewContainerRef = appEntryComponent.instance.vxNotificationsViewContainerRef as ViewContainerRef;
    const factory = this.componentFactoryResolver.resolveComponentFactory(VxNotificationComponent)

    let componentRef: ComponentRef<VxNotificationComponent>

    if (options.contentMessage) {
      const html = /*html*/`<p class="m-0">${options.contentMessage}</p>`
      const messageElement = htmlToElement(html)
      componentRef = vxNotificationsViewContainerRef.createComponent(factory, 0, undefined, [[ messageElement ]])
    } else {
      throw `Programatic VxNotificationComponent has not been implemented for options ${options}`
    }

    this.setOptions(componentRef.instance, options)
    this.setPosition(options)
  }

  private setOptions(instance: VxNotificationComponent, options: VxNotificationOptions) {
    if (options.autohide)
      instance.autohide = options.autohide

    if (options.color)
      instance.color = options.color

    if (options.delay)
      instance.delay = options.delay

    if (options.width)
      instance.width = options.width
  }

  private setPosition(options: VxNotificationOptions) {
    const container = document.getElementById('vxNotificationsContainer')

    if (container == null)
      return
    
    let classes: string[] = [ 'position-fixed', 'p-3' ]

    if (options.position && VxNotificationPostionClasses.has(options.position)) {
      const postionClasses = VxNotificationPostionClasses.get(options.position) as string[]
      classes = [ ...classes, ...postionClasses ]
    } else
      classes = [ ...classes, ...DefaultVxNotificationPositionClasses ]
    
    classes.forEach(clazz => container.classList.add(clazz))
  }
}

const DefaultVxNotificationPositionClasses = [ 'top-0', 'end-0' ]

const VxNotificationPostionClasses = new Map<VxFixedPosition | undefined, string[]>([
  [ 'bottomCenter', [ 'bottom-0', 'start-50', 'translate-middle-x' ]],
  [ 'bottomLeft', [ 'bottom-0', 'start-0' ]],
  [ 'bottomRight', [ 'bottom-0', 'end-50' ]],
  [ 'center', [ 'top-50', 'start-50', 'translate-middle' ]],
  [ 'centerLeft', [ 'top-50', 'start-0', 'translate-middle-y' ]],
  [ 'centerRight', [ 'top-50', 'end-0', 'translate-middle-y' ]],
  [ 'topCenter', [ 'top-0', 'start-50', 'translate-middle-x' ]],
  [ 'topLeft', [ 'top-0', 'start-0' ]],
  [ 'topRight', [ 'top-0', 'end-0' ]],
])
