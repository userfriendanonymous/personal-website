import GlobalState from "../core/globalState"
import useGlobalState from "./globalState"

const globalTheme = new GlobalState({

})

export default function useTheme(){
    const [theme, setTheme] = useGlobalState(globalTheme)
    theme
    return 
}