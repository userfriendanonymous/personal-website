import {stringToPoints, Points} from "../core/path"
import { useCallback } from "react"
import GlobalState from "../core/globalState"
import useGlobalState from "./globalState"
import QUERIES from "../core/queriesUtils"
import LOCATION from '../core/locationUtils'

let globalLocation = new GlobalState<Location>({
    points: stringToPoints(window.location.pathname),
    queries: QUERIES.parse(window.location.search)
})
type Location = {points: Points, queries: any}
type UseLocation = [Location, (points: Points, queries: any) => void]

export default function useLocation(): UseLocation {
    const [location, setLocation] = useGlobalState(globalLocation)
    
    const setRealLocation = useCallback((points: Points, queries?: any) => {
        if (!queries){
            queries = {}
        }
        setLocation({points, queries})
        window.history.pushState(undefined, '', LOCATION.buildPath(points, queries))
    }, [setLocation])
     
    return [location, setRealLocation]
}