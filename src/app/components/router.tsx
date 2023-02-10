import {useLocation} from "@/shared"
import {Path} from "@/shared"
import Route from "../core/router"

export default function Router(): JSX.Element {
    const [location] = useLocation()
    const path = new Path(location.points)
    return Route(path)
}