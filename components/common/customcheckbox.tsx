"use client"
import { Checkbox } from "@/components/ui/checkbox"

interface CustomCheckBoxProps {
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
  className?: string
}

export default function CustomCheckBox({
  checked,
  onCheckedChange,
  className = "",
}: CustomCheckBoxProps) {
  return (
    <Checkbox
      checked={checked}
      onCheckedChange={onCheckedChange}
      className={`
        size-[18px]
        border-[#744D2C] bg-[#F5DFC1] 
        data-[state=checked]:bg-[#FCAA2B] 
        data-[state=checked]:border-[#FCAA2B]
        text-white ${className}
      `}
    />
  )
}
