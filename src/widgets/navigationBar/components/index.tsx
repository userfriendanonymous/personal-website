import { useState } from "react"
import { Section, SectionContent, Logo } from "@/shared"
import Link from './link'
import {useScrollEvent} from "@/shared"
import {motion} from 'framer-motion'

const MOTION_VARIANTS = {
    initial: {
        backgroundColor: 'rgba(255, 255, 255, 0.0001)',
    },

    arrived: {
        backgroundColor: '#fff',
    },
}

const MOTION_TRANSITION = {
    type: 'tween',
    duration: 0.4,
    ease: [.33,.16,.24,.99]
}

export default function NavigationBar(){
    const [isArrived, setIsArrived] = useState(false)
    useScrollEvent(() => {
        setIsArrived(window.scrollY > 30)
    })
    return (
        <motion.div
            className={`z-[100] fixed w-full top-0 h-[90px] border-b-[1px] ${isArrived ? 'border-b-[0] shadow-card' : 'border-b-[#ffffff2b]'}`}
            variants={MOTION_VARIANTS}
            transition={MOTION_TRANSITION}
            initial='initial'
            animate={isArrived ? 'arrived' : 'initial'}
        >
            <Section className='h-[100%]'>
                <SectionContent className='flex justify-center sS:justify-between items-center'>
                    <Logo isWhite={!isArrived}/>
                    <div className='hidden sS:flex items-center h-[100%]'>
                        <Link to='about'>About</Link>
                        <Link to='projects'>Projects</Link>
                        <Link to='contact'>Contact</Link>
                    </div>
                </SectionContent>
            </Section>
        </motion.div>
    )
}