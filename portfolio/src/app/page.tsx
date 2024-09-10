import Cover from "./cover";
import TableOfContents from "./table_of_content";

export default function Home() {
  return (
      <div
        className="container w-screen max-w-full grid grid-rows-1 grid-cols-12">
        <div
          className="col-span-10 p-3">
          <Cover />
        </div>
        <div
          className="col-span-2">
            <TableOfContents></TableOfContents>
        </div>
      </div>
  );
}
