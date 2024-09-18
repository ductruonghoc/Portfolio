'use client'
import {useSelector } from "react-redux";
import Cover from "./cover";
import TableOfContents from "./table_of_content";
import { selectDarkMode } from "@/redux/features/theme/theme";

export default function Home() {
  const darkMode = useSelector(selectDarkMode);
  return (
    <div className={`${darkMode ? "dark" : ""}
                      `}>
      <div
        className="
                  container w-screen max-w-full md:grid md:grid-rows-1 md:grid-cols-12
                  relative
                  dark:bg-slate-300
                  sm:pb-[60px] sm:max-h-screen sm:overflow-hidden sm:h-screen
                  max-sm:pb-[60px] max-sm:max-h-screen max-sm:overflow-hidden max-sm:h-screen
                  custom-transition">
        <div
          className="md:col-span-10 p-3 overflow-auto
                    sm:w-full sm:max-h-full sm:h-full
                    max-sm:w-full max-sm:max-h-full max-sm:h-full">
          <Cover />
        </div>
        <div
          className=" bottom-0
                      md:col-span-2 md:relative
                      sm:w-full sm:absolute
                      max-sm:w-full max-sm:absolute">
          <TableOfContents></TableOfContents>
        </div>
      </div>
    </div>
  );
}
