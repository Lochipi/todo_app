"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface EditTopicFormProps {
  id: string;
  title: string;
  description: string;
}

const EditTopicForm = ({ id, title, description }: EditTopicFormProps) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const router = useRouter();

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    try {
      const response = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          newTitle,
          newDescription,
        }),
      });

      if (!response.ok) {
        throw new Error("Error updating topic");
      }

      router.push("/");
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(event) => setNewTitle(event.target.value)}
        value={newTitle}
        type="text"
        className="border border-slate-500 px-8 py-2 outline-none"
        placeholder="Topic title"
      />
      <input
        onChange={(event) => setNewDescription(event.target.value)}
        value={newDescription}
        type="text"
        className="border border-slate-500 px-8 py-2 outline-none"
        placeholder="Topic Description"
      />

      <button
        type="submit"
        className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
      >
        Update Topic
      </button>
    </form>
  );
};

export default EditTopicForm;
