"use client"
import { useState } from "react";
import CustomBadge from "@/components/common/custombadge";
import CustomCheckBox from "@/components/common/customcheckbox";

interface TodoItemProps {
  category: string;
  text: string;
}

export default function TodoItem({ category, text }: TodoItemProps) {
  const [checked, setChecked] = useState(false);

  return (
     <div className="flex items-center gap-3 w-full">
      <CustomBadge label={category} />

      <p
        className={`text-lg font-bold text-[#7A4A1D] mx-4 flex-1 text-center ${
          checked ? "line-through opacity-50" : ""
        }`}
      >
        {text}
      </p>

      <CustomCheckBox
        checked={checked}
        onCheckedChange={(val) => setChecked(!!val)}
      />
    </div>
  );
}
