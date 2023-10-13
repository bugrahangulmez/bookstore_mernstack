import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const EditBook = () => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    publishYear: "",
  });
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:3500/books/${id}`,
    }).then((res) => {
      console.log(res.data);
      setBook((prev) => {
        return {
          title: res.data.title,
          author: res.data.author,
          publishYear: res.data.publishYear,
        };
      });
    });
  }, []);
  const handleUpdate = () => {
    console.log(book);
    axios({
      method: "put",
      url: `http://localhost:3500/books/edit/${id}`,
      data: book,
    })
      .then((res) => {
        setBook({
          title: "",
          author: "",
          publishYear: "",
        });
        alert("Book details are updated succesfully!");
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong!");
      });
  };
  const handleInputChange = (val) => {
    const key = val.target.name;
    const value = val.target.value;
    console.log(key);
    console.log(value);
    setBook((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <Link to={".."}>
        <p>Back</p>
      </Link>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        className="p-1 m-1 border w-40 border-slate-700 rounded-md"
        name="title"
        value={book.title}
        onChange={handleInputChange}
      />
      <label htmlFor="author">Author</label>
      <input
        type="text"
        className="p-1 m-1 border w-40 border-slate-700 rounded-md"
        name="author"
        value={book.author}
        onChange={handleInputChange}
      />
      <label htmlFor="publishYear">Publish Year</label>
      <input
        type="text"
        className="p-1 m-1 border w-40 border-slate-700 rounded-md"
        name="publishYear"
        value={book.publishYear}
        onChange={handleInputChange}
      />
      <button
        className="m-2 p-2 border border-slate-700 rounded-md"
        onClick={handleUpdate}
      >
        Update
      </button>
    </div>
  );
};

export default EditBook;
