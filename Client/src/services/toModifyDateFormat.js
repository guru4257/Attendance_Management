export const dateFormat = (dates)=>{

    let date = new Date(dates);
    return date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear();
}