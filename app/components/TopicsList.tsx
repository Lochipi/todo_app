import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

async function getTopics() {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });
    if (!res.ok) throw Error("Failed to fetch topics");
    return res.json();
  } catch (err) {
    console.log("Error loading topics", err);
  }
}

interface Topic {
  _id: string;
  title: string;
  description: string;
}

const TopicsList = async () => {
  const topics = await getTopics();
  return (
    <div>
      {topics?.map((topic: Topic) => (
        <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5">
          <div>
            <h1 className="text-2xl font-bold">{topic.title}</h1>
            <p className="text-lg">{topic.description}</p>
          </div>
          <div className="flex gap-2 items-start">
            <RemoveBtn id={topic._id} />
            <Link href={`/editTopic/${topic._id}`}>
              <HiPencilAlt className="text-2xl" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopicsList;
