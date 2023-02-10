import { motion } from "framer-motion"
import clsx from "clsx"
import Image from "./image"

interface Props {
    isWhite?: boolean
}

export default function Logo({isWhite}: Props){
    return (
        <div className='flex items-center gap-[10px] cursor-pointer'>
            <Image className={`w-[30px] ${isWhite ? 'brightness-[10] text-cWhite' : 'brightness-[0]'}`}
            src='logo.svg' alt='[Logo]'
            style={{
                transition: 'all ease 0.5s'
            }}
            />
            <div className={`font-[600] text-[18px] ${isWhite ? 'text-cWhite' : 'text-cPrimary'}`}
            style={{
                transition: 'all ease 0.5s'
            }}
            >USER-FRIEND</div>
        </div>
    )
}