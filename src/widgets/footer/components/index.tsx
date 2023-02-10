import { Section, SectionContent } from "@/shared"
import Link, {Props as LinkProps} from './link'
import Dot from './dot'

interface Props {
    links: Array<LinkProps>
}

export default function Footer({links}: Props){
    return (
        <Section className='bg-cPrimary'>
            <SectionContent className='pt-[20px] pb-[40px] flex flex-col items-center'>
                <div className='flex items-center justify-center'>{
                    links.map((link, id) =>
                        <>
                            {
                                id > 0 ?
                                <Dot key={-id} />
                                :null
                            }
                            <Link {...link} key={id}/>
                        </>
                    )
                }</div>
                <div className='h-[1px] rounded-full w-full bg-cWhite mb-[20px]'/>
                <div className='text-cWhite text-[17px] text-center'>
                    Made by @userfriend (2023), contact form powered by <a className='cursor-pointer text-cSecondary' href='https://web3forms.com/'>Web3Forms</a>
                </div>
            </SectionContent>
        </Section>
    )
}