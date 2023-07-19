import { Meta, StoryObj} from '@storybook/react';
import {Text, TextProps} from './Text';

export default {
    title: 'Components/Text',
    component: Text,
    args: {
        children: 'Loren ipson.',
        size: 'md'
    },
    argTypes:{
        size:{
            options: ['sm','md','lg'],
            control: { //This is optional, is only to put the options at the same line.
                type: 'inline-radio'
            }
        },
        asChild: {
            table:{
                disable: true
            }
        }
    },
    tags: ['autodocs'],
} as Meta <TextProps>

export const Default:StoryObj <TextProps> = {}

export const Small:StoryObj <TextProps> = {
    args:{
        size: 'sm'
    },

}

export const Large:StoryObj <TextProps> = {
    args:{
        size: 'lg'
    },
}

export const CustomComponent:StoryObj <TextProps> = {
    args:{
        asChild: true,
        children:(
            <p>Text with {"<p>"} tag</p>
        )
    },
    argTypes:{
        children: {
            table:{
                disable: true
            }
        },
        asChild: {
            table:{
                disable: true
            }
        }
    }
}