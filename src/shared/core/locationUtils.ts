import {pointsToString, stringToPoints, Points} from "./path"
import QUERIES from "./queriesUtils"

const url = new URL('', window.location.href)

class LocationUtils {
    constructor(readonly host: string, readonly points: Points, readonly protocol: string){
    }

    buildUri(points: Points, queries?: object): string {
        return this.host + this.buildPath(points, queries)
    }

    build(points: Points, queries?: object): string {
        return this.protocol + '//' + this.buildUri(points, queries)
    }

    buildWS(points: Points, queries?: object): string {
        return this.protocol.replace('http', 'ws') + '//' + this.buildUri(points, queries)
    }

    buildPath(points: Points, queries?: object){
        return pointsToString(points) + QUERIES.build(queries)
    }
}

const LOCATION = new LocationUtils(url.host /*'localhost:5000'*/, stringToPoints(url.pathname), url.protocol)
export default LOCATION