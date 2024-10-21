import { useState } from "react";
import { Childs } from "./child";
import { DATA } from "./data";
import { ChevronRightIcon, ChevronDownIcon } from "@radix-ui/react-icons";

// Helper function to render child nodes recursively with expand/collapse
export default function Table() {
    const [openItems, setOpenItems] = useState<{ [key: number]: boolean }>({});

    const toggleItem = (id: number) => {
        setOpenItems((prevState) => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };

    return (
        <>
            <table className="table-fixed w-full">
                <thead className="border p-10 bg-gray-200">
                    <tr>
                        <th className="text-left pl-10">Name</th>
                        <th>Start Date</th>
                        <th>Due Date</th>
                        <th>Priority</th>
                    </tr>
                </thead>
                <tbody className="bg-gray-100">
                    {DATA.map((item) => (
                        <>
                            <tr className="border" key={item.id}>
                                <td className="flex gap-2 text-left pl-3">
                                        <button onClick={() => toggleItem(item.id)}>
                                            {openItems[item.id] ? <ChevronDownIcon/> : <ChevronRightIcon/>}
                                        </button>
                                    {item.name}
                                </td>
                                <td>{item.startDate}</td>
                                <td>{item.dueDate}</td>
                                <td>{item.priority}</td>
                            </tr>
                            {/* ini rekursif */}
                            {openItems[item.id] && item.children && (
                                <Childs children={item.children} level={1} />
                            )}
                        </>
                    ))}
                </tbody>
            </table>
        </>
    );
}
