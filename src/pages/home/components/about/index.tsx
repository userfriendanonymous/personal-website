import { Section, SectionContent, Title } from "@/shared"

export default function About(){
    return (
        <Section id='about' className='bg-cLight'>
            <SectionContent className='py-[70px]'>
                <Title>{'📜About me'}</Title>
                <div className='flex justify-center text-[21px] mt-[4px]'
                >{
                    'I am a web dev!'
                }</div>
            </SectionContent>
        </Section>
    )
}