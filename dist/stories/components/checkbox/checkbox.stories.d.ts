import type { StoryObj } from '@storybook/html';
import type { CheckboxArgs } from './create-checkbox';
declare const meta: {
    title: string;
    render: (args: CheckboxArgs) => string;
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
    };
    args: {
        base: "checkbox";
        state: undefined;
        isDisabled: false;
        indeterminate: false;
        defaultChecked: false;
    };
    argTypes: {
        base: {
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
            };
            control: {
                type: string;
            };
        };
        state: {
            description: string;
            options: (string | undefined)[];
            table: {
                defaultValue: {
                    summary: string;
                };
            };
            control: {
                type: string;
            };
        };
        isDisabled: {
            description: string;
            table: {
                defaultValue: {
                    summary: boolean;
                };
            };
        };
        defaultChecked: {
            description: string;
            table: {
                defaultValue: {
                    summary: boolean;
                };
            };
        };
        indeterminate: {
            description: string;
            table: {
                defaultValue: {
                    summary: boolean;
                };
            };
        };
    };
};
type Story = StoryObj<CheckboxArgs>;
export default meta;
export declare const Default: Story;
/**
 * To use another element as the checkbox input label, add the `.checkbox-label` class to it and the element will inherit the styles.
 */
export declare const CustomLabel: Story;
