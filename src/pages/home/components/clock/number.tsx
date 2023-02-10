import Digit from "./digit"

interface Props {
    value: string
}

function stringMap(val: string, func: (char: string, id: number) => any){
    const result = []
    for (let id = 0; id < val.length; id++){
        const char = val[id]
        result.push(func(char, id))
    }
    return result
}

export default function Number({value}: Props){
    return (
        <div className='flex items-center gap-[3px]'
        >{
            stringMap(value, (char) =>
                <Digit value={char}/>
            )
        }</div>
    )
}