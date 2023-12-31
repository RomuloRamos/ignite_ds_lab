import { InputHTMLAttributes, ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot';


export interface TextInputRootProps {
    children: ReactNode;
}

function TextInputRoot( props : TextInputRootProps ){
    
    return (
        <div className='w-full flex h-12 items-center gap-3 px-4 py-3 rounded bg-gray-800 hover:ring-2 focus-within:ring-2 ring-cyan-300 outline-none'>
            {props.children}
        </div>
    )
}

export interface TextInputIconProps {
    children: ReactNode;
}

function TextInputIcon( props : TextInputIconProps){
    
    return ( 
        <Slot className='w-6 h6 text-gray-400'>
            {props.children}
        </Slot>
    )
}
export type TextInputInputProps = InputHTMLAttributes<HTMLInputElement>
function TextInputInput( props : TextInputInputProps ){
    
    return (
        <input 
            className={'bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none'}
            {...props}
        />
    )
}

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon
}