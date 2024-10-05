import { books } from "../constant/constant";
import { useNavigate } from "react-router-dom";

export function Allbooks() {
  const nav = useNavigate();
  const handlebtn = (title) => nav(`/${title}`);

  return (
    <div className="py-3 dark:text-white dark:bg-gray-800">
      <ul className="grid lg:grid-cols-5">
        {books.map((book) => (
          <li className="mt-20 flex flex-col items-center" key={book.id}>
            <img
              style={{ width: "150px", height: "150px" }}
              src={book.image}
              className="dark:bg-gray-700"
            />
            <h2 className="mt-2 dark:text-white">{book.title}</h2>
            <button
              onClick={() => handlebtn(book.title)}
              className="mt-5 bg-blue-500 hover:bg-indigo-600 text-white font-semibold py-2 px-3 rounded-lg shadow-md transition duration-300 ease-in-out"
            >
              View Details
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
