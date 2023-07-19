import { Meta, StoryObj} from '@storybook/react';
import {Heading, HeadingProps} from './Heading';

export default {
    title: 'Components/Heading',
    component: Heading,
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
} as Meta <HeadingProps>

export const Default:StoryObj <HeadingProps> = {}

export const Small:StoryObj <HeadingProps> = {
    args:{
        size: 'sm'
    }
}

export const Large:StoryObj <HeadingProps> = {
    args:{
        size: 'lg'
    }
}

export const CustomComponent:StoryObj <HeadingProps> = {
    args:{
        asChild: true,
        children:(
            <h1>Heading with H1 tag </h1>
        )
    },
    argTypes:{
        asChild:{
            table:{
                disable: true
            }
        }
    }
}