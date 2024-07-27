"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Addtopic = () => {
  const router = useRouter();

  //To update title
  const [title, setTitle] = useState("");
  const updateTitle = (event) => {
    setTitle(event.target.value);
  };

  //To update description
  const [description, setDescription] = useState("");
  const updateDescription = (event) => {
    setDescription(event.target.value);
  };

  //On submission of the form
  async function handleSubmit (e) {
    e.preventDefault();
    
    if(!title || !description) {
      alert("Title and description are required !!");
      return;
    }
    try {
      const res = await fetch('http://localhost:3000/api/topics', {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({title, description}),
      });

      if(res.ok) {
        router.push("/");
        router.refresh();
      } else{ 
        throw new Error('Failed to create a new title !');
      }
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  }
  return (
    <div className="w-[30%] mx-auto p-4 flex flex-col gap-12 text-2xl text-black border border-slate-400 rounded-lg m-8">
      <h1>Add new Title</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-12">
        <input
          type="text"
          value={title}
          placeholder="Title"
          className="border border-slate-300 rounded-lg px-4 py-2"
          onChange={updateTitle}
        />
        <textarea
          value={description}
          placeholder="Description"
          className="border border-slate-300 rounded-lg px-4 py-2"
          onChange={updateDescription}
        />
        <button className="bg-slate-500 text-white rounded-lg px-4 py-2"
        type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default Addtopic;
