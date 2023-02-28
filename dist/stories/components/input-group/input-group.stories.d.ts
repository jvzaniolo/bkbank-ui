import type { StoryObj } from '@storybook/html';
import type { InputGroupArgs } from './create-input-group';
declare const meta: {
    title: string;
    render: (args: InputGroupArgs) => string;
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
    };
    args: {
        size: "small";
        isInvalid: false;
        isDisabled: false;
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
type Story = StoryObj<InputGroupArgs>;
export default meta;
export declare const InputGroup: Story;
