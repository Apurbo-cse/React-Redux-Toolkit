import React from "react";
import { Link } from "react-router-dom";
import Pic1 from "../../assets/images/3.png";

const Post = () => {
  return (
    <>
      <div className="container">
        <div className="row my-3">
          <div className="col-6 col-md-4 col-lg-3 mb-3">
            <div className="card border-0 shadow text-center  ">
              <img src={Pic1} className="card-img-top p-2" alt={Pic1} />
              <div className="card-body">
                <h5 className="card-title mb-0">
                  {/* {props.title.substring(0, 20)} */}
                  ... Lorem ipsum
                </h5>
                <p className="card-text lead fw-bold">10</p>
                <Link to="#" className="btn btn-outline-dark">
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
