import { Section, SectionContent, PageScrollable } from "@/shared"
import { Footer } from "@/widgets/footer"
import { NavigationBar } from "@/widgets/navigationBar"
import Banner from "./banner"
import Stack from "./stack"
import Projects from "./projects"
import Contact from "./contact"
import About from "./about"

export default function HomePage(){
    return (
        <PageScrollable>
            <NavigationBar/>
            <Banner/>
            <About/>
            <Stack/>
            <Projects/>
            <Contact/>
            <Footer
                links={[
                    {children: 'About', to: 'about'},
                    {children: 'Projects', to: 'projects'},
                    {children: 'Contact', to: 'contact'},
                ]}
            />
        </PageScrollable>
    )
}