import type { StoryObj } from '@storybook/html';
import type { SwitchArgs } from './create-switch';
declare const meta: {
    title: string;
    render: (args: SwitchArgs) => string;
    args: {
        size: "small";
        isDisabled: false;
    };
    argTypes: {
        size: {
            table: {
                defaultValue: {
                    summary: string;
                };
            };
            options: string[];
            control: {
                type: string;
            };
            description: string;
        };
        isDisabled: {
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
    };
};
type Story = StoryObj<SwitchArgs>;
export default meta;
export declare const Default: Story;
