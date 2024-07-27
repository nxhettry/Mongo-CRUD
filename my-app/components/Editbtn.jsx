import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

const Editbtn = (props) => {
  return (
    <Link href={`/edit/${props.id}`}>
    <button>
      <HiPencilAlt className="h-8 w-8 hover:text-white hover:bg-blue-600" />
    </button>
    </Link>
  );
};

export default Editbtn;
