import React, { useState } from "react";
import ImageCard from "./ImageCard";
import images from "./images.json";
import Row from "react-bootstrap/Row";

function Images() {
  let [totalLikes, setTotalLikes] = useState(0);

  const summationOfImagesLikes = () => {
    setTotalLikes(totalLikes + 1);
  };
  return (
    <>
      <h5 style={{margin:'20px',"margin-buttom":"50px",}}>summation of all images likes : {totalLikes}</h5>
      <Row xs={1} md={3} className="g-4" style={{marginLeft:'2rem'}}>
        {images.map((image) => {
          return (
            <div>
              <ImageCard
                image_url={image.image_url}
                _id={image._id}
                title={image.title}
                likes={image.likes}
                sumLikes={summationOfImagesLikes}
              />
            </div>
          );
        })}
      </Row>
    </>
  );
}

export default Images;