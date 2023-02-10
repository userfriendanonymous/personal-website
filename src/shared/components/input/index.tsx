import clsx from 'clsx'
import {motion} from 'framer-motion'
import {useState} from 'react'
import React from 'react'

interface Props extends React.ComponentPropsWithRef<'input'> {

}

const ANIM_VARIANTS = {
    initial: {
        y: 0,
        // fontSize: '20px',
        padding: '0px',
    },

    focused: {
        y: -25,
        padding: '7px',
        fontSize: '15px',
    }
}

const ANIM_TRANSITION = {
    type: 'tween',
    duration: 0.2,
}

export default React.forwardRef(function Input({placeholder, className, onChange, ...props}: Props, ref: React.LegacyRef<HTMLInputElement>){
    const [isFocused, setIsFocused] = useState(false)
    const [isEmpty, setIsEmpty] = useState(true)

    return (
        <fieldset className={clsx(className, `cursor-text relative h-[50px] px-[25px] border-[2px] rounded-full flex justify-between items-center bg-cWhite text-cPrimary border-cPrimary outline outline-cNone outline-[10px] ${isFocused ? 'outline-[0]' : 'hover:outline-[6px] hover:outline-cGreyTrans'}`)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false || !isEmpty)}
            style={{
                transition: 'all ease 0.25s'
            }}
        >
            <legend className='text-[15px] px-[7px] relative leading-[0] height-[0]'
                style={{
                    opacity: 0,
                    display: isFocused ? 'block' : 'none'
                }}
            >
                {placeholder}
            </legend>
            <input className={'absolute w-[100%] h-[100%] text-cPrimary text-[17px]'}
                onChange={(event) => {
                    setIsEmpty(event.target.value.length == 0)
                    if (onChange){
                        onChange(event)
                    }
                }}
                {...props}
                ref={ref}
            />
            <motion.div
                className={`text-[17px] sM:text-[20px] text-cPrimary absolute h-[0] leading-[0] pointer-events-none`}
                style={{
                    transition: 'color 0.2s ease'
                }}
                variants={ANIM_VARIANTS}
                transition={ANIM_TRANSITION}
                animate={isFocused ? 'focused' : 'initial'}
            >
                {placeholder}
            </motion.div>
        
        </fieldset>
    )
})