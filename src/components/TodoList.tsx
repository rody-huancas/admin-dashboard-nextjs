"use client";

import { useState } from "react";
import { format, set } from "date-fns";

import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { ScrollArea } from "./ui/scroll-area";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

import { CalendarIcon } from "lucide-react";
import { Calendar } from "./ui/calendar";

const todoItems = [
  { id: "item1", text: "Terminar el proyecto de React", completed: true },
  {
    id: "item2",
    text: "Hacer las compras del supermercado",
    completed: false,
  },
  { id: "item3", text: "Ir al gimnasio", completed: false },
  { id: "item4", text: "Llamar al médico", completed: true },
  { id: "item5", text: "Estudiar para el examen", completed: false },
  { id: "item6", text: "Limpiar la casa", completed: true },
  { id: "item7", text: "Preparar la presentación", completed: false },
  { id: "item8", text: "Leer un libro", completed: false },
  { id: "item9", text: "Organizar el escritorio", completed: true },
  { id: "item10", text: "Planificar las vacaciones", completed: false },
];

const TodoList = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="space-y-4">
      <h1 className="text-lg font-medium">Lista de Tareas</h1>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button className="w-full">
            <CalendarIcon />
            {date ? format(date, "PPP") : <span>Selecciona la fecha</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-auto">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(date) => {
              setDate(date);
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>

      <ScrollArea className="max-h-[450px] overflow-y-auto">
        <div className="flex flex-col gap-4">
          {todoItems.map((item) => (
            <Card key={item.id} className="p-4">
              <div className="flex items-center gap-4">
                <Checkbox id={item.id} checked={item.completed} />
                <label
                  htmlFor={item.id}
                  className="text-sm text-muted-foreground"
                >
                  {item.text}
                </label>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default TodoList;
