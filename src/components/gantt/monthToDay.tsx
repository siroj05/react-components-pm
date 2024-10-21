interface Props {
    months : {
        name : string
        days : number
    }[]
    taskRanges : {
        startMonth : string
        endMonth : string
        startDay : number
        endDay : number
        startYear : number
        endYear : number
        name : string
    }[]
}

export default function MonthtoDay(
    {
        months,
        taskRanges
    }:Props
){

    const currentYear = new Date().getFullYear();

    const isWithinSpecificRange = (monthName: string, day: number, taskRange: { startMonth: string, endMonth: string, startDay: number, endDay: number, startYear: number, endYear: number }) => {
        const monthIndex = months.findIndex(month => month.name === monthName);
        const startMonthIndex = months.findIndex(month => month.name === taskRange.startMonth);
        const endMonthIndex = months.findIndex(month => month.name === taskRange.endMonth);
        // Jika rentang berada dalam bulan yang sama
        if (startMonthIndex === endMonthIndex) {
            return taskRange.startMonth === monthName && day >= taskRange.startDay && day <= taskRange.endDay;
        }

        if (monthIndex >= startMonthIndex && monthIndex <= endMonthIndex) {
            if (monthIndex === startMonthIndex) {
                return day >= taskRange.startDay; // Dari tanggal mulai
            } else if (monthIndex === endMonthIndex) {
                return day <= taskRange.endDay; // Hingga tanggal akhir
            }
            return true; // Semua hari di antara
        }

        return false;
    };


    return(
        <div className="flex">
            <table className="border border-gray-300">
                <thead>
                    <tr>
                        <th rowSpan={1} className="h-[5rem] border border-gray-300 px-20">
                            Data
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {taskRanges.map((head, index) =>(
                        <tr key={index}>
                            <th className="h-5 border-y">
                                {head.name}
                            </th>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="overflow-x-auto">
                <table className="table-auto border-collapse border border-gray-300">
                    <thead>
                        <tr>
                            {/* Header bulan */}
                            {months.map((month, index) => (
                                <th key={`month-${index}`} colSpan={month.days} className="border border-gray-300 p-2">
                                    {month.name} {currentYear}
                                </th>
                            ))}
                        </tr>
                        <tr>
                            {/* Header hari */}
                            {months.map((month, monthIndex) => (
                                Array.from({ length: month.days }, (_, dayIndex) => (
                                    <th key={`day-${monthIndex}-${dayIndex}`} className="border border-gray-300 p-2">
                                        {dayIndex + 1}
                                    </th>
                                ))
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {taskRanges.map((taskRange, i) => (
                            <tr key={i}>
                                {months.map((month, monthIndex) => (
                                    Array.from({ length: month.days }, (_, dayIndex) => {
                                        const day = dayIndex + 1;
                                        const isHighlighted = isWithinSpecificRange(month.name, day, taskRange);
                                        return (
                                            <td key={`${monthIndex}-${dayIndex}`} className="h-7 border-y relative">
                                                <div className={`text-center ${isHighlighted ? 'h-4 my-auto absolute inset-0 bg-blue-400 border-transparent' : ''}`}/>
                                            </td>
                                        );
                                    })
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}