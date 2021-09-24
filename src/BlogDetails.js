import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";

function BlogDetails() {
  const { id } = useParams();
  const { data: blog, isLoading, error } = useFetch('http://localhost:8000/blogs/' + id);
  const redirect = useHistory();

  function handleClick() {
    fetch('http://localhost:8000/blogs/' + id, {
      method: 'DELETE'
    }).then(() => redirect.push('/'));
  }

  return (
    <div className="blog-details">
      { isLoading && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { blog && (
        <article>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
          <div> { blog.body } </div>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
}

export default BlogDetails;