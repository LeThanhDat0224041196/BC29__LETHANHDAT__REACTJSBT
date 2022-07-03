import React, { Component } from 'react'
import dataGlasses from "./dataGlasses.json"


export default class BTGlasses extends Component {
  render() {
    return (
      <div className="container vglasses py-3">
          <div className="row  justify-content-between">
              <div className="col-6 vglasses__left">
                <div className="row">
                  <div className="col-12">
                      <h1 className="mb-2">Virtual Glasses</h1>
                      <div className="vglasses__model" id="avatar" />
                  </div>
                </div>
              <div className="row" id="vglassesList"></div>
              </div>
              <div className="col-5 vglasses__right p-0">
                <div className="vglasses__card">
                <div className="vglasses__model" id="avatar" />
                <div id="glassesInfo" className="vglasses__info"></div>
                </div>
              </div>
          </div>
          <hr></hr>
          <div className="card">
              <div className="card-header">Glass</div>
              <div className="card-body">
                <div className='row'>
                  <div className='col-2'>
                    <img width={100} src='./img/glassesImage/g1.jpg' alt=''></img>
                  </div>
                  <div className='col-2'>
                    <img width={100} src='./img/glassesImage/g2.jpg' alt=''></img>
                  </div>
                  <div className='col-2'>
                    <img width={100} src='./img/glassesImage/g3.jpg' alt=''></img>
                  </div>
                  <div className='col-2'>
                    <img width={100} src='./img/glassesImage/g4.jpg' alt=''></img>
                  </div>
                  <div className='col-2'>
                    <img width={100} src='./img/glassesImage/g5.jpg' alt=''></img>
                  </div>
                  <div className='col-2'>
                    <img width={100} src='./img/glassesImage/g6.jpg' alt=''></img>
                  </div>
                  <div className='col-2'>
                    <img width={100} src='./img/glassesImage/g7.jpg' alt=''></img>
                  </div>
                  <div className='col-2'>
                    <img width={100} src='./img/glassesImage/g8.jpg' alt=''></img>
                  </div>
                  <div className='col-2'>
                    <img width={100} src='./img/glassesImage/g9.jpg' alt=''></img>
                  </div>
                </div>
              </div>
            </div>
      </div>

    )
  }
}
