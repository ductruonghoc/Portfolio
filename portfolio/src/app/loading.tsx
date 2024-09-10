import Cover from "./cover";
export default function Loading(props: any) {
    return (
        <div className="animate-pulse">
            <div
                className="container w-screen max-w-full grid grid-rows-1 grid-cols-12">
                <div
                    className="col-span-10 p-3">
                    <Cover onLoad={true}/>
                </div>
            </div>
        </div>
    );
}