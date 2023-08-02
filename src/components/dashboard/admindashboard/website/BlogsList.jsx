import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogPosts } from "../../../../redux/reducers/blogReducer";
// import { getDateOnly }  from "../../utilities/getDate";
import Table from "react-bootstrap/Table";
import "../../Dashboard.css";
import DashboardHeadline from "../../shared/DashboardHeadline";
import PageLoader from "../../shared/PageLoader";
import getDateOnly from "../../../../../utilities/getDate";

const BlogsList = () => {
  // const [action, setAction] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch the fetchBlogPosts action here
    dispatch(fetchBlogPosts());
  }, [dispatch]);

  // Get the blogs from the store
  const blogs = useSelector((state) => state.blogReducer.posts.posts);
  const status = useSelector((state) => state.blogReducer.status);

  // handle selection option change
  const handleOptionChange = (e, id) => {
    const setValue = e.target.value;

    if (setValue === "edit") {
      console.log("handle edit", id);

    } else if (setValue === "delete") {
      console.log("handle delete", id);
    }
  };
  
  const styles = {
    table: {
      // margin: "0 2rem 0 3rem",
    },
    head: {
      color: "#fff",
      fontSize: "1rem",
    },
    booked: {
      color: "#145098",
    },
    completed: {
      color: "#5cc51c",
    },
    withcredit: {
      color: "#f64f4f",
    },
    withdisbursement: {
      color: "#ecaa00",
    },
  };
  return (
    <>
      {status === "loading" ? (
        <PageLoader />
      ) : (
        <div className="ListSec">
          <DashboardHeadline
            height="52px"
            mspacer="2rem 0 -2.5rem -1rem"
            bgcolor="#145098"
          ></DashboardHeadline>
          <div style={styles.table}>
            <Table hover responsive="sm">
              <thead style={styles.head}>
                <tr>
                  <th>Title</th>
                  <th>Summary</th>
                  <th>Category</th>
                  <th>Date Posted</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {blogs?.map((blog) => (
                  <tr key={blog._id}>
                    <td>{blog.title}</td>
                    <td>{blog.postSummary}</td>
                    <td>{blog.category}</td>
                    <td>{getDateOnly(blog.createdAt)}</td>
                    <td style={styles.completed}>Active</td>
                    <td>
                      <select
                        name="action"
                        id="action"
                        onChange={(e) => handleOptionChange(e, blog._id)}
                      >
                        <option value="">Action</option>
                        <option value="edit">Edit</option>
                        <option value="delete">Delete</option>
                      </select>
                    </td>
                  </tr>
                ))}

              </tbody>
            </Table>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogsList;
