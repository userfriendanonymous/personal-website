import clsx from 'clsx'

interface Props extends React.ComponentPropsWithoutRef<'div'> {}

export default function PageScrollable({className, ...props}: Props){
    return (
        <div className={clsx(['w-full', className])}
        {...props}/>
    )
}