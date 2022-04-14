export const required=value=>{
    if(value){
        return undefined
    }
    return 'это поле обязательно'
}