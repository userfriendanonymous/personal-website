import clsx from 'clsx'

interface Props extends React.ComponentPropsWithoutRef<'div'> {
}
export default function Title({className, ...props}: Props){
    return (
        <div className={clsx('text-center font-[600] text-[2.2rem] sS:text-[2.5rem] sM:text-[3.1rem] sLg:text-[3.5rem] text-[#191a2c] width-[100%] flex justify-center', className)}
        {...props}/>
    )
}