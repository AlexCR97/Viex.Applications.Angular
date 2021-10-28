import { VxColorVariant } from "../../types";

export interface VxActionDrawerItem {
    divider?: boolean
    icon?: string
    label?: string
    variant?: VxColorVariant
    action?: () => void
    disabled?: () => boolean // TODO Implement
    hidden?: () => boolean // TODO Implement
}
