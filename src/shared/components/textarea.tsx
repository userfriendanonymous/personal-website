import clsx from 'clsx'
import React from 'react'

interface Props extends React.ComponentPropsWithRef<'textarea'> {

}

export default React.forwardRef(function Textarea({className, ...props}: Props, ref: React.LegacyRef<HTMLTextAreaElement>){
    return (
        <textarea {...props} ref={ref}
            className={clsx(className, `placeholder:text-[17px] sM:placeholder:text-[20px] border-solid h-[200px] resize-none w-[100%] box-border cursor-text relative p-[25px] border-[2px] rounded-[25px] flex justify-between items-center bg-cWhite text-cPrimary border-cPrimary hover:outline-[6px] hover:outline-cGreyTrans outline outline-cNone outline-[10px] text-[18px] leading-[20px]`)}
            style={{
                transition: 'all ease 0.25s'
            }}
        />
    )
})