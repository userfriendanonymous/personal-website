import { Section, SectionContent, Title } from "@/shared"
import Item from "./item"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export interface Item {
    image: string
    link: string
    info: string
    color: string
}

type Items = {[key: string]: Item}

const items: Items = {
    Typescript: {
        image: 'https://camo.githubusercontent.com/ee71fcc1aa3d059265517741dffc4161922fd744377e7a5f07c43381d0aa9aac/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f747970657363726970742d2532333030374143432e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d74797065736372697074266c6f676f436f6c6f723d7768697465',
        link: 'https://www.typescriptlang.org/',
        info: 'TypeScript extends JavaScript and improves the developer experience. It enables developers to add type safety to their projects.',
        color: '#007acc',
    },

    ReactJS: {
        link: 'https://reactjs.org/',
        image: 'https://camo.githubusercontent.com/ab4c3c731a174a63df861f7b118d6c8a6c52040a021a552628db877bd518fe84/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f72656163742d2532333230323332612e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d7265616374266c6f676f436f6c6f723d253233363144414642',
        info: 'ReactJS is a free and open-source front-end JavaScript library for building user interfaces based on UI components.',
        color: '#20232a',
    },

    Svelte: {
        color: '#f1413d',
        link: 'https://svelte.dev/',
        image: 'https://camo.githubusercontent.com/3029ebce543b028f460e602049059a0e599d1c5cae5bd4d6be0cd9a177055c9c/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f7376656c74652d2532336631343133642e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d7376656c7465266c6f676f436f6c6f723d7768697465',
        info: 'Svelte is a front-end, open-source JavaScript framework for making interactive webpages.'
    },

    NodeJS: {
        color: '#6da55f',
        link: 'https://nodejs.org/en/',
        image: 'https://camo.githubusercontent.com/7d7b100e379663ee40a20989e6c61737e6396c1dafc3a7c6d2ada8d4447eb0e4/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6e6f64652e6a732d3644413535463f7374796c653d666f722d7468652d6261646765266c6f676f3d6e6f64652e6a73266c6f676f436f6c6f723d7768697465',
        info: 'Node.js® is an open-source, cross-platform JavaScript runtime environment.'
    },

    NestJS: {
        color: 'rgba(224,35,78,1)',
        image: 'https://camo.githubusercontent.com/8855980a487f9e31426fbfc2cbbfdda5aa3b7f1d390e262e652e639e911b3d87/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6e6573746a732d2532334530323334452e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6e6573746a73266c6f676f436f6c6f723d7768697465',
        link: 'https://nestjs.com/',
        info: 'NestJS is one of the fastest-growing Node.js frameworks for building efficient, scalable backend applications using NodeJS.'
    },

    TailwindCSS: {
        color: '#38b2ac',
        link: 'https://tailwindcss.com/',
        info: 'Tailwind CSS is an open source CSS framework.',
        image: 'https://camo.githubusercontent.com/ec8056bddf659d21de39b358d9786e56731cd767117e091348411666a5e7eee6/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f7461696c77696e646373732d2532333338423241432e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d7461696c77696e642d637373266c6f676f436f6c6f723d7768697465',
    },

    MongoDB: {
        color: '#4ea94b',
        link: 'https://www.mongodb.com/',
        info: 'MongoDB is a non-relational document database that provides support for JSON-like storage.',
        image: 'https://camo.githubusercontent.com/c839570bc71901106b11b8411d9277a6a8356a9431e4a16d6c26db82caab7d62/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4d6f6e676f44422d2532333465613934622e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6d6f6e676f6462266c6f676f436f6c6f723d7768697465'
    }
}

const ANIM_VARIANTS = {
    initial: {
        opacity: 0,
        y: -50,
    },

    shown: {
        opacity: 1,
        y: 0,
    },
}

const ANIM_TRANSITION = {
    type: 'spring',
    bounce: 0.5
    // duration: 0.3
}

const itemsKeys = Object.keys(items)

export default function Stack(){
    const [selected, setSelected] = useState(itemsKeys[0])

    return (
        <Section>
            <SectionContent className='py-[80px]'>
                <Title className='mb-[50px]'>
                    <motion.div
                    initial={{
                        x: -30,
                        rotateZ: -5,
                    }}
                    animate={{
                        x: 30,
                        rotateZ: 5,
                    }}
                    transition={{
                        repeat: Infinity,
                        repeatType: 'mirror',
                        type: 'tween',
                        duration: 1
                    }}
                    >{'💫I love using...'}</motion.div>
                </Title>
                <div className='flex justify-center sS:justify-between gap-[20px]'>
                    <div className='flex flex-col items-center sS:items-start gap-[7px] sM:gap-[10px]'
                    >{
                        itemsKeys.map(item =>
                            <Item key={item} item={items[item]} onSelected={(isTrue) => {
                                setSelected(item)
                            }}/>
                        )
                    }</div>

                    <div className='max-w-[370px] grow relative hidden sS:flex justify-end'>
                        {
                            selected ?
                            <motion.div
                            variants={ANIM_VARIANTS}
                            transition={ANIM_TRANSITION}
                            key={selected}
                            initial='initial'
                            animate='shown'
                            className='w-full mt-[30px] absolute'>
                                <div className="text-[2.3rem] sM:text-[3rem] sLg:text-[5rem] font-[600]"
                                style={{
                                    color: items[selected].color,
                                }}>
                                    {selected}
                                </div>
                                <div className='text-[0.8rem] sM:text-[1rem] sLg:text-[1.3rem]'
                                >
                                    {items[selected].info}
                                </div>
                            </motion.div>
                            :null
                        }
                    </div>
                </div>
            </SectionContent>
        </Section>
    )
}