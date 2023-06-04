import BlogCard from "./BlogCard";
import "./BlogExperience.css";

const BlogList = () => {
  const blogData = [
    {
      id: 1,
      title: "Budget your way to success",
      blogImg: "https://shorturl.at/cIJUY",
    },
    {
      id: 2,
      title: "How to save money",
      blogImg: "https://shorturl.at/kZ124",
    },
    {
      id: 3,
      title: "How to invest in the stock market",
      blogImg: "https://shorturl.at/inGR1",
    },
  ];

  return (
    <div className="container BlogContainer">
      <h3>Experience our Blog</h3>
      <p>Our mission is to deliver reliable, latest news and opinions.</p>

      <div className="container">
        <div className="row text-center">
          {blogData.map((blog) => (
            <div className="col-md-4 col-sm-12" key={blog.id}>
              <BlogCard title={blog.title} blogImg={blog.blogImg} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogList;
