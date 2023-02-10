class QueriesUtils {
    parse(str: string){
        const urlSearchParams = new window.URLSearchParams(str)
        return Object.fromEntries(urlSearchParams.entries())
    }

    build(params: any){
        if (params && Object.keys(params).length > 0){
            return new window.URLSearchParams(params).toString()
        } else {
            return ''
        }
    }
}

const QUERIES = new QueriesUtils()

export default QUERIES