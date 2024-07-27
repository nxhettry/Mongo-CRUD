import React from "react";
import Deletebtn from "./Deletebtn";
import Editbtn from "./Editbtn";

const getTopics = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/topics", {
      method: "GET",
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error("Failed to fetch topics");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(`Error loading topics : ${error}`);
  }
};

const Topics = async () => {
  const { topics } = await getTopics();

  return (
    <>
      {topics.map((topic) => (
        <div key={topic._id} className="border border-slate-300 rounded-lg px-12 py-8 text-black flex justify-between ">
          <div className="flex-col flex gap-3">
            <h1 className="text-3xl">{topic.title}</h1>
            <h1 className="text-xl">{topic.description}</h1>
          </div>
          <div className="flex flex-col gap-3">
            <Deletebtn id={`${topic._id}`} />
            <Editbtn id={`${topic._id}`} />
          </div>
        </div>
      ))}
    </>
  );
};

export default Topics;
