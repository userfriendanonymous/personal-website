import { Image } from "@/shared"
import {motion} from 'framer-motion'

export default function Card(){
    return (
        <div className='z-[1] relative w-full h-[100%] flex items-center justify-center'>
            <motion.div className='absolute cursor-pointer flex items-center justify-center rounded-full w-[100px] h-[100px] bg-cWhite'
            style={{
                boxShadow: '0 0 20px white',
            }}
            initial={{
                rotateY: 0,
            }}
            animate={{
                rotateY: 90,
            }}
            transition={{
                type: 'tween',
                duration: 0.7,
                ease: 'linear',

                repeat: Infinity,
                repeatType: 'mirror'
            }}
            >
                <Image src='fullLogo.svg' alt='[logo]'/>
            </motion.div>

            <div className='w-[100%] h-[100%] absolute flex items-center justify-center top-[80px] text-cWhite text-[30px] font-[600]'
            style={{
                textShadow: '0 0 10px white'
            }}
            >
                UserFriend
            </div>
        </div>
    )
}