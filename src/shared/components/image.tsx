interface Props extends React.ComponentPropsWithoutRef<'img'>{
}

export default function Image({src, ...props}: Props){
    return (
        <img
            src={'images/' + src}
        {...props}/>
    )
}