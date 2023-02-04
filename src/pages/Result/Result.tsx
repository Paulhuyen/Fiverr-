import React from 'react'

export default function Result() {
  return (
    <div className='result-wrapper '>
        <div className="container">
           <div className="search-results">
              <div className="name-search">
                <h5>Result for "..."</h5>
                <br />
              </div>
              <div className="card-result">
                <div className="card-item">
                    <div className="card-img">
                        <img src="https://fiverrnew.cybersoft.edu.vn/images/cv1.jpg" alt="" />
                    </div>
                    <div className="card-body">
                        <div className='author'>
                           <img src="https://sc04.alicdn.com/kf/Hc3e61591078043e09dba7808a6be5d21n.jpg" alt="author" />
                           <div className="name">
                            <h6 className='fontW_6'>admin</h6>
                            <p className='lever'>lever 2 seller</p>
                           </div>
                        </div>
                        <div className="name-card">
                            <a href="#" className='fontW_6'>I will design an outstanding logo
                            I will design an outstanding logo
                            I will design an outstanding logo</a>
                        </div>
                        <div className="rating">
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <span className='start'>2</span>
                          <p>( 150 )</p>
                        </div>
                    </div>
                    <div className="card-footer d-flex">
                      <i className="fa fa-heart" aria-hidden="true"></i>
                      <div className="price d-flex">
                        <p className='starting'>STARTING AT  </p>
                        <span className='price_inner fontW_6'> US$32</span>
                      </div>
                    </div>
                </div>

              </div>
           </div>
        </div>

    </div>
  )
}
