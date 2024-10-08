import React from 'react';

function Home() {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <p>Productos más vendidos</p>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src="https://via.placeholder.com/800x400?text=First+slide" alt="First slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="https://via.placeholder.com/800x400?text=Second+slide" alt="Second slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="https://via.placeholder.com/800x400?text=Third+slide" alt="Third slide" />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>


    );
}

export default Home;
