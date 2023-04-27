export const getCurrentMonth =()=>{
    let now = new Date();
    return `${now.getFullYEar()}-${now.getMonth()+1}`
}