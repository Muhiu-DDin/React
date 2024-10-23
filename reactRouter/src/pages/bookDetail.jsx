import { useParams } from "react-router-dom";
import { books } from "../constant/constant";
import { useNavigate } from "react-router-dom";

export function BookDetail() {
  const backword = useNavigate();
  const Back = () => backword("/");
  const { title } = useParams();
  const book = books.find((data) => data.title === title);

  const bookTitle = book ? book.title : "Book Not Found";

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 dark:bg-gray-800">
    <div className="w-[20rem] mx-auto p-6 border rounded-lg shadow-lg flex flex-col items-center bg-white dark:bg-gray-800">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{bookTitle}</h2>
      <img
        src="https://cdn.vectorstock.com/i/500p/64/63/magical-open-book-engraving-vector-52016463.jpg"
        alt={bookTitle}
        className="w-full h-[20rem] object-cover mb-4 rounded"
      />
      <button onClick={Back} className="mt-10 flex items-center text-blue-500 bg-transparent border-none cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2"
          viewBox="0 0 24 24"
        >
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
        Back
      </button>
    </div>
    </div>
  );
}
