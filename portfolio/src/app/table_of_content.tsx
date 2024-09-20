'use client'
import { selectDarkMode, turnDarkMode } from "@/redux/features/theme/theme";
import { useDispatch, useSelector } from "react-redux";
import { StarIcon, GlobeAmericasIcon } from "@heroicons/react/16/solid";
import { selectVietnamese, turnVietnamese } from "@/redux/features/language/language";

export default function TableOfContents() {
    const darkMode = useSelector(selectDarkMode);
    const vietnamese = useSelector(selectVietnamese);
    const dispatch = useDispatch();

    const handleThemeChange = () => {
        localStorage.setItem("theme_dark_mode", !darkMode ? "true" : "false");//locale cache
        dispatch(turnDarkMode(!darkMode))//store dispatch
    }

    const handleLanguageChange = () => {
        localStorage.setItem("language_vietnamese", !vietnamese ? "true" : "false");//Locale cache
        dispatch(turnVietnamese(!vietnamese));
    }

    return (
        <div
            className="container px-3 py-5 min-w-full
                    drop-shadow-md shadow-inner 
                    bg-black md:h-screen bg-red-300
                    dark:bg-sky-900 dark:text-slate-100
                    custom-transition">
            <div
                className="flex flex-wrap w-full gap-2
                            max-md:h-full
                            md:items-start
                            max-md:items-center max-md:justify-around">
                <div className="relative
                                md:basis-full flex gap-2"> {/*Bủtton for mode */}
                    <button
                        className="w-[37px] min-w-[37px] p-[2px] h-[22px]
                            drop-shadow-md
                            shadow-inner
                            border border-slate-300 rounded-full
                            bg-neutral-300
                            dark:bg-black dark:border-black dark:drop-shadow-[11px_0px_2px_rgba(255,255,255,0.5)]
                            custom-transition
                            peer
                            "
                        onClick={() => handleThemeChange()/*reverse current darkmode */}
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
                    <div
                        className="text-nowrap
                                    max-md:absolute max-md:-top-[50px] 
                                    max-md:border-dashed max-md:border max-md:border-orange-100 max-md:border-slate-300
                                    max-md:p-2
                                    max-md:bg-orange-50 max-md:dark:bg-slate-600
                                    max-md:shadow-lg
                                    max-md:hidden max-md:peer-hover:block">
                        {vietnamese ? "Chế độ" : "Theme"}: <strong>{vietnamese ? (darkMode ? "Tối" : "Bình Thường") : (darkMode ? "Dark" : "Normal")}</strong>
                    </div>
                </div>
                <div className="md:basis-full flex gap-2"> {/*Button for language */}
                    <button
                        className={`relative w-[37px] min-w-[37px] p-[2px] h-[22px]
                            overflow-hidden
                            peer
                            drop-shadow-md
                            shadow-inner
                            border rounded-full
                            custom-transition
                            ${vietnamese ? "bg-rose-700 border-rose-500" : "bg-white border-white"}`
                        }
                        onClick={() => handleLanguageChange()}
                    >
                        <div className={`
                            
                            relative z-10
                            active:transition-all
                            w-0 p-[8px]
                            rounded-full drop-shadow-md
                            custom-transition
                            ${vietnamese ? "bg-white" : "bg-blue-800"}
                            ${!vietnamese && "float-right"}
                        `}>
                        </div>
                        {
                            vietnamese ?
                            <StarIcon
                                className="absolute top-0 -end-[6px] 
                                        w-[21px]
                                        fill-yellow-400"></StarIcon>
                            :
                            <GlobeAmericasIcon
                                className="absolute top-0 -start-[6px]
                                            w-[21px]
                                            fill-red-600"/>
                        }
                    </button>
                    <div
                        className="text-nowrap
                                    max-md:absolute max-md:-top-[50px] 
                                    max-md:border-dashed max-md:border max-md:border-orange-100 max-md:border-slate-300
                                    max-md:p-2
                                    max-md:bg-orange-50 max-md:dark:bg-slate-600
                                    max-md:shadow-lg
                                    max-md:hidden max-md:peer-hover:block">
                        {vietnamese ? "Ngôn ngữ" : "Language"}: <strong>{vietnamese ? "Tiếng Việt" : "English"}</strong>
                    </div>
                </div>
            </div>

        </div>
    )
}
