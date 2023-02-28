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
        base: string;
        color: undefined;
        content: string;
    };
    argTypes: {
        base: {
            description: string;
            control: {
                type: string;
            };
            table: {
                defaultValue: {
                    summary: string;
                };
            };
        };
        color: {
            description: string;
            options: (string | undefined)[];
            control: {
                type: string;
                labels: {
                    undefined: string;
                };
            };
        };
        content: {
            description: string;
            control: {
                type: string;
            };
        };
    };
};
export default meta;
export declare const Default: StoryObj;
