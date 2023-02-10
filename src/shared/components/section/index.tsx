import clsx from 'clsx'

interface Props extends React.ComponentPropsWithoutRef<'div'>{

}

export default function Section({className, ...props}: Props){
    return (
        <div className={clsx(["w-full flex justify-center relative px-[40px] box-border", className])}
        {...props}/>
    )
}