import { ButtonHTMLAttributes, ReactNode } from 'react';
import {Slot} from '@radix-ui/react-slot';
import { clsx } from 'clsx'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    asChild?: boolean;
}

export function Button({children, asChild, className, ...props} : ButtonProps){
    
    const Comp = asChild ? Slot : 'button'; 
    
    return (
        <Comp className={
            clsx(
                'bg-cyan-500 px-4 py-3 rounded font-semibold text-black text-sm w-full hover:bg-cyan-300 transition-colors focus:ring-2 ring-white',
                className
            )}
            {...props}
        >
            {children}
        </Comp>
    )
}