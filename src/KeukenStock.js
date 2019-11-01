// <!doctype html>
// <html lang="en">
//   <head>
//     <title>Stock</title>
//     <!-- Required meta tags -->
//     <meta charset="utf-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

//     <!-- Bootstrap CSS -->
//     <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
//     <style>

//         body{
//       background-color: #8dbee7;
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
// </head>

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import { Ingredient } from './ingredient';
import './css/keukenstock.css';

class KeukenStock extends Component{
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
              <h1 class="text-center">Stock</h1>
          </div>


          <div class="container">
                <div class="search" role="search" style={{padding: "1%" }}>    
                  <input type="text" class="form-control" placeholder="Search" />
                </div>
          </div>

          <div class="container" id="containerTable">
                            <div class="row">
                              <div class="col-lg-12">
                                <table class="table table-hover">
                                  <thead class="thead-light">
                                    <tr style={{backgroundColor: "rgb(74, 102, 161)"}}>
                                      <th scope="col" class="col-lg-7"><h2>Ingrediënten</h2></th>
                                      <th scope="col" class="col-lg-1 text-center"><h3>Aantal</h3></th>
                                      <th scope="col" class="col-lg-1"></th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <th scope="row"><h3>Ingrediënt 1</h3></th>
                                      <td class="text-center"><h3>1</h3></td>
                                      <td class="text-center"><button class="btn btn-link btn-lg" style={{color: "black"}}><span class="glyphicon glyphicon-trash"></span></button></td>
                                    </tr>
                                    <tr>
                                      <th scope="row"><h3>Ingrediënt 2</h3></th>
                                      <td class="text-center"><h3>2</h3></td>
                                      <td class="text-center"><button class="btn btn-link btn-lg" style={{color: "black"}}><span class="glyphicon glyphicon-trash"></span></button></td>
                                    </tr>
                                    <tr>
                                      <th scope="row"><h3>Ingrediënt 3</h3></th>
                                      <td class="text-center"><h3>1</h3></td>
                                      <td class="text-center"><button class="btn btn-link btn-lg" style={{color: "black"}}><span class="glyphicon glyphicon-trash"></span></button></td>
                                    </tr>
                                    
                                    
                                  </tbody>
                                </table>
                              </div>
                            </div>
                    <div class="row" style={{textAlign: "center"}} id="AddItem">
                      <button class="btn btn-link btn-lg"><h1 class="glyphicon glyphicon-plus" style={{color: "#2a3875"}}></h1></button>
                  </div>
          </div>
        </div>
    )
  }
}

export default KeukenStock;