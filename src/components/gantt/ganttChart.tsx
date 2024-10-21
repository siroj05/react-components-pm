import MonthtoDay from "./monthToDay";
import { taskRanges } from "./data";
export default function GanttChart() {
    const isLeapYear = (year: number) => {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    };
    const currentYear = new Date().getFullYear(); 
    const februaryDays = isLeapYear(currentYear) ? 29 : 28;
    const months = [
        { name: 'January', days: 31 },
        { name: 'February', days: februaryDays },
        { name: 'March', days: 31 },
        { name: 'April', days: 30 },
        { name: 'May', days: 31 },
        { name: 'June', days: 30 },
        { name: 'July', days: 31 },
        { name: 'August', days: 31 },
        { name: 'September', days: 30 },
        { name: 'October', days: 31 },
        { name: 'November', days: 30 },
        { name: 'December', days: 31 }
    ];
    return (
        <>
            <MonthtoDay
                months={months}
                taskRanges={taskRanges}
            />
        </>
    );
}
