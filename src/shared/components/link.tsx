import {Points} from '../core/path'
import useLocation from '../hooks/location'
import clsx from 'clsx'

export interface Props extends React.ComponentPropsWithoutRef<'a'> {
    to: Points | string
    queries?: object
}

export default function Link({onClick, to, queries, className, ...props}: Props){
    const [, setLocation] = useLocation()
    return (
        <a
        className={clsx('block', className)}
        {...(typeof to == 'string' ?
        {href: '#' + to}
        :{})}
        {...props}
        onClick={event => {
            if (onClick){
                onClick(event)
            }
            if (typeof to != 'string'){
                setLocation(to, queries)
            }
        }}/>
    )
}