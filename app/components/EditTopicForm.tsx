const EditTopicForm = () => {
  return (
    <form className="flex flex-col gap-3">
      <input
        type="text"
        id="topic"
        name="topic"
        className="border border-slate-500 px-8 py-2 outline-none"
        placeholder="Topic title"
      />
      <input
        type="text"
        id="topic"
        name="topic"
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
