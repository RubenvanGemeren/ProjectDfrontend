// <!doctype html>
// <html lang="en">
//   <head>
//     <title>Tafel 1</title>
//     <!-- Required meta tags -->
//     <meta charset="utf-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

//     <!-- Bootstrap CSS -->
//     <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
//     <style>

//         body{
//       background-color: #e7d58d;
//     }
//         #containerTable{
//         padding: 0%;
//         border:  rgb(117, 98, 44) solid 2px !important;
//     }
//         #containerTafelInfo{
//         padding: 1%;
//     }
//         #AddItem{
//         padding-bottom: 2%;
//     }
//     </style>
// </head>

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Table from './table';
import './css/tafel.css';

class Tafel extends Component{

  constructor(){
    super();
  }

  componentDidMount(){
    window.scrollTo(0,0)
  }

  render(){
    return(
      <div>
        <div class="container" id="containerTafelInfo">
          <div class="page-header">
              <Link to="/layout">
                <button type="button" class="btn"><span class="glyphicon glyphicon-chevron-left"></span>Terug</button>
              </Link>
              <h1 class="text-center">Tafel 1</h1>
          </div>
          <div class="row">
              <div class="col-lg-5 col-md-6 col-sm-6 col-ex-12 col-lg-offset-1">
                  <h3>Status:</h3>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6 col-ex-12 col-lg-offset-3">
                    <h3><span class="glyphicon glyphicon-pencil"></span> &nbsp; Not in use &nbsp; <span class="glyphicon glyphicon-ok-sign" style={{color: "chartreuse"}}></span></h3>
                </div>


                <div class="col-lg-5 col-md-6 col-sm-6 col-ex-12 col-lg-offset-1">
                    <h3>Tijd verstreken:</h3>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-ex-12 col-lg-offset-3">
                      <h3> &nbsp; &nbsp; &nbsp; XX:XX:XX</h3>
                  </div>

                <div class="col-lg-5 col-md-6 col-sm-6 col-ex-12 col-lg-offset-1">
                    <h3>Bezoekers:</h3>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-ex-12 col-lg-offset-3">
                    <h3><span class="glyphicon glyphicon-pencil"></span> &nbsp; 0</h3>
                </div> 
          </div>
          
      </div>
            <div class="container" id="containerTable">

                            <div class="row">
                              <div class="col-lg-12">
                                <table class="table table-hover">
                                  <thead class="thead-light">
                                    <tr style={{backgroundColor: "rgb(161, 137, 74)"}}>
                                      <th scope="col" class="col-lg-7"><h2>Item</h2></th>
                                      <th scope="col" class="col-lg-2 text-center"><h3>Aantal</h3></th>
                                      <th scope="col" class="col-lg-1 text-center"><h3>Prijs</h3></th>
                                      <th scope="col" class="col-lg-1"></th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <th scope="row"><h3>Gerecht 1</h3></th>
                                      <td class="text-center"><h3>1</h3></td>
                                      <td class="text-center"><h3>12,00;</h3></td>
                                      <td class="text-center"><button class="btn btn-link btn-lg" style={{color: "black"}}><span class="glyphicon glyphicon-trash"></span></button></td>
                                    </tr>
                                    <tr>
                                      <th scope="row"><h3>Gerecht 2</h3></th>
                                      <td class="text-center"><h3>2</h3></td>
                                      <td class="text-center"><h3>20,00;</h3></td>
                                      <td class="text-center"><button class="btn btn-link btn-lg" style={{color: "black"}}><span class="glyphicon glyphicon-trash"></span></button></td>
                                    </tr>
                                    <tr>
                                      <th scope="row"><h3>Gerecht 3</h3></th>
                                      <td class="text-center"><h3>1</h3></td>
                                      <td class="text-center"><h3>11,30;</h3></td>
                                      <td class="text-center"><button class="btn btn-link btn-lg" style={{color: "black"}}><span class="glyphicon glyphicon-trash"></span></button></td>
                                    </tr>
                                    
                                    
                                  </tbody>
                                </table>
                              </div>
                            </div>
                    <div class="row" style={{textAlign: "center"}} id="AddItem">
                      <button class="btn btn-link btn-lg"><h1 class="glyphicon glyphicon-plus" style={{color: "#7c7249"}}></h1></button>
                  </div>
          </div>
        </div>
    )
  }
}

export default Tafel;