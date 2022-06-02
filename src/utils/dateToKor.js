const DateToKor = (v) => {
    let temp = v.split(" ")
    console.log(v)
    return temp[3] + "년 " + month(temp[1]) + " " + temp[2] + "일 (" + week(temp[0]) + ")"
}

const month = (v) => {
    switch (v) {
        case "Dec":
            return "1월"
        case "Feb":
            return "2월"
        case "Mar":
            return "3월"
        case "Apr":
            return "4월"
        case "May":
            return "5월"
        case "Jun":
            return "6월"
        case "Jul":
            return "7월"
        case "Aug":
            return "8월"
        case "Sep":
            return "9월"
        case "Oct":
            return "10월"
        case "Nov":
            return "11월"
        case "Dec":
            return "12월"
        default:
            break;
    }
}

const week = (v) => {
    switch (v) {
        case "Mon":
            return "월"
        case "Tue":
            return "화"
        case "Wed":
            return "수"
        case "Thu":
            return "목"
        case "Fri":
            return "금"
        case "Sat":
            return "토"
        case "Sun":
            return "일"
        default:
            break;
    }
}

export default DateToKor;