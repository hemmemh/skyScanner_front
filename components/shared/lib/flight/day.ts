import dayjs from "dayjs"

export const msToHoursAndMinutes=(startDate:number, endDate:number)=>{

    const start = dayjs(startDate).format('HH:mm')
    const end = dayjs(endDate).format('HH:mm')
    const duration = dayjs.duration(endDate - startDate);

    const hours = Math.floor(duration.asHours());
    const minutes = duration.minutes() + 1;

    return {start, end, hours, minutes}
}

export const weekDayAndDatefromMs = (date:number)=>{
    const weekDay = dayjs(date).day()
    const data = dayjs(date).date()
    const month = dayjs(date).format('MMM')
    const year = dayjs(date).year()
    
    return `${weekDay}, ${data} ${month} ${year}`
    
    
      }
