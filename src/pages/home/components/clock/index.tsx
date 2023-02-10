import { Section, SectionContent, Title } from "@/shared"
import { useEffect, useState } from "react"
import ClockVisualizer from "./clock"

export default function Clock(){
    const [time, setTime] = useState(0)
    useEffect(() => {
        setInterval(() => {
            setTime(time + 1)
        }, 1000)
    })
    return (
        <Section className='bg-cLight bg-[#eaeaef]'>
            <SectionContent className='py-[70px]'>
                <Title className='text-center mb-[10px]'>Time until the blog launch...</Title>
                <ClockVisualizer
                    values={['123', '43', '34', String(time)]}
                />
            </SectionContent>
        </Section>
    )
}