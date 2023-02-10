import {AnimatePresence, motion} from 'framer-motion'

interface Props {
    value: string
}

const ANIM_VARIANTS = {
    initial: {
        opacity: 0,
        y: -30,
    },

    enter: {
        opacity: 1,
        y: 0,
    },

    leave: {
        opacity: 0,
        y: 30,
    },
}

const ANIM_TRANSITION = {}

export default function Digit({value}: Props){
    return (
        <motion.div
            // // key={value}
            // initial='initial'
            // animate='enter'
            // exit='leave'
            transition={ANIM_TRANSITION}
        >
            {value}
        </motion.div>
    )
}