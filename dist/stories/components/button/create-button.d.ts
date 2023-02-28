export type ButtonArgs = {
    base: 'btn';
    size?: 'btn-md' | 'btn-lg';
    variant?: 'btn-solid' | 'btn-outline' | 'btn-ghost';
    color?: 'btn-primary' | 'btn-secondary';
    disabled?: boolean;
    withIcon?: boolean;
};
export declare function createButton({ base, size, color, variant, disabled, withIcon, }: ButtonArgs): string;
