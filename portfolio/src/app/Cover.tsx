type Props = {
  onLoad: boolean;
}

export default function Cover({
  onLoad
}: Props = { onLoad: false }) {
  return (//avatar before detail
    <div
      className="container h-56 bg-amber-100 p-3
                border-solid border-2 border-amber-300 ring-offset-2 ring ring-amber-50 rounded-md"
    >
      <div
        className={`border-dashed border-2 border-yellow-200 
                  h-48 w-48 
                  ${onLoad ? "" : "bg-[url('img/8284224.jpg')] bg-[length:36rem_26rem] bg-left-bottom hover:bg-top"} `}>
      </div>
    </div>
  );
}
