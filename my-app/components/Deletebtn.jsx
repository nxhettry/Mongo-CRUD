"use client";
import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

const Deletebtn = ({ id }) => {
  const router = useRouter();

  async function removeClicked() {
    const confirmed = confirm("Are you sure to delete ?");

    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
        method: "DELETE",
      });
      
      if (res.ok) {
        router.refresh();
      }
    }
  }

  return (
    <button onClick={removeClicked}>
      <HiOutlineTrash className="h-8 w-8 hover:bg-red-600 hover:text-white" />
    </button>
  );
};

export default Deletebtn;
