import clsx from 'clsx'

interface Props extends React.ComponentPropsWithoutRef<'div'>{

}

export default function SectionContent({className, ...props}: Props){
    return (
        <div
        className={clsx(['max-w-[700px] grow box-border', className])}
        {...props}/>
    )
}