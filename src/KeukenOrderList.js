// <!doctype html>
// <html lang="en">
//   <head>
//     <title>OrderList</title>
//     <!-- Required meta tags -->
//     <meta charset="utf-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

//     <!-- Bootstrap CSS -->
//     <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
//     <style>

//         body{
//       background-color: #a9cae6;
//     }
//         #containerTable{
//         padding: 0%;
//         border:   rgb(44, 73, 117) solid 2px !important;
//     }
//         #containerTafelInfo{
//         padding: 1%;
//     }
//         #AddItem{
//         padding-bottom: 2%;
//     }
//     </style>

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { Order } from './order';
import './css/keukenorderlist.css';

class KeukenOrderList extends Component {

  constructor() {
    super();
  }

  componentWillMount(){
    window.scrollTo(0,0);
  }

  render() {
    return(
      <div class="container" id="containerTafelInfo">
          <div class="page-header">
              <Link to="/layout">
                  <button type="button" class="btn"><span class="glyphicon glyphicon-chevron-left"></span>Terug</button>
              </Link>
              <h1 class="text-center">Order List</h1>
          </div>

            <div class="container" id="containerTable">
                            <div class="row">
                              <div class="col-lg-12">
                                <table class="table table-hover">
                                  <thead class="thead-light">
                                    <tr style={{backgroundColor: "rgb(74, 112, 161)"}}>
                                      <th scope="col" class="col-lg-3" style={{textAlign: "center"}}><h3>Item</h3></th>
                                      <th scope="col" class="col-lg-3" style={{textAlign: "center"}}><h3>Wachttijd</h3></th>
                                      <th scope="col" class="col-lg-3" style={{textAlign: "center"}}><h3>Tafel</h3></th>
                                      <th scope="col" class="col-lg-1" style={{textAlign: "center"}}><h3>Hoeveelheid</h3></th>
                                      <th scope="col" class="col-lg-1" style={{textAlign: "center"}}></th>
                                      <th scope="col" class="col-lg-1" style={{textAlign: "center"}}></th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td class="text-center"><h3>Gerecht 1</h3></td>
                                      <td class="text-center"><h3>1:23</h3></td>
                                      <td class="text-center"><h3>3</h3></td>
                                      <td class="text-center"><h3>1</h3></td>
                                      <td class="text-center"><button class="btn btn-link btn-lg" style={{color: "black"}}><span class="glyphicon glyphicon-ok" style={{color: "chartreuse"}}></span></button></td>
                                      <td class="text-center"><button class="btn btn-link btn-lg" style={{color: "black"}}><span class="glyphicon glyphicon-trash"></span></button></td>
                                    </tr>
                                    <tr>
                                        <td class="text-center"><h3>Gerecht 2</h3></td>
                                        <td class="text-center"><h3>3:10</h3></td>
                                        <td class="text-center"><h3>1</h3></td>
                                        <td class="text-center"><h3>2</h3></td>
                                        <td class="text-center"><button class="btn btn-link btn-lg" style={{color: "black"}}><span class="glyphicon glyphicon-ok" style={{color: "chartreuse"}}></span></button></td>
                                        <td class="text-center"><button class="btn btn-link btn-lg" style={{color: "black"}}><span class="glyphicon glyphicon-trash"></span></button></td>
                                    </tr>
                                    <tr>
                                        <td class="text-center"><h3>Gerecht 3</h3></td>
                                        <td class="text-center"><h3>2:26</h3></td>
                                        <td class="text-center"><h3>6</h3></td>
                                        <td class="text-center"><h3>1</h3></td>
                                        <td class="text-center"><button class="btn btn-link btn-lg" style={{color: "black"}}><span class="glyphicon glyphicon-ok" style={{color: "chartreuse"}}></span></button></td>
                                        <td class="text-center"><button class="btn btn-link btn-lg" style={{color: "black"}}><span class="glyphicon glyphicon-trash"></span></button></td>
                                    </tr>
                                    
                                    
                                  </tbody>
                                </table>
                              </div>
                            </div>
          </div>
        </div>
    )
  }
}
     

export default KeukenOrderList;