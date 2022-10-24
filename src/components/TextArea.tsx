import { ReactNode, TextareaHTMLAttributes } from "react";
import {Slot} from '@radix-ui/react-slot'
import clsx from "clsx";
interface TextAreaProps extends TextareaHTMLAttributes<HTMLElement>{
    children?: ReactNode,
    asChild?: boolean,
    
}
export function TextArea({children, asChild, className, ...props}: TextAreaProps){
    const Comp = asChild ? Slot : 'textarea'
    return(
            <Comp className={clsx(
                'text-center mb-3 h-[250px] border border-black rounded-md', className
            )}{...props}
            >
                {children}
            </Comp>
    )
}