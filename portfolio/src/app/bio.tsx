'use client'
import { selectVietnamese } from "@/redux/features/language/language"
import { useSelector } from "react-redux"

export default function Biography() {
    const vietnamese = useSelector(selectVietnamese);
    return (
        <div 
            className="relative flex gap-3 md:h-48 sm:h-auto max-sm:h-auto
                        sm:p-3
                        max-sm:p-3">
            <article 
            className="flex flex-col gap-2 justify-center h-full text-wrap">
                <h1 className=" text-2xl text-nowrap">
                    {vietnamese ? "Tôi tên là" : "Fullname"}:
                </h1>
                <h2 className="text-xl text-nowrap">
                    {vietnamese ? "Chuyên môn" : "Speciallity"}:
                </h2>
            </article>
            <article 
                className="flex flex-col gap-2 justify-center h-full 
                            text-2xl text-nowrap">
                <strong className="text-2xl text-nowrap">
                    Lê Minh Đức
                </strong>
                <strong className="text-xl text-nowrap">
                    {vietnamese ? "Phát triển phần mềm" : "Software Developer"}
                </strong>
            </article>
        </div>
    )
}

export function BioArtWork() {
    return (
        <div
            className="flex flex-col justify-center w-[200px] min-w-[200px]
                  relative z-0 h-48 skew-y-12
                  md:relative
                  sm:absolute sm:right-4
                  max-sm:absolute max-sm:right-4">
            <div
                className="absolute -translate-y-[25px] text-8xl z-20 ">Đức</div>
            <div
                className="z-10 absolute top-0 h-[96px] w-[192px] bg-orange-500 rotate-12">
            </div>
            <div
                className="z-30 absolute top-0 h-24 w-48 rotate-12 text-white overflow-hidden">
                <div className="-rotate-12 text-8xl translate-y-[20px]">Đức</div>
            </div>
        </div>
    )
}