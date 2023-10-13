import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ShowBook = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [book, setBook] = useState({
    title: "",
    author: "",
    publishYear: "",
  });
  useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:3500/books/${id}`,
    })
      .then((res) => {
        console.log(res.data);
        setBook((prev) => ({
          title: res.data.title,
          author: res.data.author,
          publishYear: res.data.publishYear,
        }));
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return loading ? (
    <p>Loading...</p>
  ) : (
    <div className="flex flex-col justify-center items-center">
      <Link to={".."}>
        <p>Back</p>
      </Link>
      <section className="flex">
        <h1>Title: </h1>
        <p>{book.title}</p>
      </section>
      <section className="flex">
        <h1>Author: </h1>
        <p>{book.author}</p>
      </section>
      <section className="flex">
        <h1>Publish Year: </h1>
        <p>{book.publishYear}</p>
      </section>
    </div>
  );
};

export default ShowBook;
