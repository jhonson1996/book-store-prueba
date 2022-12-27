import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useGetBooksQuery } from "../../services/booksSlice";
import { useState } from "react";
import DetailContent from "../../components/DetailContent/DetailContent";

const BooksDetails = () => {
  const { book_id } = useParams();
  const [qty, setQty] = useState(0);
  const { data, isError, isLoading, error } = useGetBooksQuery(
    `books/${book_id}`
  );
  console.log(
    "🚀 ~ file: BooksDetails.tsx ~ line 6 ~ BooksDetails ~ data",
    data
  );

  return (
    <div className="container-detail">
      <div className="button-back">
        <Link to="/books" className="btn btn-light my-3">
          Go to
        </Link>
      </div>

      <DetailContent data={data}/>

      

    </div>
  );
};

export default BooksDetails;
