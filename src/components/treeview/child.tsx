import { useState } from "react";
import { ChevronRightIcon, ChevronDownIcon } from "@radix-ui/react-icons";

export const Childs = ({ children, level }: { children: any[], level: number }) => {
    const [isOpen, setIsOpen] = useState<{ [key: number]: boolean }>({});
    const toggleItem = (id: number) => {
        setIsOpen((prevState) => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };
    if (!children || children.length === 0) return null;
    console.log(isOpen)
    return (
        <>
            {children?.map((child: any) => (
                <>
                    <tr className="border" key={child.id}>
                        <td className="flex gap-2 text-left pl-3" style={{ paddingLeft: `${level * 20}px` }}>
                                <button onClick={() => toggleItem(child.id)}>
                                    {child.children && child.children.length > 0 && isOpen[child.id] ? <ChevronDownIcon/> : <ChevronRightIcon/>}
                                </button>
                            {child.name}
                        </td>
                        <td>{child.startDate}</td>
                        <td>{child.dueDate}</td>
                        <td>{child.priority}</td>
                    </tr>
                    {/* ini rekursif */}
                    {isOpen[child.id] && child.children && child.children.length > 0 && (
                        <Childs children={child.children} level={level + 1} />
                    )}
                </>
            ))}
        </>
    );
}