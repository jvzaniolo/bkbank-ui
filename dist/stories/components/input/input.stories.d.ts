import type { StoryObj } from '@storybook/html';
declare const meta: {
    title: string;
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
    };
    args: {
        size: string;
        isInvalid: boolean;
        isDisabled: boolean;
    };
    argTypes: {
        size: {
            options: string[];
            control: {
                type: string;
            };
            table: {
                defaultValue: {
                    summary: string;
                };
            };
            description: string;
        };
        isInvalid: {
            table: {
                defaultValue: {
                    summary: string;
                };
            };
            control: {
                type: string;
            };
            description: string;
        };
        isDisabled: {
            table: {
                defaultValue: {
                    summary: string;
                };
            };
            control: {
                type: string;
            };
            description: string;
        };
    };
};
export default meta;
export declare const Default: StoryObj;
