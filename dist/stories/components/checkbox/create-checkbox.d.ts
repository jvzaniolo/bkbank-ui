export type CheckboxArgs = {
    base: 'checkbox';
    state?: 'checkbox-error';
    isDisabled?: boolean;
    indeterminate?: boolean;
    defaultChecked?: boolean;
};
export declare function createCheckbox({ base, state, isDisabled, defaultChecked, indeterminate, }: CheckboxArgs): string;
