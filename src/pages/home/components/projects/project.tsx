import {Image} from '@/shared'

interface Props {
    project: IProject
}

export interface IProject {
    image: string
    title: string
    info: string
    date: string
}

export default function Project({project}: Props){
    return (
        <div className='bg-cWhite p-[0px] gap-[15px] box-border rounded-[10px] w-full h-[300px] sS:h-[350px] overflow-hidden cursor-pointer hover:shadow-card'
            style={{
                transition: 'all ease 0.5s'
            }}
        >
            <div className='h-[140px] sS:h-[160px] flex items-center justify-center relative'>
                <div className='z-[1] transition-all absolute h-[100%] bg-cPrimary opacity-0 w-[100%] hover:opacity-50' style={{
                    transition: 'all ease 0.5s'
                }}>

                </div>
                <Image
                    className='object-cover h-[100%] w-[100%] absolute'
                    alt="Project image"
                    src={'projects/' + project.image}
                />
                <div className='shadow-[0_0_40px] shadow-cSecondary right-0 top-0 mt-[10px] mr-[10px] z-[2] absolute flex items-center px-[10px] rounded-full bg-cSecondary text-cWhite text-[0.8rem] w-fit h-[25px]'>
                    {project.date}
                </div>
            </div>

            <div className='p-[15px]'>
                <div className='font-bold text-[1.7rem] cM:text-[2rem] text-cPrimary mb-[5px]'>
                    {project.title}
                </div>
                <div className='text-[1rem] text-cGrey'>
                    {project.info}
                </div>
            </div>
        </div>
    )
}