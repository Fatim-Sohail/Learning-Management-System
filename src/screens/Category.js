import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { products, products1, products2, products3, products4, products5, products6, products7, products8 } from './coursesData';
import { Link } from 'react-router-dom';
import "./mystyle.css"


export default function Home() {

    return (
        <div className='courses-page' style={{ backgroundColor: '#D3D3D3' }}>
            <div style={{ maxHeight: '75px' }}>
                <Navbar />
            </div>

            <div className="container" style={{ fontSize: '30px', paddingTop: '45px' }}>
                <div style={{ paddingLeft: '380px', paddingTop: '60px', font: 'oswald', fontFamily: 'cursive' }}><><strong> WEB Development Courses</strong></></div>
            </div>

            <div className=' my-4' style={{ fontSize: '30px', paddingTop: '25px', paddingBottom: '60px' }}>
                <div>
                    <div id="carouselSummer" class="carousel carousel-dark slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="card-wrapper container-sm d-flex  justify-content-around">
                                    {products.map((product) => (
                                        // <a href="/about" >
                                        <Link className="nav-link active" aria-current="page" to="/course">

                                            <div class="card" style={{ width: '18rem', height: '480px' }}>
                                                <img src={product.imageUrl} class="card-img-top" alt="..." style={{ objectFit: 'cover', height: '280px' }} />
                                                <div className='permanent-details' style={{ paddingTop: '20px', paddingLeft: '10px' }}>
                                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'  }}>
                                                        <h5><strong>{product.title}</strong></h5>
                                                            <h6 style={{  paddingTop: '5px', fontSize: '13px', paddingRight: '10px' }}>
                                                            <strong>
                                                            <span>&#36;</span>{product.price}
                                                            </strong>
                                                            </h6>
                                                    </div>
                                                    <h6>{product.description}</h6>

                                                    <i class="fas fa-star checked" style={{color: 'orange', display: 'flex', fontSize: '12px', paddingTop: '5px'}}>
                                                        <div style={{color: 'black', paddingLeft:'5px', fontFamily: 'Verdana, Arial, sans-serif'}}>
                                                        {product.rating} 
                                                        </div>
                                                        <div style={{color: 'rgba(0, 0, 0, 0.6)', fontSize: '11px', paddingLeft: '5px', fontFamily: 'Verdana, Arial, sans-serif'}}>
                                                        (87.2k reviews)
                                                        </div>
                                                    </i>
                                                    <div style={{color: 'rgba(0, 0, 0, 0.7)', fontSize: '11px', fontFamily: 'Verdana, Arial, sans-serif', paddingTop: '8px'}}>
                                                    Beginner · Course · 1 - 4 Weeks

                                                    </div>
                                                </div>

                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="card-wrapper container-sm d-flex   justify-content-around">
                                    {products1.map((product) => (
                                        <Link className="nav-link active" aria-current="page" to="/course">

                                        <div class="card" style={{ width: '18rem', height: '480px' }}>
                                            <img src={product.imageUrl} class="card-img-top" alt="..." style={{ objectFit: 'cover', height: '280px' }} />
                                            <div className='permanent-details' style={{ paddingTop: '20px', paddingLeft: '10px' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'  }}>
                                                    <h5><strong>{product.title}</strong></h5>
                                                        <h6 style={{  paddingTop: '5px', fontSize: '13px', paddingRight: '10px' }}>
                                                        <strong>
                                                        <span>&#36;</span>{product.price}
                                                        </strong>
                                                        </h6>
                                                </div>
                                                <h6>{product.description}</h6>

                                                <i class="fas fa-star checked" style={{color: 'orange', display: 'flex', fontSize: '12px', paddingTop: '5px'}}>
                                                    <div style={{color: 'black', paddingLeft:'5px', fontFamily: 'Verdana, Arial, sans-serif'}}>
                                                    {product.rating} 
                                                    </div>
                                                    <div style={{color: 'rgba(0, 0, 0, 0.6)', fontSize: '11px', paddingLeft: '5px', fontFamily: 'Verdana, Arial, sans-serif'}}>
                                                    (87.2k reviews)
                                                    </div>
                                                </i>
                                                <div style={{color: 'rgba(0, 0, 0, 0.7)', fontSize: '11px', fontFamily: 'Verdana, Arial, sans-serif', paddingTop: '8px'}}>
                                                Beginner · Course · 1 - 4 Weeks

                                                </div>
                                            </div>

                                        </div>
                                    </Link>

                                    ))}
                                </div>
                            </div>

                            <div class="carousel-item">
                                <div class="card-wrapper container-sm d-flex   justify-content-around">
                                    {products2.map((product) => (
                                        <Link className="nav-link active" aria-current="page" to="/course">

                                        <div class="card" style={{ width: '18rem', height: '480px' }}>
                                            <img src={product.imageUrl} class="card-img-top" alt="..." style={{ objectFit: 'cover', height: '280px' }} />
                                            <div className='permanent-details' style={{ paddingTop: '20px', paddingLeft: '10px' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'  }}>
                                                    <h5><strong>{product.title}</strong></h5>
                                                        <h6 style={{  paddingTop: '5px', fontSize: '13px', paddingRight: '10px' }}>
                                                        <strong>
                                                        <span>&#36;</span>{product.price}
                                                        </strong>
                                                        </h6>
                                                </div>
                                                <h6>{product.description}</h6>

                                                <i class="fas fa-star checked" style={{color: 'orange', display: 'flex', fontSize: '12px', paddingTop: '5px'}}>
                                                    <div style={{color: 'black', paddingLeft:'5px', fontFamily: 'Verdana, Arial, sans-serif'}}>
                                                    {product.rating} 
                                                    </div>
                                                    <div style={{color: 'rgba(0, 0, 0, 0.6)', fontSize: '11px', paddingLeft: '5px', fontFamily: 'Verdana, Arial, sans-serif'}}>
                                                    (87.2k reviews)
                                                    </div>
                                                </i>
                                                <div style={{color: 'rgba(0, 0, 0, 0.7)', fontSize: '11px', fontFamily: 'Verdana, Arial, sans-serif', paddingTop: '8px'}}>
                                                Beginner · Course · 1 - 4 Weeks

                                                </div>
                                            </div>

                                        </div>
                                    </Link>
                                    ))}
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselSummer" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselSummer" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            <hr className="bold-hr" style={{ paddingBottom: '10px', height: '40px' }} />


            <div className="container" style={{ fontSize: '30px', paddingTop: '0px' }}>
                <div style={{ paddingLeft: '380px', paddingTop: '70px', font: 'oswald', fontFamily: 'cursive' }}><><strong>General Programming Courses</strong></></div>
            </div>

            <div className=' my-4' style={{ fontSize: '30px', paddingTop: '25px', paddingBottom: '60px' }}>
                <div>
                    <div id="carouselTheory" class="carousel carousel-dark slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="card-wrapper container-sm d-flex   justify-content-around">
                                    {products3.map((product) => (
                                        <Link className="nav-link active" aria-current="page" to="/course">

                                        <div class="card" style={{ width: '18rem', height: '480px' }}>
                                            <img src={product.imageUrl} class="card-img-top" alt="..." style={{ objectFit: 'cover', height: '280px' }} />
                                            <div className='permanent-details' style={{ paddingTop: '20px', paddingLeft: '10px' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'  }}>
                                                    <h5><strong>{product.title}</strong></h5>
                                                        <h6 style={{  paddingTop: '5px', fontSize: '13px', paddingRight: '10px' }}>
                                                        <strong>
                                                        <span>&#36;</span>{product.price}
                                                        </strong>
                                                        </h6>
                                                </div>
                                                <h6>{product.description}</h6>

                                                <i class="fas fa-star checked" style={{color: 'orange', display: 'flex', fontSize: '12px', paddingTop: '5px'}}>
                                                    <div style={{color: 'black', paddingLeft:'5px', fontFamily: 'Verdana, Arial, sans-serif'}}>
                                                    {product.rating} 
                                                    </div>
                                                    <div style={{color: 'rgba(0, 0, 0, 0.6)', fontSize: '11px', paddingLeft: '5px', fontFamily: 'Verdana, Arial, sans-serif'}}>
                                                    (87.2k reviews)
                                                    </div>
                                                </i>
                                                <div style={{color: 'rgba(0, 0, 0, 0.7)', fontSize: '11px', fontFamily: 'Verdana, Arial, sans-serif', paddingTop: '8px'}}>
                                                Beginner · Course · 1 - 4 Weeks

                                                </div>
                                            </div>

                                        </div>
                                    </Link>
                                    ))}
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="card-wrapper container-sm d-flex   justify-content-around">
                                    {products4.map((product) => (
                                        <Link className="nav-link active" aria-current="page" to="/course">

                                        <div class="card" style={{ width: '18rem', height: '480px' }}>
                                            <img src={product.imageUrl} class="card-img-top" alt="..." style={{ objectFit: 'cover', height: '280px' }} />
                                            <div className='permanent-details' style={{ paddingTop: '20px', paddingLeft: '10px' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'  }}>
                                                    <h5><strong>{product.title}</strong></h5>
                                                        <h6 style={{  paddingTop: '5px', fontSize: '13px', paddingRight: '10px' }}>
                                                        <strong>
                                                        <span>&#36;</span>{product.price}
                                                        </strong>
                                                        </h6>
                                                </div>
                                                <h6>{product.description}</h6>

                                                <i class="fas fa-star checked" style={{color: 'orange', display: 'flex', fontSize: '12px', paddingTop: '5px'}}>
                                                    <div style={{color: 'black', paddingLeft:'5px', fontFamily: 'Verdana, Arial, sans-serif'}}>
                                                    {product.rating} 
                                                    </div>
                                                    <div style={{color: 'rgba(0, 0, 0, 0.6)', fontSize: '11px', paddingLeft: '5px', fontFamily: 'Verdana, Arial, sans-serif'}}>
                                                    (87.2k reviews)
                                                    </div>
                                                </i>
                                                <div style={{color: 'rgba(0, 0, 0, 0.7)', fontSize: '11px', fontFamily: 'Verdana, Arial, sans-serif', paddingTop: '8px'}}>
                                                Beginner · Course · 1 - 4 Weeks

                                                </div>
                                            </div>

                                        </div>
                                    </Link>
                                    ))}
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="card-wrapper container-sm d-flex   justify-content-around">
                                    {products5.map((product) => (
                                        <Link className="nav-link active" aria-current="page" to="/course">

                                        <div class="card" style={{ width: '18rem', height: '480px' }}>
                                            <img src={product.imageUrl} class="card-img-top" alt="..." style={{ objectFit: 'cover', height: '280px' }} />
                                            <div className='permanent-details' style={{ paddingTop: '20px', paddingLeft: '10px' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'  }}>
                                                    <h5><strong>{product.title}</strong></h5>
                                                        <h6 style={{  paddingTop: '5px', fontSize: '13px', paddingRight: '10px' }}>
                                                        <strong>
                                                        <span>&#36;</span>{product.price}
                                                        </strong>
                                                        </h6>
                                                </div>
                                                <h6>{product.description}</h6>

                                                <i class="fas fa-star checked" style={{color: 'orange', display: 'flex', fontSize: '12px', paddingTop: '5px'}}>
                                                    <div style={{color: 'black', paddingLeft:'5px', fontFamily: 'Verdana, Arial, sans-serif'}}>
                                                    {product.rating} 
                                                    </div>
                                                    <div style={{color: 'rgba(0, 0, 0, 0.6)', fontSize: '11px', paddingLeft: '5px', fontFamily: 'Verdana, Arial, sans-serif'}}>
                                                    (87.2k reviews)
                                                    </div>
                                                </i>
                                                <div style={{color: 'rgba(0, 0, 0, 0.7)', fontSize: '11px', fontFamily: 'Verdana, Arial, sans-serif', paddingTop: '8px'}}>
                                                Beginner · Course · 1 - 4 Weeks

                                                </div>
                                            </div>

                                        </div>
                                    </Link>
                                    ))}
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselTheory" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselTheory" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="bold-hr" style={{ paddingBottom: '0px', height: '10px' }} />


            <div className="container" style={{ fontSize: '30px', paddingTop: '0px' }}>
                <div style={{ paddingLeft: '390px', paddingTop: '100px', font: 'oswald', fontFamily: 'cursive' }}><><strong>Data Science Courses</strong></></div>
            </div>

            <div className=' my-4' style={{ fontSize: '30px', paddingTop: '25px' }}>
                <div>
                    <div id="carouselEssentials" class="carousel carousel-dark slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="card-wrapper container-sm d-flex   justify-content-around">
                                    {products6.map((product) => (
                                        <Link className="nav-link active" aria-current="page" to="/course">

                                        <div class="card" style={{ width: '18rem', height: '480px' }}>
                                            <img src={product.imageUrl} class="card-img-top" alt="..." style={{ objectFit: 'cover', height: '280px' }} />
                                            <div className='permanent-details' style={{ paddingTop: '20px', paddingLeft: '10px' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'  }}>
                                                    <h5><strong>{product.title}</strong></h5>
                                                        <h6 style={{  paddingTop: '5px', fontSize: '13px', paddingRight: '10px' }}>
                                                        <strong>
                                                        <span>&#36;</span>{product.price}
                                                        </strong>
                                                        </h6>
                                                </div>
                                                <h6>{product.description}</h6>

                                                <i class="fas fa-star checked" style={{color: 'orange', display: 'flex', fontSize: '12px', paddingTop: '5px'}}>
                                                    <div style={{color: 'black', paddingLeft:'5px', fontFamily: 'Verdana, Arial, sans-serif'}}>
                                                    {product.rating} 
                                                    </div>
                                                    <div style={{color: 'rgba(0, 0, 0, 0.6)', fontSize: '11px', paddingLeft: '5px', fontFamily: 'Verdana, Arial, sans-serif'}}>
                                                    (87.2k reviews)
                                                    </div>
                                                </i>
                                                <div style={{color: 'rgba(0, 0, 0, 0.7)', fontSize: '11px', fontFamily: 'Verdana, Arial, sans-serif', paddingTop: '8px'}}>
                                                Beginner · Course · 1 - 4 Weeks

                                                </div>
                                            </div>

                                        </div>
                                    </Link>
                                    ))}
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="card-wrapper container-sm d-flex   justify-content-around">
                                    {products7.map((product) => (
                                        <Link className="nav-link active" aria-current="page" to="/course">

                                        <div class="card" style={{ width: '18rem', height: '480px' }}>
                                            <img src={product.imageUrl} class="card-img-top" alt="..." style={{ objectFit: 'cover', height: '280px' }} />
                                            <div className='permanent-details' style={{ paddingTop: '20px', paddingLeft: '10px' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'  }}>
                                                    <h5><strong>{product.title}</strong></h5>
                                                        <h6 style={{  paddingTop: '5px', fontSize: '13px', paddingRight: '10px' }}>
                                                        <strong>
                                                        <span>&#36;</span>{product.price}
                                                        </strong>
                                                        </h6>
                                                </div>
                                                <h6>{product.description}</h6>

                                                <i class="fas fa-star checked" style={{color: 'orange', display: 'flex', fontSize: '12px', paddingTop: '5px'}}>
                                                    <div style={{color: 'black', paddingLeft:'5px', fontFamily: 'Verdana, Arial, sans-serif'}}>
                                                    {product.rating} 
                                                    </div>
                                                    <div style={{color: 'rgba(0, 0, 0, 0.6)', fontSize: '11px', paddingLeft: '5px', fontFamily: 'Verdana, Arial, sans-serif'}}>
                                                    (87.2k reviews)
                                                    </div>
                                                </i>
                                                <div style={{color: 'rgba(0, 0, 0, 0.7)', fontSize: '11px', fontFamily: 'Verdana, Arial, sans-serif', paddingTop: '8px'}}>
                                                Beginner · Course · 1 - 4 Weeks

                                                </div>
                                            </div>

                                        </div>
                                    </Link>
                                    ))}
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="card-wrapper container-sm d-flex   justify-content-around">
                                    {products8.map((product) => (
                                        <Link className="nav-link active" aria-current="page" to="/course">

                                        <div class="card" style={{ width: '18rem', height: '480px' }}>
                                            <img src={product.imageUrl} class="card-img-top" alt="..." style={{ objectFit: 'cover', height: '280px' }} />
                                            <div className='permanent-details' style={{ paddingTop: '20px', paddingLeft: '10px' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'  }}>
                                                    <h5><strong>{product.title}</strong></h5>
                                                        <h6 style={{  paddingTop: '5px', fontSize: '13px', paddingRight: '10px' }}>
                                                        <strong>
                                                        <span>&#36;</span>{product.price}
                                                        </strong>
                                                        </h6>
                                                </div>
                                                <h6>{product.description}</h6>

                                                <i class="fas fa-star checked" style={{color: 'orange', display: 'flex', fontSize: '12px', paddingTop: '5px'}}>
                                                    <div style={{color: 'black', paddingLeft:'5px', fontFamily: 'Verdana, Arial, sans-serif'}}>
                                                    {product.rating} 
                                                    </div>
                                                    <div style={{color: 'rgba(0, 0, 0, 0.6)', fontSize: '11px', paddingLeft: '5px', fontFamily: 'Verdana, Arial, sans-serif'}}>
                                                    (87.2k reviews)
                                                    </div>
                                                </i>
                                                <div style={{color: 'rgba(0, 0, 0, 0.7)', fontSize: '11px', fontFamily: 'Verdana, Arial, sans-serif', paddingTop: '8px'}}>
                                                Beginner · Course · 1 - 4 Weeks

                                                </div>
                                            </div>

                                        </div>
                                    </Link>
                                    ))}
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselEssentials" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselEssentials" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>



            <div style={{ paddingTop: '140px' }}><Footer /></div>



        </div>
    );
}

