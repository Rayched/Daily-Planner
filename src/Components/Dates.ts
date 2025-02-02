const modifyNumber = (targetNum: number) => {
    if(targetNum < 10){
        return "0" + String(targetNum);
    } else {
        return String(targetNum);
    };
}

export function getDateTimes(){
    const Dates = new Date();

    const Years = String(Dates.getFullYear());
    const Month = modifyNumber(Dates.getMonth());
    const dates = modifyNumber(Dates.getDate());

    const FullDate = Years + "-" + Month + "-" + dates;

    return FullDate;
}