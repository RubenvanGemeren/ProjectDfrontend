// <!doctype html>
// <html lang="en">
//   <head>
//     <title>AddItemToOrder </title>
//     <!-- Required meta tags -->
//     <meta charset="utf-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

//     <!-- Bootstrap CSS -->
//     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
//   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
//   <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
//     <style>

  //       body{
  //     background-color: #e7d58d;
  //   }
  //       table {
  //     border: rgb(117, 98, 44) solid 2px !important;
  //   }
  //       img {
  //   max-width: 100%;
  //   }
  //       .slide-wrapper {
  //   text-align: center;
  //   }
  //     .jumbotron{
  //       background-color: #e7d58d;
  //       border: solid;
  //       border-color: #96874e;
  //   }
  //     .carousel-inner > .item > img,
  //     .carousel-inner > .item > a > img {
  //       width: 70%;
  //       margin-bottom: 50px;
  // }

  //     .carousel-indicators{
  //       bottom: -50px;
  // }

  //     .modal-backdrop{
  //       background-color: #e5ddba;
  //     }
  
//     </style>

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component{
  constructor(){
    super();
  }

  componentWillMount(){
    window.scrollTo(0,0);
  }

  render(){
    return(
      <div>
          <div class="container">
              <div class="page-header">
                  <Link to="/tafel">
                      <button type="button" class="btn"><span class="glyphicon glyphicon-chevron-left"></span>Terug</button>
                  </Link>
                  <h1 class="text-center">Tafel 1</h1>
              </div>
          </div>


          <div class="container">
              <div class="search" role="search" style={{padding: "1%"}}>
                  <input type="text" class="form-control" placeholder="Search" />
              </div>
              <div class="jumbotron">
                      <div id="myCarousel" class="carousel slide" data-ride="carousel">
                          <ol class="carousel-indicators">
                              <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                              <li data-target="#myCarousel" data-slide-to="1"></li>
                              <li data-target="#myCarousel" data-slide-to="2"></li>
                              <li data-target="#myCarousel" data-slide-to="3"></li>
                          </ol>
                    
                          {/* Wrapper for slides */}
                          <div class="carousel-inner" role="listbox">
                    
                              <div class="item active">
                                  <div class="col-lg-4 col-md-4 col-sm-6">
                                      <figure class="figure">
                                          <button class="btn btn-link" style={{color: "black"}} data-toggle="modal" data-target="#myModal"><img src="20150915-_Upland_Burger_3.0.0.1489236245.0.webp" class="figure-img img-fluid rounded" alt="" />
                                          <figcaption class="figure-caption">Burger met friet</figcaption></button>
                                      </figure>
                                  </div>

                                  <div class="col-lg-4 col-md-4 col-sm-6">
                                      <figure class="figure">
                                          <button class="btn btn-link" style={{color: "black"}} data-toggle="modal" data-target="#myModal"><img src="20150915-_Upland_Burger_3.0.0.1489236245.0.webp" class="figure-img img-fluid rounded" alt="" />
                                          <figcaption class="figure-caption">Burger met friet</figcaption></button>
                                      </figure>
                                  </div>

                                  <div class="col-lg-4 col-md-4 col-sm-6">
                                      <figure class="figure">
                                          <button class="btn btn-link" style={{color: "black"}} data-toggle="modal" data-target="#myModal"><img src="20150915-_Upland_Burger_3.0.0.1489236245.0.webp" class="figure-img img-fluid rounded" alt="" />
                                          <figcaption class="figure-caption">Burger met friet</figcaption></button>
                                      </figure>
                                  </div>
                                        <div class="col-lg-4 col-md-4 col-sm-6">
                                            <figure class="figure">
                                                <button class="btn btn-link" style={{color: "black"}} data-toggle="modal" data-target="#myModal"><img src="20150915-_Upland_Burger_3.0.0.1489236245.0.webp" class="figure-img img-fluid rounded" alt="" />
                                                  <figcaption class="figure-caption">Burger met friet</figcaption></button>
                                            </figure>
                                          </div>
                                          <div class="col-lg-4 col-md-4 col-sm-6">
                                              <figure class="figure">
                                                  <button class="btn btn-link" style={{color: "black"}} data-toggle="modal" data-target="#myModal"><img src="20150915-_Upland_Burger_3.0.0.1489236245.0.webp" class="figure-img img-fluid rounded" alt="" />
                                                    <figcaption class="figure-caption">Burger met friet</figcaption></button>
                                              </figure>
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-6">
                                                <figure class="figure">
                                                    <button class="btn btn-link" style={{color: "black"}} data-toggle="modal" data-target="#myModal"><img src="20150915-_Upland_Burger_3.0.0.1489236245.0.webp" class="figure-img img-fluid rounded" alt="" />
                                                      <figcaption class="figure-caption">Burger met friet</figcaption></button>
                                                </figure>
                                              </div>
                                              <div class="col-lg-4 col-md-4 col-sm-6">
                                                  <figure class="figure">
                                                      <button class="btn btn-link" style={{color: "black"}} data-toggle="modal" data-target="#myModal"><img src="20150915-_Upland_Burger_3.0.0.1489236245.0.webp" class="figure-img img-fluid rounded" alt="" />
                                                        <figcaption class="figure-caption">Burger met friet</figcaption></button>
                                                  </figure>
                                                </div>
                                                <div class="col-lg-4 col-md-4 col-sm-6">
                                                    <figure class="figure">
                                                        <button class="btn btn-link" style={{color: "black"}} data-toggle="modal" data-target="#myModal"><img src="20150915-_Upland_Burger_3.0.0.1489236245.0.webp" class="figure-img img-fluid rounded" alt="" />
                                                          <figcaption class="figure-caption">Burger met friet</figcaption></button>
                                                    </figure>
                                                  </div>
                                                  <div class="col-lg-4 col-md-4 col-sm-6">
                                                      <figure class="figure">
                                                          <button class="btn btn-link" style={{color: "black"}} data-toggle="modal" data-target="#myModal"><img src="20150915-_Upland_Burger_3.0.0.1489236245.0.webp" class="figure-img img-fluid rounded" alt="" />
                                                            <figcaption class="figure-caption">Burger met friet</figcaption></button>
                                                      </figure>
                                                    </div>

                              </div>
                      
                            <div class="item">
                                <div class="col-lg-4 col-md-4 col-sm-6">
                                    <figure class="figure">
                                      <button class="btn btn-link" style={{color: "black"}} data-toggle="modal" data-target="#myModal"><img src="20150915-_Upland_Burger_3.0.0.1489236245.0.webp" class="figure-img img-fluid rounded" alt="" />
                                        <figcaption class="figure-caption">Burger met friet</figcaption></button>
                                    </figure>
                                  </div>
                                  <div class="col-lg-4 col-md-4 col-sm-6">
                                      <figure class="figure">
                                          <button class="btn btn-link" style={{color: "black"}} data-toggle="modal" data-target="#myModal"><img src="20150915-_Upland_Burger_3.0.0.1489236245.0.webp" class="figure-img img-fluid rounded" alt="" />
                                            <figcaption class="figure-caption">Burger met friet</figcaption></button>
                                      </figure>
                                    </div>
                                    <div class="col-lg-4 col-md-4 col-sm-6">
                                        <figure class="figure">
                                            <button class="btn btn-link" style={{color: "black"}} data-toggle="modal" data-target="#myModal"><img src="20150915-_Upland_Burger_3.0.0.1489236245.0.webp" class="figure-img img-fluid rounded" alt="" />
                                              <figcaption class="figure-caption">Burger met friet</figcaption></button>
                                        </figure>
                                      </div>
                                      <div class="col-lg-4 col-md-4 col-sm-6">
                                          <figure class="figure">
                                              <button class="btn btn-link" style={{color: "black"}} data-toggle="modal" data-target="#myModal"><img src="20150915-_Upland_Burger_3.0.0.1489236245.0.webp" class="figure-img img-fluid rounded" alt="" />
                                                <figcaption class="figure-caption">Burger met friet</figcaption></button>
                                          </figure>
                                        </div>
                                        <div class="col-lg-4 col-md-4 col-sm-6">
                                            <figure class="figure">
                                                <button class="btn btn-link" style={{color: "black"}} data-toggle="modal" data-target="#myModal"><img src="20150915-_Upland_Burger_3.0.0.1489236245.0.webp" class="figure-img img-fluid rounded" alt="" />
                                                  <figcaption class="figure-caption">Burger met friet</figcaption></button>
                                            </figure>
                                          </div>
                                          <div class="col-lg-4 col-md-4 col-sm-6">
                                              <figure class="figure">
                                                  <button class="btn btn-link" style={{color: "black"}} data-toggle="modal" data-target="#myModal"><img src="20150915-_Upland_Burger_3.0.0.1489236245.0.webp" class="figure-img img-fluid rounded" alt="" />
                                                    <figcaption class="figure-caption">Burger met friet</figcaption></button>
                                              </figure>
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-6">
                                                <figure class="figure">
                                                    <button class="btn btn-link" style={{color: "black"}} data-toggle="modal" data-target="#myModal"><img src="20150915-_Upland_Burger_3.0.0.1489236245.0.webp" class="figure-img img-fluid rounded" alt="" />
                                                      <figcaption class="figure-caption">Burger met friet</figcaption></button>
                                                </figure>
                                              </div>
                                              <div class="col-lg-4 col-md-4 col-sm-6">
                                                  <figure class="figure">
                                                      <button class="btn btn-link" style={{color: "black"}} data-toggle="modal" data-target="#myModal"><img src="20150915-_Upland_Burger_3.0.0.1489236245.0.webp" class="figure-img img-fluid rounded" alt="" />
                                                        <figcaption class="figure-caption">Burger met friet</figcaption></button>
                                                  </figure>
                                                </div>
                                                <div class="col-lg-4 col-md-4 col-sm-6">
                                                    <figure class="figure">
                                                        <button class="btn btn-link" style={{color: "black"}} data-toggle="modal" data-target="#myModal"><img src="20150915-_Upland_Burger_3.0.0.1489236245.0.webp" class="figure-img img-fluid rounded" alt="" />
                                                          <figcaption class="figure-caption">Burger met friet</figcaption></button>
                                                    </figure>
                                                  </div>

                            </div>
                          
                            <div class="item">
                                <div class="col-lg-4 col-md-4 col-sm-6">
                                    <figure class="figure">
                                      <button class="btn btn-link" style={{color: "black"}} data-toggle="modal" data-target="#myModal"><img src="20150915-_Upland_Burger_3.0.0.1489236245.0.webp" class="figure-img img-fluid rounded" alt="" />
                                        <figcaption class="figure-caption">Burger met friet</figcaption></button>
                                    </figure>
                                  </div>
                                  <div class="col-lg-4 col-md-4 col-sm-6">
                                      <figure class="figure">
                                          <button class="btn btn-link" style={{color: "black"}} data-toggle="modal" data-target="#myModal"><img src="20150915-_Upland_Burger_3.0.0.1489236245.0.webp" class="figure-img img-fluid rounded" alt="" />
                                            <figcaption class="figure-caption">Burger met friet</figcaption></button>
                                      </figure>
                                    </div>
                                    <div class="col-lg-4 col-md-4 col-sm-6">
                                        <figure class="figure">
                                            <button class="btn btn-link" style={{color: "black"}} data-toggle="modal" data-target="#myModal"><img src="20150915-_Upland_Burger_3.0.0.1489236245.0.webp" class="figure-img img-fluid rounded" alt="" />
                                              <figcaption class="figure-caption">Burger met friet</figcaption></button>
                                        </figure>
                                      </div>
                                      <div class="col-lg-4 col-md-4 col-sm-6">
                                          <figure class="figure">
                                              <button class="btn btn-link" style={{color: "black"}} data-toggle="modal" data-target="#myModal"><img src="20150915-_Upland_Burger_3.0.0.1489236245.0.webp" class="figure-img img-fluid rounded" alt="" />
                                                <figcaption class="figure-caption">Burger met friet</figcaption></button>
                                          </figure>
                                        </div>
                                        <div class="col-lg-4 col-md-4 col-sm-6">
                                            <figure class="figure">
                                                <button class="btn btn-link" style={{color: "black"}} data-toggle="modal" data-target="#myModal"><img src="20150915-_Upland_Burger_3.0.0.1489236245.0.webp" class="figure-img img-fluid rounded" alt="" />
                                                  <figcaption class="figure-caption">Burger met friet</figcaption></button>
                                            </figure>
                                          </div>
                                          <div class="col-lg-4 col-md-4 col-sm-6">
                                              <figure class="figure">
                                                  <button class="btn btn-link" style={{color: "black"}} data-toggle="modal" data-target="#myModal"><img src="20150915-_Upland_Burger_3.0.0.1489236245.0.webp" class="figure-img img-fluid rounded" alt="" />
                                                    <figcaption class="figure-caption">Burger met friet</figcaption></button>
                                              </figure>
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-6">
                                                <figure class="figure">
                                                    <button class="btn btn-link" style={{color: "black"}} data-toggle="modal" data-target="#myModal"><img src="20150915-_Upland_Burger_3.0.0.1489236245.0.webp" class="figure-img img-fluid rounded" alt="" />
                                                      <figcaption class="figure-caption">Burger met friet</figcaption></button>
                                                </figure>
                                              </div>
                                              <div class="col-lg-4 col-md-4 col-sm-6">
                                                  <figure class="figure">
                                                      <button class="btn btn-link" style={{color: "black"}} data-toggle="modal" data-target="#myModal"><img src="20150915-_Upland_Burger_3.0.0.1489236245.0.webp" class="figure-img img-fluid rounded" alt="" />
                                                        <figcaption class="figure-caption">Burger met friet</figcaption></button>
                                                  </figure>
                                                </div>
                                                <div class="col-lg-4 col-md-4 col-sm-6">
                                                    <figure class="figure">
                                                        <button class="btn btn-link" style={{color: "black"}} data-toggle="modal" data-target="#myModal"><img src="20150915-_Upland_Burger_3.0.0.1489236245.0.webp" class="figure-img img-fluid rounded" alt="" />
                                                          <figcaption class="figure-caption">Burger met friet</figcaption></button>
                                                    </figure>
                                                  </div>

                            </div>
                      
                            <div class="item">
                                <div class="col-lg-4 col-md-4 col-sm-6">
                                    <figure class="figure">
                                      <button class="btn btn-link" style={{color: "black"}} data-toggle="modal" data-target="#myModal"><img src="20150915-_Upland_Burger_3.0.0.1489236245.0.webp" class="figure-img img-fluid rounded" alt="" />
                                        <figcaption class="figure-caption">Burger met friet</figcaption></button>
                                    </figure>
                                  </div>
                                  <div class="col-lg-4 col-md-4 col-sm-6">
                                      <figure class="figure">
                                          <button class="btn btn-link" style={{color: "black"}} data-toggle="modal" data-target="#myModal"><img src="20150915-_Upland_Burger_3.0.0.1489236245.0.webp" class="figure-img img-fluid rounded" alt="" />
                                            <figcaption class="figure-caption">Burger met friet</figcaption></button>
                                      </figure>
                                    </div>
                                    <div class="col-lg-4 col-md-4 col-sm-6">
                                        <figure class="figure">
                                            <button class="btn btn-link" style={{color: "black"}} data-toggle="modal" data-target="#myModal"><img src="20150915-_Upland_Burger_3.0.0.1489236245.0.webp" class="figure-img img-fluid rounded" alt="" />
                                              <figcaption class="figure-caption">Burger met friet</figcaption></button>
                                        </figure>
                                      </div>
                                      <div class="col-lg-4 col-md-4 col-sm-6">
                                          <figure class="figure">
                                              <button class="btn btn-link" style={{color: "black"}} data-toggle="modal" data-target="#myModal"><img src="20150915-_Upland_Burger_3.0.0.1489236245.0.webp" class="figure-img img-fluid rounded" alt="" />
                                                <figcaption class="figure-caption">Burger met friet</figcaption></button>
                                          </figure>
                                        </div>
                                        <div class="col-lg-4 col-md-4 col-sm-6">
                                            <figure class="figure">
                                                <button class="btn btn-link" style={{color: "black"}} data-toggle="modal" data-target="#myModal"><img src="20150915-_Upland_Burger_3.0.0.1489236245.0.webp" class="figure-img img-fluid rounded" alt="" />
                                                  <figcaption class="figure-caption">Burger met friet</figcaption></button>
                                            </figure>
                                          </div>
                                          <div class="col-lg-4 col-md-4 col-sm-6">
                                              <figure class="figure">
                                                  <button class="btn btn-link" style={{color: "black"}} data-toggle="modal" data-target="#myModal"><img src="20150915-_Upland_Burger_3.0.0.1489236245.0.webp" class="figure-img img-fluid rounded" alt="" />
                                                    <figcaption class="figure-caption">Burger met friet</figcaption></button>
                                              </figure>
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-6">
                                                <figure class="figure">
                                                    <button class="btn btn-link" style={{color: "black"}} data-toggle="modal" data-target="#myModal"><img src="20150915-_Upland_Burger_3.0.0.1489236245.0.webp" class="figure-img img-fluid rounded" alt="" />
                                                      <figcaption class="figure-caption">Burger met friet</figcaption></button>
                                                </figure>
                                            </div>
                                              <div class="col-lg-4 col-md-4 col-sm-6">
                                                  <figure class="figure">
                                                      <button class="btn btn-link" style={{color: "black"}} data-toggle="modal" data-target="#myModal"><img src="20150915-_Upland_Burger_3.0.0.1489236245.0.webp" class="figure-img img-fluid rounded" alt="" />
                                                        <figcaption class="figure-caption">Burger met friet</figcaption></button>
                                                  </figure>
                                                </div>
                                                <div class="col-lg-4 col-md-4 col-sm-6">
                                                    <figure class="figure">
                                                        <button class="btn btn-link" style={{color: "black"}} data-toggle="modal" data-target="#myModal"><img src="20150915-_Upland_Burger_3.0.0.1489236245.0.webp" class="figure-img img-fluid rounded" alt="" />
                                                          <figcaption class="figure-caption">Burger met friet</figcaption></button>
                                                    </figure>
                                                </div>
                                              </div>

                        </div>
                  
                              <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                                  <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                                  <span class="sr-only">Previous</span>
                                </a>
                                <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                                  <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                                  <span class="sr-only">Next</span>
                                </a>
                    </div>


          <div class="modal fade" id="myModal" role="dialog">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">Gerecht 1</h4>
                  </div>
                  <div class="modal-body">
                    <img src="20150915-_Upland_Burger_3.0.0.1489236245.0.webp" alt="" />
                    <p>Een heerlijk gerecht met een burger en wat friet</p>
                    <p>Ingredient 1</p>
                    <p>Ingredient 2</p>
                    <p>Ingredient 3</p>
                    <p>Ingredient 4</p>
                    <p>Ingredient 5</p>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Voeg toe aan bestelling</button>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
      </div>

      <footer class="page-footer blue pt-4" style={{paddingTop: "10%"}}>
        <div class="container">
          <div class="col-lg-12" style={{textAlign: "center"}}>
              <button class="btn btn-default btn-lg" style={{backgroundColor: "rgb(161, 137, 74)"}} >Klaar!</button>
          </div>
        </div>
      </footer>
    </div>
    )
  }
}

export default Menu;