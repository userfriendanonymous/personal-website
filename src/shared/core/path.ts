export type Point = string
export type Points = Point[]

type Callback = () => void
type CallbackPath = (path: Path) => void
type CallbackPointPath = (point: Point, path: Path) => void
type CallbackPoint = (point: Point) => void

export function stringToPoints(str: string){
    const points = str.split('/')
    points.splice(0, 1)
    return points
}

export function stringToPath(str: string, parent?: Path){
    return new Path(stringToPoints(str), parent)
}

export function pointsToString(points: Points){
    return '/' + points.join('/')
}

export default class Path {
    points: Points
    parent: Path | undefined
    isHandled: boolean

    constructor(points: Points, parent?: Path){
        this.points = points
        this.parent = parent
        this.isHandled = false
    }

    setAsHandled(){
        this.isHandled = true
        if (this.parent){
            this.parent.setAsHandled()
        }
    }

    getNextPath(): Path {
        const [, ...newPoints] = this.points
        return new Path(newPoints, this)
    }

    on(point: Point, callback: CallbackPath){
        if (this.points[0] === point){
            callback(this.getNextPath())
        }
    }

    any(callback: Callback){
        callback()
        this.setAsHandled()
    }

    anyOn(point: Point, callback: CallbackPath){
        if (this.points[0] === point){
            callback(this.getNextPath())
            this.setAsHandled()
        }
    }

    anyNext(callback: CallbackPointPath){
        if (this.points.length > 0){
            callback(this.points[0], this.getNextPath())
            this.setAsHandled()
        }
    }

    off(callback: Callback){
        if (this.points.length === 0){
            callback()
            this.setAsHandled()
        }
    }

    next(callback: CallbackPointPath){
        if (this.points.length > 0){
            callback(this.points[0], this.getNextPath())
        }
    }

    ends(point: Point, callback: CallbackPath){
        if (this.points.length === 1){
            this.on(point, callback)
            this.setAsHandled()
        }
    }

    last(callback: CallbackPoint){
        if (this.points.length === 1){
            callback(this.points[0])
            this.setAsHandled()
        }
    }

    none(callback: Callback){
        if (!this.isHandled){
            callback()
            this.setAsHandled()
        }
    }
}