import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const DeleteBook = () => {
  const [deleted, setDeleted] = useState(false);
  const params = useParams();
  const { id } = params;
  useEffect(() => {
    axios({
      method: "delete",
      url: `http://localhost:3500/books/delete/${id}`,
    })
      .then((res) => {
        setDeleted(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <Link to={".."}>
        <p>Back</p>
      </Link>
      {deleted ? (
        <p>Book is deleted successfully!</p>
      ) : (
        <p>Book could not been deleted!</p>
      )}
    </div>
  );
};

export default DeleteBook;
