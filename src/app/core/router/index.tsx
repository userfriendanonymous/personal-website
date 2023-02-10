import {Path} from "@/shared"
import {HomePage} from '@/pages/home'

export default function Route(path: Path): JSX.Element {
    let el = <div>Error</div>

    path.ends('', () => {
        el = <HomePage/>
    })

    return el
}