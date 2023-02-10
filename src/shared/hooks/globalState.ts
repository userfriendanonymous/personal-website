import GlobalState from "../core/globalState"
import {useState, useEffect} from 'react'

export default function useGlobalState<StateType>(state: GlobalState<StateType>): [StateType, (value: StateType) => void] {
    const [, rerender] = useState()

    useEffect(() => {
        state.use(rerender)

        return (() => {
            state.unuse(rerender)
        })
    }, [])

    return [state.value, (value: StateType) => state.set(value)]
}