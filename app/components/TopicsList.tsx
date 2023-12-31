import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

const TopicsList = () => {
  return (
    <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5">
      <div>
        <h1 className="text-2xl font-bold">Topic Title</h1>
        <p className="text-lg">Topics descriptions here</p>
      </div>
      <div className="flex gap-2 items-start">
        <RemoveBtn />
        <Link href={"/editTopic/123"}>
          <HiPencilAlt className="text-2xl" />
        </Link>
      </div>
    </div>
  );
};

export default TopicsList;
