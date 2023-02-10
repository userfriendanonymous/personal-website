import {motion} from 'framer-motion'

interface Props {
    children: React.ReactNode
    variant?: 'success' | 'warning'
}

export default function Message({children, variant}: Props){
    return (
        <motion.div
            layout
            className={`${variant == 'success' ? 'bg-cSuccess' : 'bg-cSecondary'} mt-[30px] text-[20px] w-full rounded-[25px] text-cWhite font-[500] border-[2px] border-[#1217a360] border-solid p-[20px] flex items-center gap-[20px]`}
            key={String(children)}
            initial={{
                x: -200,
                opacity: 0,
            }}
            animate={{
                x: 0,
                opacity: 1,
            }}
            exit={{
                x: 200,
                opacity: 0,
            }}
            >
            <div className={`${variant == 'success' ? 'text-cSuccess' : 'text-cSecondary'} w-[30px] h-[30px] rounded-full bg-cWhite flex items-center justify-center`}>
                ℹ️
            </div>
            {children}
        </motion.div>
    )
}