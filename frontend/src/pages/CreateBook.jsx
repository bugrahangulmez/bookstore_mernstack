import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const CreateBook = () => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    publishYear: "",
  });
  const handleInputChange = (val) => {
    const key = val.target.name;
    const value = val.target.value;
    setBook((prev) => {
      return { ...prev, [key]: value };
    });
  };
  const handleCreateBook = async () => {
    console.log(book);
    await axios({
      method: "post",
      url: "http://localhost:3500/books/create",
      data: book,
    })
      .then((res) => {
        console.log(res);
        setBook({
          title: "",
          author: "",
          publishYear: "",
        });
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <Link to={"/"}>
        <h1>Home</h1>
      </Link>
      <h1 className="font-bold text-lg">Create Book Page</h1>
      <label className="p-1 m-1" htmlFor="title">
        Title
      </label>
      <input
        className="p-1 m-1 border w-40 border-slate-700 rounded-md"
        type="text"
        name="title"
        value={book.title}
        onChange={handleInputChange}
      />
      <label className="p-1 m-1" htmlFor="author">
        Author
      </label>
      <input
        className="p-1 m-1 border w-40 border-slate-700 rounded-md"
        type="text"
        name="author"
        value={book.author}
        onChange={handleInputChange}
      />
      <label className="p-1 m-1" htmlFor="publishYear">
        Publish Year
      </label>
      <input
        className="p-1 m-1 border w-40 border-slate-700 rounded-md"
        type="text"
        name="publishYear"
        value={book.publishYear}
        onChange={handleInputChange}
      />
      <button
        className="m-2 p-2 w-40 rounded-md border border-slate-700"
        onClick={handleCreateBook}
      >
        Create Book
      </button>
    </div>
  );
};

export default CreateBook;
