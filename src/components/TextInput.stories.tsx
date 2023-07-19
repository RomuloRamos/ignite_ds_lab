import { Meta, StoryObj} from '@storybook/react';
import {TextInput, TextInputRootProps, TextInputInputProps} from './TextInput';
import { Envelope } from 'phosphor-react';

export default {
    title: 'Components/TextInput',
    component: TextInput.Root,
    args:{
        children:[ //Usign a vector so that it is not necessary use a fragment or a div to return these two components
            <TextInput.Icon> 
                <Envelope/>
            </TextInput.Icon>,
            <TextInput.Input placeholder='Type your e-mail'/> 
        ],
    },
    argTypes:{
        children:{
            table:{
                disable:true,
            }
        }
    },
    tags: ['autodocs'],
} as Meta <TextInputRootProps>

export const Default:StoryObj <TextInputRootProps> = {}
export const WithoutIcon: StoryObj<TextInputRootProps> = {
    args:{
        children:<TextInput.Input placeholder='Type your e-mail'/> 
    }
}
