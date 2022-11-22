
import React from "react";
import food from "../../../src/Images/f1_180x.png";
function Category() {
  const loop = [1,2,3,4,5,6];

  return (
    <section id="category">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="txt_title">Categories</div>
          </div>
        </div>

              <div class="row">
                <div className="col-md-2 col-lg-2 col-6">
                  <div className="category-item">
                    <img src={food} className="img-fluid" />
                  </div>
                </div>
                <div className="col-md-2 col-lg-2 col-6">
                  <div className="category-item">
                    <img src={food} className="img-fluid" />
                  </div>
                </div>
                <div className="col-md-2 col-lg-2 col-6">
                  <div className="category-item">
                    <img src={food} className="img-fluid" />
                  </div>
                </div>
                <div className="col-md-2 col-lg-2 col-6">
                  <div className="category-item">
                    <img src={food} className="img-fluid" />
                  </div>
                </div>
                <div className="col-md-2 col-lg-2 col-6">
                  <div className="category-item">
                    <img src={food} className="img-fluid" />
                  </div>
                </div>
                <div className="col-md-2 col-lg-2 col-6">
                  <div className="category-item">
                    <img src={food} className="img-fluid" />
                  </div>
                </div>
              </div>

              <div class="row my-2">
                {loop.map((item,index) => (
                    <div className="col-md-2 col-lg-2 col-6">
                      <div className="category-item">
                        <img src={food} className="img-fluid" />
                      </div>
                    </div>
                ))}
              </div>
              
        

      </div>
    </section>
  )
}

export default Category;