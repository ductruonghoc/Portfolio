'use client';
import Image from "next/image";
import error_default_background from "./img/Designer.jpeg";

export default function Error() {
    return (
        <div 
            className="container max-w-full h-screen gap-1
                    flex flex-col items-center">
            <Image 
                src={error_default_background} 
                alt="Page load failed"
                className="w-auto h-4/6
                        drop-shadow-2xl
                        rounded-md border-2 border-yellow-50"/>
            <p
             className="text-7xl text-zinc-400">
                {"Failed to load :("}
             </p>
        </div>
    );
}