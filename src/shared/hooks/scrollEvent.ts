import { useEffect } from 'react'

export default function useScrollEvent(handler: () => void){
    useEffect(() => {
        window.addEventListener('scroll', handler)
        return () => window.removeEventListener('scroll', handler)
    }, [])
}