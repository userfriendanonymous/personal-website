import Number from "./number"

interface Props {
    values: string[]
}

export default function Clock({values}: Props){
    return (
        <div className='flex justify-between items-center text-[7rem] font-bold text-cPrimary font-["Teko",sans-serif]'
        >{
            values.map((value, id) =>
                <>
                    {id != 0 ?
                    <div>:</div>
                    :null}
                    <Number value={value}/>
                </>
            )
        }</div>
    )
}