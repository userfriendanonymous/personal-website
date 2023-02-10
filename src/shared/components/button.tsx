import clsx from 'clsx'

interface Props extends React.ComponentPropsWithoutRef<'button'> {

}

export default function Button({className, ...props}: Props){
    return (
        <button
        style={{
            transition: 'all ease 0.3s',
        }}
        className={clsx('cursor-pointer outline-[15px] outline-cNone active:outline-[6px] active:outline-cGreyTrans outline hover:shadow-card border-solid border-cPrimary border-[2px] box-border rounded-full flex items-center justify-center font-[500] px-[60px] h-[55px] hover:bg-cPrimary hover:text-cWhite text-cPrimary text-[17px] sS:text-[20px]', className)}
        {...props}/>
    )
}