import type { StoryObj } from '@storybook/html';
import type { ButtonArgs } from './create-button';
declare const meta: {
    title: string;
    render: (args: ButtonArgs) => string;
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
    };
    args: {
        base: "btn";
        size: undefined;
        variant: undefined;
        color: undefined;
        disabled: false;
        withIcon: false;
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
        size: {
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
            };
            options: (string | undefined)[];
            control: {
                type: string;
            };
        };
        variant: {
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
            };
            options: (string | undefined)[];
            control: {
                type: string;
            };
        };
        color: {
            description: string;
            options: (string | undefined)[];
            control: {
                type: string;
            };
            table: {
                defaultValue: {
                    summary: string;
                };
            };
        };
        disabled: {
            description: string;
            table: {
                defaultValue: {
                    summary: boolean;
                };
            };
        };
        withIcon: {
            description: string;
            table: {
                defaultValue: {
                    summary: boolean;
                };
            };
        };
    };
};
type Story = StoryObj<ButtonArgs>;
export default meta;
export declare const Default: Story;
/**
 * Use the `btn-icon` class to create an icon button. Works with every variant.
 */
export declare const IconButton: Story;
