import React from 'react'
import img1 from '../../assets/img/products/img1.png'
import img2 from '../../assets/img/products/img2.PNG'
import img3 from '../../assets/img/products/img3.PNG'

export const FeatureProducts = () => {
    return (
        <div classNameName='container-fluid'>
            <div className="row border border-start-0 border-end-0 pt-2">
                <h2 className='text-white text-center my-3'>Nuestros productos destacados</h2>
                <p className='text-white text-center fw-bold'>Horneados en horno de barro</p>
            </div>
            <div id="carouselExampleControls" className="carousel slide w-50 m-auto mt-5" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={img1} className="d-block w-75 m-auto" alt="Producto 1" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className='text-dark'>Producto 1</h5>
                            <p className='text-dark'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, ipsum.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={img2} className="d-block w-75 m-auto" alt="Producto 2" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className='text-white'>Producto 2</h5>
                            <p className='text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, ipsum.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={img3} className="d-block w-75 m-auto" alt="Product 3" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className='text-dark'>Producto 3</h5>
                            <p className='text-dark'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, ipsum.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
