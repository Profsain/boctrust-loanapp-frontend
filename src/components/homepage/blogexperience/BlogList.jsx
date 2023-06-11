import BlogCard from "./BlogCard";
import "./BlogExperience.css";

const BlogList = () => {
  return (
    <div className="container BlogContainer">
      <h3>Experience our Blog</h3>
      <p>Our mission is to deliver reliable, latest news and opinions.</p>

      <div className="container">
        <div className="row text-center">
          <BlogCard title="Personal Finance Resources" blogImg="https://shorturl.at/cIJUY" />

          <BlogCard title="SME Advisory Resources" blogImg="https://shorturl.at/inGR1" />
          {/* {blogData.map((blog) => (
            <div className="col-md-6" key={blog.id}>
              <BlogCard title={blog.title} blogImg={blog.blogImg} />
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
}

export default BlogList;
