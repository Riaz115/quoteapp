import React, { useState } from "react";
import "./Quotes.css";
import twitter from "../assests/twitter.png";

function Quotes() {
  //this is for the quote text
  const [quoteText, setQuoteText] = useState("");

  // this is for he author name
  const [authorName, setAuthorName] = useState("");

  //this is for the generate random number
  const genRandomNum = () => {
    let randomNum = Math.floor(Math.random() * 10);
    return randomNum;
  };

  // this is for the twitter post
  let tweetPost = () => {
    let myPost = `https://twitter.com/intent/tweet?text=${quoteText}${authorName}`;
    window.open(myPost);
  };

  // this is api for quotes
  const myApi = "https://type.fit/api/quotes";

  // this is function for fetch and get api
  const forApi = async () => {
    let response = await fetch(myApi);
    let data = await response.json();
    setQuoteText(data[genRandomNum()].text);
    if (data[genRandomNum()].author === null) {
      setAuthorName("Unknown");
    } else {
      setAuthorName(data[genRandomNum()].author);
    }
  };

  // this is function for handle buttn clink
  const HandleButton = () => {
    console.log(" i am button");
    forApi();
  };

  return (
    <>
      <section
        className="for-all d-flex align-items-center justify-content-center"
        onLoad={forApi}
        data-aos="zoom-up"
        data-aos-duration="1000"
      >
        <div
          className="big-box d-flex align-items-center justify-content-center"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <div className="small-box d-flex align-items-center justify-content-center px-4 pt-1">
            <div className="quote position-relative">
              <a href="#" className="icon-box" onClick={tweetPost}>
                <img
                  src={twitter}
                  alt="twitter"
                  className="img-fluid for-image"
                />
              </a>

              <h3 className="text-capitalize for-text">{quoteText}</h3>
              <div className="author mt-5 text-end">
                <h4>{authorName}</h4>
              </div>
              <div className="developer text-capitalize text-start mt-4 mt-md-2">
                developed by m.riaz ahmad -------
              </div>
              <div className="for-btn">
                <button
                  className="px-2 py-1 text-capitalize"
                  onClick={HandleButton}
                >
                  click for new quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Quotes;
