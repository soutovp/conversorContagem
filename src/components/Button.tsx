import React, { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import {Slot} from '@radix-ui/react-slot'
export interface ButtonProps extends ButtonHTMLAttributes<HTMLElement>{
    children: ReactNode,
    asChild?: boolean,
    // handleClick?: (event:React.MouseEvent<HTMLButtonElement>)=>void
    onClick:()=>void
}
export function Button({children, asChild, className, onClick, ...props}: ButtonProps){
    const Comp = asChild ? Slot : 'button';
    return(
        <Comp className={clsx(
            'bg-black text-white p-4 rounded-md hover:bg-slate-600 active:bg-slate-200 active:text-black',className
        )} onClick={onClick}
        {...props}
        >
            {children}
        </Comp>
    )
}