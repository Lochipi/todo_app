import EditTopicForm from "@/app/components/EditTopicForm";

const getTopicById = async (id: string) => {
  try {
    const response = await fetch(`http://localhost:3000/api/topics/${id}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Error fetching topic by id");
    }

    return response.json();
  } catch (error) {
    console.log(error);
  }
};

const page = async ({ params }: { params: any }) => {
  const { id } = params;
  await getTopicById(id);

  const topic = await getTopicById(id);

  const { title, description } = topic;

  return <EditTopicForm id={id} description={description} title={title} />;
};

export default page;
