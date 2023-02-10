import {Item as ItemInterface} from './index'
import {useState} from 'react'

interface Props {
    item: ItemInterface
    onSelected: (isSelected: boolean) => any
}

export default function Item({item, onSelected}: Props){
    const [isHovered, setIsHovered] = useState(false)
    return (
        <img alt='Icon' src={item.image}
            className={`relative h-[40px] sS:h-[35px] sM:h-[40px] sLg:h-[50px] cursor-pointer left-0 hover:left-[5px] hover:scale-[1.05] hover:z-[3]`}
            onPointerEnter={() => {setIsHovered(true); onSelected(true)}}
            onPointerLeave={() => {setIsHovered(false); onSelected(false)}}
            style={{
                transition: 'all ease 0.5s',
                boxShadow: isHovered ? ('0 0 50px ' + item.color) : 'none'
            }}
        />
    )
}