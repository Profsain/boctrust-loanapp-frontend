
import { Row } from "react-bootstrap";
import Header from "../shared/Header";
import BlogCard from "./BlogCard";
import blogdata from "../../mockdatabase/blogs.json";

const Blog = () => {
  const blogs = blogdata.blogs;

  return (
    <>
      <Header imgurl="public/images/blogs.png" />
      <div className="container-fluid">
        <div className="container my-5">
          <Row xs={1} md={2} className="gap-4">
            {blogs.map((blog) => (
              <BlogCard
                key={blog.id}
                title={blog.title}
                //  shorten description
                content={blog.content.substring(0, 300) + "..."}
                img={blog.image}
              />
            ))}
          </Row>
        </div>
      </div>
    </>
  );
};

export default Blog;
