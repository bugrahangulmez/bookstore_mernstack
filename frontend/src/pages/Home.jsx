import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Home = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3500/books")
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <Link to={"/create"}>
        <h1>Create Book</h1>
      </Link>
      <table>
        <thead>
          <tr>
            <th className="p-2 m-2 rounded-md border border-slate-600">No</th>
            <th className="p-2 m-2 rounded-md border border-slate-600">
              Title
            </th>
            <th className="p-2 m-2 rounded-md border border-slate-600">
              Autor
            </th>
            <th className="p-2 m-2 rounded-md border border-slate-600">
              Publish Year
            </th>
            <th className="p-2 m-2 rounded-md border border-slate-600">
              Operations
            </th>
          </tr>
        </thead>
        <tbody>
          {books.length > 0 &&
            books.map((book, index) => (
              <tr key={book._id}>
                <td className="p-2 m-2 rounded-md border border-slate-600">
                  {index + 1}
                </td>
                <td className="p-2 m-2 rounded-md border border-slate-600">
                  {book.title}
                </td>
                <td className="p-2 m-2 rounded-md border border-slate-600">
                  {book.author}
                </td>
                <td className="p-2 m-2 rounded-md border border-slate-600">
                  {book.publishYear}
                </td>
                <td className="p-2 m-2 rounded-md border border-slate-600">
                  <Link to={`/detail/${book._id}`}>
                    <p className="p-1">Detail</p>
                  </Link>
                  <Link to={`/edit/${book._id}`}>
                    <p className="p-1">Edit</p>
                  </Link>
                  <Link to={`/delete/${book._id}`}>
                    <p className="p-1">Delete</p>
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
