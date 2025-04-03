// 목표 진행률
import {Separator} from "@/components/ui/separator"
import { ReactNode } from "react"

interface CardProps {
  title: string
  height?: string
  more?: boolean
}

export default function Card({
  title,
  height, //높이 수정
  more = false,
}: CardProps) {
  return (
    <section className={`bg-[#fff0d5] rounded-xl p-4 space-y-2 w-[90%] ${height}`}>
      <div className="flex justify-between items-center font-semibold">
        <span>{title}</span>
        {more&&( <div className="text-sm text-[#7F4E28] font-semibold hover:text-[#A35F30]">
      + 더보기
    </div>)}
      </div>
      <Separator className="bg-[#f4ddbd]" />
    </section>
  )
}
