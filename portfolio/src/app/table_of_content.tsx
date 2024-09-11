'use client'
import { selectDarkMode, turnDarkMode } from "@/redux/features/theme/theme";
import { useDispatch, useSelector } from "react-redux"

export default function TableOfContents() {
    const darkMode = useSelector(selectDarkMode);
    const dispatch = useDispatch();
    return (
        <div
            className="container px-3 py-5 min-w-full
                    drop-shadow-md shadow-inner 
                    bg-black md:h-screen bg-red-300
                    dark:bg-sky-900 dark:text-slate-100
                    md:block
                    sm:h-[60px] sm:flex sm:items-center
                    max-sm:h-[60px] max-sm:flex max-sm:items-center">
            <div className="flex gap-2">
                <button
                    className="w-[37px] min-w-[37px] p-[2px] h-[22px]
                            drop-shadow-md
                            shadow-inner
                            border border-slate-300 rounded-full
                            bg-neutral-300
                            dark:bg-black dark:border-black dark:drop-shadow-[0px_7px_3px_rgba(255,255,255,0.5)]
                            "
                    onClick={() => dispatch(turnDarkMode(!darkMode)) || console.log(darkMode) /*reverse current darkmode */}
                >
                    <div className="
                            active:transition-all
                            w-0 p-[8px]
                            rounded-full drop-shadow-md
                            bg-white
                            dark:float-right
                           ">
                    </div>
                </button>
                <div>
                    Chế độ: <strong>{darkMode ? "Tối" :  "Bình Thường"}</strong>
                </div>
            </div>
        </div>
    )
}
