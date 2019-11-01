// <!doctype html>
// <html lang="en">

// <head>
//   <title>Tafels</title>
//   <!-- Required meta tags -->
//   <meta charset="utf-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

//   <!-- Bootstrap CSS -->
//   <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">


// </head>

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Table from './table';
import './css/layout.css';

class Layout extends Component{
  constructor() {
    super();


  }

  componentDidMount(){
    window.scrollTo(0,0)
  }

  render() {
    return(
      <div class="container"> 
    <div class="page-header">
      <h1 class="text-center">Tafels</h1>
    </div>

    <div class="jumbotron">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 TafelLayout">          
          <h4>Tafel 1</h4>
          <Link to="/tafel">
          <a class="btn btn-success btn-lg" role="button">Plaats bestelling &nbsp;<span class="glyphicon glyphicon-edit"></span></a>
          </Link>
        </div>
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 TafelLayout">
          <h4>Tafel 2</h4>
          <a class="btn btn-danger btn-lg" role="button">Plaats bestelling &nbsp;<span class="glyphicon glyphicon-edit"></span></a>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 TafelLayout">
          <h4>Tafel 3</h4>
          <a class="btn btn-success btn-lg" role="button">Plaats bestelling &nbsp;<span class="glyphicon glyphicon-edit"></span></a>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 TafelLayout">
          <h4>Tafel 4</h4>
          <a class="btn btn-warning btn-lg" role="button">Plaats bestelling &nbsp;<span class="glyphicon glyphicon-edit"></span></a>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 TafelLayout">
          <h4>Tafel 5</h4>
          <a class="btn btn-danger btn-lg" role="button">Plaats bestelling &nbsp;<span class="glyphicon glyphicon-edit"></span></a>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 TafelLayout">
          <h4>Tafel 6</h4>
          <a class="btn btn-danger btn-lg" role="button">Plaats bestelling &nbsp;<span class="glyphicon glyphicon-edit"></span></a>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 TafelLayout">
          <h4>Tafel 7</h4>
          <a  class="btn btn-success btn-lg" role="button">Plaats bestelling&nbsp;<span class="glyphicon glyphicon-edit"></span></a>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 TafelLayout">
          <h4>Tafel 8</h4>
          <a  class="btn btn-success btn-lg" role="button">Plaats bestelling&nbsp;<span class="glyphicon glyphicon-edit"></span></a>
        </div>
      </div>
    </div>
  </div>
    )
  }
}

export default Layout;