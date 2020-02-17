export enum ColorFormat {
    hex = 'hex',
    rgba = 'rgba',
    hsla = 'hsla'
}

export enum OutputFormat {
    auto = 'auto',
    hex = 'hex',
    rgba = 'rgba',
    hsla = 'hsla'
}

export enum AlphaChannel {
    enabled = 'enabled',
    disabled = 'disabled',
    always = 'always',
    forced = 'forced'
}

export enum DialogPosition {
    top = 'top',
    left = 'left',
    right = 'right',
    bottom = 'bottom'
}

export enum DialogDisplay {
    popup = 'popup',
    inline = 'inline'
}

export type ColorMode = 'color' | 'c' | '1' | 'grayscale' | 'g' | '2' | 'presets' | 'p' | '3'

export interface InputChangeEvent {
    input: string
    valid: boolean
    value: number | string
    color: string
}

export interface SliderChangeEvent {
    slider: string
    value?: number | string
    color: string
}