import {Link as LinkBasic} from '@/shared'
import type {LinkProps} from '@/shared'
import {motion, AnimatePresence} from 'framer-motion'
import {useState} from 'react'

interface Props extends LinkProps {

}

const ANIM_VARIANTS = {
    initial: {
        color: '#fff'
    },

    arrived: {
        color: '#000'
    }
}

export default function Link({...props}: Props){
    const [isHovered, setIsHovered] = useState(false)

    return (
        <motion.div
            onPointerEnter={() => setIsHovered(true)}
            onPointerLeave={() => setIsHovered(false)}
            className='h-[100%] cursor-pointer'
            variants={ANIM_VARIANTS}
            layoutRoot
        >
            <LinkBasic className='scroll-smooth flex items-center h-[100%] px-[20px] text-[19px] font-[500]'
            {...props}/>

            <AnimatePresence>
                {isHovered ?
                    <motion.div
                    layoutId='choosed'
                    transition={{
                        duration: 0.3,
                        ease: 'easeOut'
                    }}
                    initial={{
                        opacity: 0
                    }}
                    animate={{
                        opacity: 1
                    }}
                    exit={{
                        opacity: 0,
                        transition: {
                            delay: 0.3
                        }
                    }}
                    >
                        <div className='relative bottom-[5px] rounded-full bg-cSecondary w-[100%] h-[5px]'></div>
                    </motion.div>
                :null
                }
            </AnimatePresence>
        </motion.div>
    )
}