import Edittopicform from "@/components/Edittopicform";

const getTopicById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
      cache: "no-store"
    });

    if(!res.ok) {
      throw new Error("An error occurred while fetching the topic");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

const Edittopic =  async ({params}) => {
  const { id } = params;
  const {topic} = await getTopicById(id);
  const {title, description} = topic;

  return (
    <Edittopicform id={id} title={title} description={description} />
  );
};

export default Edittopic;
