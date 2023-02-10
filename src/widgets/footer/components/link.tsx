import { Link as BaseLink, LinkProps } from "@/shared"
import clsx from 'clsx'

export interface Props extends LinkProps {

}

export default function Link({className, ...props}: Props){
    return (
        <BaseLink
        className={clsx('text-[17px] relative text-cWhite cursor-pointer px-[25px] h-[80px] items-center flex underline decoration-[#fffefe02] bottom-0 hover:bottom-[5px] underline-offset-0 hover:decoration-cWhite hover:underline-offset-[5px]', className)}
        style={{
            transition: 'all ease 0.3s'
        }}
        {...props}/>
    )
}