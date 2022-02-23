import React from 'react'
import Gallery from './Gallery';
import data from "../data";
const Slider = () => {
  return (
    <div>
       <section className="pt-2 pb-2">
  <div className="container">
    <div className="row">
      <div className="col-6">
        {/* <h3 className="mb-3">Carousel cards title </h3> */}
      </div>
      <div className="col-6 text-right">
        <a className="btn btn-primary mb-3 mr-1" href="#carouselExampleIndicators2" role="button" data-slide="prev">
          <i className="fa fa-arrow-left" />
        </a>
        <a className="btn btn-primary mb-3 " href="#carouselExampleIndicators2" role="button" data-slide="next">
          <i className="fa fa-arrow-right" />
        </a>
      </div>
      <div className="col-12">
        <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
              {data.content1.map((ad) => {
                   return (
                <div className="col-md-3 mb-3">
               
                  <div className="card" style={{borderRadius:10}}>
                    <img className="img-fluid" alt="100%x280" src="https://cdn.shopify.com/s/files/1/0077/7918/8836/files/sweets.jpg?v=1631010220" />
                    <div className="card-body">
                    <center>
                      <h5 className="card-title">Buy One Get One Free!</h5>
                      </center>
                      <div className="dates">
                    <div className="start">
                      <strong>{ad.pro1}</strong>
                      {ad.date1}
                      <span />
                    </div>
                    <div className="ends">
                      <strong>{ad.pro2}</strong> {ad.date2}
                    </div>
                  </div>
                  <div className="stats">
                    <div>
                      <strong>{ad.pro3}</strong>
                      {ad.count}
                    </div>
                    <div>
                      <strong>{ad.pro4}</strong> {ad.count}
                    </div>
                    <div>
                      <strong>{ad.pro5}</strong>{ad.rate}
                    </div>
                  </div>

                    </div>
                    <div className="row" style={{ marginBottom: 10 }}>
                    <Gallery />
                  </div>
                  </div>
                   
                </div>
                );
            })}
                
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
              {data.content1.map((ad) => {
                   return (
                <div className="col-md-3 mb-3">
               
                  <div className="card">
                    <img className="img-fluid" alt="100%x280" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2DIr88J0HwOgCS4QzZ-YYyVdEtBp3fGAnMg&usqp=CAU" />
                    <div className="card-body">
                    <center>
                      <h5 className="card-title">Buy One Get One Free!</h5>
                      </center>
                    
                      <div className="dates">
                    <div className="start">
                      <strong>{ad.pro1}</strong>
                      {ad.date1}
                      <span />
                    </div>
                    <div className="ends">
                      <strong>{ad.pro2}</strong> {ad.date2}
                    </div>
                  </div>
                  <div className="stats">
                    <div>
                      <strong>{ad.pro3}</strong>
                      {ad.count}
                    </div>
                    <div>
                      <strong>{ad.pro4}</strong> {ad.count}
                    </div>
                    <div>
                      <strong>{ad.pro5}</strong>{ad.rate}
                    </div>
                  </div>

                    </div>
                   <div className="row" style={{ marginBottom: 10 }}>
                    <Gallery />
                  </div>
                  </div>
                   
                </div>
                );
            })}
              
              
              </div>
            
            </div>
            <div className="carousel-item">
              <div className="row">
              {data.content1.map((ad) => {
                   return (
                <div className="col-md-3 mb-3">
               
                  <div className="card">
                    <img className="img-fluid" alt="100%x280" src="https://static.toiimg.com/photo/msid-66476205/66476205.jpg?1460248" />
                    <div className="card-body">
                        <center>
                      <h5 className="card-title">Buy One Get One Free!</h5>
                      </center>
                     
                      <div className="dates">
                    <div className="start">
                      <strong>{ad.pro1}</strong>
                      {ad.date1}
                      <span />
                    </div>
                    <div className="ends">
                      <strong>{ad.pro2}</strong> {ad.date2}
                    </div>
                  </div>
                  <div className="stats">
                    <div>
                      <strong>{ad.pro3}</strong>
                      {ad.count}
                    </div>
                    <div>
                      <strong>{ad.pro4}</strong> {ad.count}
                    </div>
                    <div>
                      <strong>{ad.pro5}</strong>{ad.rate}
                    </div>
                  </div>

                    </div>
                    <div className="row" style={{ marginBottom: 10 }}>
                    <Gallery />
                  </div>
                  </div>
                   
                </div>
                );
            })}
              
             
              
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Slider