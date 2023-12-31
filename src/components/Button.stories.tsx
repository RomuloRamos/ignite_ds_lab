import { Meta, StoryObj} from '@storybook/react';
import {Button, ButtonProps} from './Button';

export default {
    title: 'Components/Button',
    component: Button,
    args: {
        children: 'Create Account',
    },
    argTypes:{
        asChild: {
            table:{
                disable: true
            }
        }
    },
    tags: ['autodocs'],
} as Meta <ButtonProps>

export const Default:StoryObj <ButtonProps> = {}
