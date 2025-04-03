"use client"
import { Badge } from "@/components/ui/badge"

export default function CustomBadge({label = "Badge"}:{label?:string}){
    return(
    <Badge className="rounded-sm bg-[#FCAA2B] text-[#FFFFFF] font-semibold" >{label}</Badge>
)
}
