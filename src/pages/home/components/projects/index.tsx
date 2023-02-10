import { Section, SectionContent, Title, Button } from '@/shared'
import { useCallback, useEffect, useState } from 'react'
import Project, {IProject} from './project'

const projects: IProject[] = [
    {
        image: 'ra.png',
        title: 'Project 1',
        info: 'aoiefoaie jaoij efoaij weoifj aweoi jfaoie jaoief',
        date: '20.10.2020'
    },
    {
        image: 'ra.png',
        title: 'Project 1',
        info: 'aoiefoaie jaoij efoaij weoifj aweoi jfaoie jaoief',
        date: '20.10.2020'
    },
    {
        image: 'ra.png',
        title: 'Project 1',
        info: 'aoiefoaie jaoij efoaij weoifj aweoi jfaoie jaoief',
        date: '20.10.2020'
    },
    {
        image: 'ra.png',
        title: 'Project 1',
        info: 'aoiefoaie jaoij efoaij weoifj aweoi jfaoie jaoief',
        date: '20.10.2020'
    },
    {
        image: 'ra.png',
        title: 'Project 1',
        info: 'aoiefoaie jaoij efoaij weoifj aweoi jfaoie jaoief',
        date: '20.10.2020'
    },
    {
        image: 'ra.png',
        title: 'Project 1',
        info: 'aoiefoaie jaoij efoaij weoifj aweoi jfaoie jaoief',
        date: '20.10.2020'
    },
    {
        image: 'ra.png',
        title: 'Project 1',
        info: 'aoiefoaie jaoij efoaij weoifj aweoi jfaoie jaoief',
        date: '20.10.2020'
    },
]

const shownProjects: IProject[] = []

function addMoreShownProjects(){
    const length = shownProjects.length
    for (let i = length; i < length + 4; i++){
        console.log(projects.length, i)
        if (i >= projects.length){
            break
        }
        console.log('ad')
        shownProjects.push(projects[i])
    }
}

addMoreShownProjects()

export default function Projects(){
    const [, rerender] = useState(false)
    const addMore = useCallback(() => {
        addMoreShownProjects()
        rerender(value => !value)
    }, [])

    return (
        <Section className='bg-cLight py-[70px]' id='projects'>
            <SectionContent className='flex flex-col items-center'>
                <Title className='mb-[40px]'>{'🎯My Recent Projects'}</Title>
                <div className='transition-all grid grid-cols-1 sM:grid-cols-2 justify-items-center gap-x-[30px] sL:gap-x-[50px] gap-y-[37px] sM:gap-y-[50px]'
                onResize={(event) => {
                    // event.target.scrollHeight
                }}
                >{
                    shownProjects.map((project, id) =>
                        <Project project={project} key={id}/>
                    )
                }</div>
                {shownProjects.length < projects.length ?
                <Button className='mt-[50px]' onClick={() => {
                    addMore()
                }}>Show More</Button>
                :null
                }
                
            </SectionContent>
        </Section>
    )
}