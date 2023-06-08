import { useState, useEffect } from "react";
// animation library
import AOS from "aos";
import "aos/dist/aos.css";
import data from "../../mockdatabase/products.json";
import Headline from "../shared/Headline";
import Header from "../shared/Header";
import TopCard from "../aboutpage/TopCard";
import ProductBtn from "../ourproductpage/ProductBtn";
import "../ourproductpage/OurProduct.css";
import ProductImage from "./ProductImage";
import ProductListCard from "./ProductListCard";

const OurProduct = () => {
  // data from json file
  const products = data.products;
  const savingsData = data.products.filter(
    (product) => product.category === "savings"
  );
  // component state
  const [image, setImage] = useState(savingsData[0].image);
  const [productName, setProductName] = useState(savingsData[0].productName);
  const [description, setDescription] = useState(savingsData[0].description);
  const [benefits, setBenefits] = useState(savingsData[0].benefits);
  const [features, setFeatures] = useState(savingsData[0].features);

  // create object of products, key is category and value is array of products
  const productsByCategory = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});
  
  // function to handle button click and change image, description, benefits and features
  const changeProduct = (id) => {
    const product = products.find((product) => product.id === id);
    setImage(product.image);
    setProductName(product.productName);
    setDescription(product.description);
    setBenefits(product.benefits);
    setFeatures(product.features);
  };

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <>
      <Header imgurl="public/images/ourproduct.png" />
      <div className="container">
        <div className="row">
          {/* left side container */}
          <div className="col-md-8 col-sm-12">
            {/* top row container */}
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <div className="ImgDescription">
                  <Headline
                    color="#593d0e"
                    spacer="0 0 68px 0"
                    text={productName}
                  />
                </div>
                <ProductImage url={image} altText={productName} />
              </div>
              <div className="col-md-6 col-sm-12">
                <TopCard
                  size="18px"
                  align="left"
                  spacer={"28px 0"}
                  text={description}
                />
              </div>
            </div>

            {/* bottom row container */}
            <div className="row" data-aos="fade-up">
              <div className="col-md-6 col-sm-12 DetailsCard">
                <Headline
                  color="#593d0e"
                  size="18px"
                  spacer="18px"
                  align="left"
                  text="Benefits"
                />
                {benefits.map((benefit) => (
                  <ProductListCard key={benefit} li={benefit} />
                ))}
              </div>
              <div className="col-md-6 col-sm-12 DetailsCard">
                <Headline
                  color="#593d0e"
                  size="18px"
                  spacer="18px"
                  align="left"
                  text="Features"
                />
                {features.map((feature) => (
                  <ProductListCard key={feature} li={feature} />
                ))}
              </div>
            </div>
          </div>

          {/* right side container */}
          <div className="col-md-4 col-sm-12 Category">
            {Object.keys(productsByCategory).map((category) => {
              return (
                <div key={category} data-aos="fade-up">
                  <Headline
                    color="#fff"
                    spacer="8px 0"
                    text={category.toUpperCase()}
                  />
                  <div className="BtnContainer">
                    {productsByCategory[category].map(({ id, productName }) => (
                      <ProductBtn
                        key={id}
                        text={productName}
                        func={() => changeProduct(id)}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurProduct;
