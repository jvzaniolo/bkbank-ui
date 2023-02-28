export type InputGroupArgs = {
    size: keyof typeof sizes;
    isInvalid: boolean;
    isDisabled: boolean;
};
declare const sizes: {
    small: string;
    medium: string;
    large: string;
};
export declare function createInputGroup({ size, isInvalid, isDisabled, }: InputGroupArgs): string;
export {};
