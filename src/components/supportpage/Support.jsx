import { useState } from "react";
import data from "../../mockdatabase/faqs.json";
import Accordion from "react-bootstrap/Accordion";
import Header from "../shared/Header";
import Headline from "../shared/Headline";
import SearchBox from "./SearchBox";
import "./Support.css";
// import SupportTab from "./SupportTab";

const Support = () => {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      padding: "2rem",
      backgroundColor: "#145088",
    },
  };

  const faqs = data.faqs;
  const currentFaqs = faqs.filter((faq) => faq.category === "deposit");
  // component state
  const [firstFaqs, setFirstFaqs] = useState(currentFaqs);
  const [searchTerm, setSearchTerm] = useState("");
  
  //    create object of faqs, key is category and value is array of object question and answer
  const faqsByCategory = faqs.reduce((acc, faq) => {
    if (!acc[faq.category]) {
      acc[faq.category] = [];
    }
    acc[faq.category].push(faq);
    return acc;
  }, {});

  const categories = Object.keys(faqsByCategory);

  // handle faq data change on category btn click
  const handleFaqChange = (category) => {
    const currentFaqs = faqsByCategory[category];
    setFirstFaqs(currentFaqs);
    // add active class to the clicked btn
    const btns = document.querySelectorAll(".CategoryBtn");
    btns.forEach((btn) => {
      btn.classList.remove("ActiveCategory");
    }
    );
    const currentBtn = document.querySelector(`#${category}`);
    currentBtn.classList.add("ActiveCategory");
    console.log(currentBtn);

  };

  // handle search term change
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const currentFaqs = faqs.filter((faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFirstFaqs(currentFaqs);
  };

  return (
    <>
      <Header imgurl="public/images/support.png" />
      <div className="container-fluid" style={styles.container}>
        <SearchBox func={handleSearch} />
      </div>

      <div className="container-fluid" style={styles.container}>
        {/* knowledge base section */}
        <div className="container KnowledgeBase">
          <Headline color="#fff" align="left" text="Knowledge Base" />
          {/* wiki categories list */}
          <div className="row">
            {categories.map((category) => (
              <div className="col-md-2 col-sm-4 my-1" key={category}>
                <button
                  onClick={() => handleFaqChange(category)}
                  className="btn btn-outline-light CategoryBtn"
                  id={category}
                >
                  {category.toUpperCase()}
                </button>
              </div>
            ))}
          </div>
          <div className="Divider"></div>
          {firstFaqs.length === 0 ? (
            <p>No results found</p>
          ) : (
            <div>
              {firstFaqs.map(({ id, question, answer }) => (
                <Accordion key={id} defaultActiveKey="0" flush>
                  <Accordion.Item eventKey={id} className="AccordionItem">
                    <Accordion.Header>{question}</Accordion.Header>
                    <Accordion.Body>{answer}</Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              ))}
            </div>
          )}
        </div>
        {/* end of knowledge base section */}
      </div>
    </>
  );
};

export default Support;
