import Biography, { BioArtWork } from "./bio";

type Props = {
  onLoad?: boolean;
}

export default function Cover({
  onLoad
}: Props = { onLoad: false }) {
  return (//avatar before detail
    <div
      className="container relative min-w-full h-56 bg p-3 flex gap-2 justify-between
                border-solid border-2 border-amber-300 ring-offset-2 ring ring-amber-50 rounded-md
                bg-gradient-to-r from-amber-100 to-white
                dark:border-black dark:from-white dark:to-slate-300
                md:flex-row md:h-56
                sm:flex-col sm:h-auto sm:items-center
                max-sm: flex-col max-sm:h-auto max-sm:items-center
                custom-transition"
    >
      <div
        className={`relative z-10 border-dashed border-2 border-yellow-200 
                  shrink-0
                  h-48 w-48 
                  ${onLoad ? "" : "bg-[url('img/8284224.jpg')] bg-[length:36rem_26rem] bg-left-bottom hover:bg-top"} 
                  dark:border-black `}>
      </div>
      <Biography />
      <div
        className="animate-left-right-skew relative">
        <BioArtWork />
      </div>
    </div>
  );
}
