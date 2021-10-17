import { ElementRef } from "@angular/core"

export function hasInnerContent(ref: ElementRef) {
    const element = ref.nativeElement
    return element.hasChildNodes() || element.innerHTML.trim().length > 0
}
