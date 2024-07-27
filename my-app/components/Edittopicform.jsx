"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Edittopicform = ({ id, title, description }) => {
  const router = useRouter();
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({newTitle, newDescription}),
      });
      if (!res.ok) {
        throw new Error("An error occurred while updating the topic");
      }

      router.push("/");
      router.refresh();

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[30%] mx-auto p-4 flex flex-col gap-12 text-2xl text-black border border-slate-400 rounded-lg m-8">
      <h1>Edit topic</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-12">
        <input
          onChange={(e) => setNewTitle(e.target.value)}
          value={newTitle}
          type="text"
          placeholder="Title"
          className="border border-slate-300 rounded-lg px-4 py-2"
        />
        <textarea
          onChange={(e) => setNewDescription(e.target.value)}
          value={newDescription}
          type="text"
          placeholder="Description"
          className="border border-slate-300 rounded-lg px-4 py-2"
        />
        <button type="submit" className="bg-slate-500 text-white rounded-lg px-4 py-2">
          Update
        </button>
      </form>
    </div>
  );
};

export default Edittopicform;
