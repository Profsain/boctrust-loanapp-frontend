import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogPosts } from "../../../../redux/reducers/blogReducer";
import Table from "react-bootstrap/Table";
import "../../Dashboard.css";
import DashboardHeadline from "../../shared/DashboardHeadline";
import PageLoader from "../../shared/PageLoader";
import getDateOnly from "../../../../../utilities/getDate";
import EditBlogPage from "./EditBlogPost";
import BocButton from "../../shared/BocButton";
import ActionNotification from "../../shared/ActionNotification";

const BlogsList = () => {
  const [modalShow, setModalShow] = useState(false);
  const [action, setAction] = useState(false);
  const [actionId, setActionId] = useState("");
  const [selectedBlog, setSelectedBlog] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch the fetchBlogPosts action here
    dispatch(fetchBlogPosts());
  }, [dispatch]);

  // Get the blogs from the store
  const blogs = useSelector((state) => state.blogReducer.posts.posts);
  const status = useSelector((state) => state.blogReducer.status);

  // handle selection option change
  const handleAction = (e) => {
    const setValue = e.target.innerHTML.toLowerCase();
    const postId = e.target.id;
    setActionId(postId);

    // find single blog post
    const blog = blogs?.find((blog) => blog._id === postId);
    setSelectedBlog(blog);

    if (setValue === "edit") {
      setModalShow(true);
    } else if (setValue === "delete") {
      setAction(true);
    }
  };

  // delete blog post
  const handleDelete = async (e) => {
    e.preventDefault();
    
    await fetch(`http://localhost:3030/api/blog/posts/${actionId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch(fetchBlogPosts());
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
                      <div>
                        <BocButton
                          margin="0 4px"
                          bradius="8px"
                          bgcolor="#145098"
                          func={handleAction}
                          id={blog._id}
                        >
                          Edit
                        </BocButton>
                        <BocButton
                          margin="0 4px"
                          bradius="8px"
                          func={handleAction}
                          id={blog._id}
                        >
                          Delete
                        </BocButton>
                      </div>
                      {/* <select
                        name="action"
                        id={blog._id}
                        onChange={(e) => handleOptionChange(e)}
                      >
                        <option value="">Action</option>
                        <option value="edit" onClick={() => console.log("Post id", blog._id)}>
                          Edit
                        </option>
                        <option value="delete">
                          Delete
                        </option>
                      </select> */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      )}
      <EditBlogPage
        blog={selectedBlog}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <ActionNotification handleClose={() => setAction(false)} handleProceed={handleDelete} show={ action} />
    </>
  );
};

export default BlogsList;
