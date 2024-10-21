import type { UniqueIdentifier } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cva } from "class-variance-authority";
import { GripVertical, Pencil, Check } from "lucide-react";
import { Badge } from "./ui/badge";
import { ColumnId } from "./KanbanBoard";
import { useRef, useState } from "react";
export interface Task {
  id: UniqueIdentifier;
  columnId: ColumnId;
  content: string;
}

interface TaskCardProps {
  task: Task;
  isOverlay?: boolean;
  setWhereId : (value : string | number) => void
  setText : (value : string) => void
}

export type TaskType = "Task";

export interface TaskDragData {
  type: TaskType;
  task: Task;
}

export function TaskCard({ task, isOverlay, setWhereId, setText }: TaskCardProps) {
  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: task.id,
    data: {
      type: "Task",
      task,
    } satisfies TaskDragData,
    attributes: {
      roleDescription: "Task",
    },
  });

  const style = {
    transition,
    transform: CSS.Translate.toString(transform),
  };

  const variants = cva("", {
    variants: {
      dragging: {
        over: "ring-2 opacity-30",
        overlay: "ring-2 ring-primary",
      },
    },
  });

  let [readOnly, setReadOnly] = useState<boolean>(true)

  const ref = useRef<HTMLInputElement>(null)
  const handleClick = (task : Task, isEdit?:boolean) => {
    setReadOnly(!readOnly)
    setText(ref.current!.value??'')
    setWhereId(task.id)
    console.log(isEdit)
  }

  return (
    <Card
      ref={setNodeRef}
      style={style}
      className={variants({
        dragging: isOverlay ? "overlay" : isDragging ? "over" : undefined,
      })}
    >
      <CardHeader className="px-3 py-3 space-between flex flex-row border-b-2 border-secondary relative">
        <Button
          variant={"ghost"}
          {...attributes}
          {...listeners}
          className="p-1 text-secondary-foreground/50 -ml-2 h-auto cursor-grab"
        >
          <span className="sr-only">Move task</span>
          <GripVertical />
        </Button>
        <Badge variant={"outline"} className="ml-auto font-semibold">
          Task
        </Badge>
      </CardHeader>
      <CardContent className="px-3 pt-3 pb-6 text-left whitespace-pre-wrap flex">
        <input type="text" 
        className={`w-full bg-transparent ${!readOnly && `border-b-2`} dark:text-white focus:outline-none`} 
        defaultValue={task.content} 
        readOnly={readOnly}
        ref={ref}
        />
        {
          readOnly?
          <button onClick={() => handleClick(task, false)}>
            <Pencil width={15} height={15}/>
          </button> :
          <button onClick={() => handleClick(task, true)}>
            <Check width={15} height={15}/>
          </button>
        }
      </CardContent>
    </Card>
  );
}
