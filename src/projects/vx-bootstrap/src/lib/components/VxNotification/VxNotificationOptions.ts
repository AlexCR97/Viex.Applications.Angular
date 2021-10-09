import { VxColorVariant, VxFixedPosition } from "../../types";

export interface VxNotificationOptions {
    autohide?: boolean
    color?: VxColorVariant
    delay?: number
    position?: VxFixedPosition
    width?: string

    // Content projection options
    contentMessage?: string
    // TODO Add support for template reference
    // TODO Add support for component class reference
}
