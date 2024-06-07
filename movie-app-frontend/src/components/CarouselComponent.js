import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './CarouselComponent.css';

const CarouselComponent = () => {
    
    return (
        <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} showArrows={false}>
            <div className="carousel-slide">
                <img className= 'carousel-img' src="https://gridfiti.com/wp-content/uploads/2020/05/Gridfiti_BeautifulMovies_18_Spiderman-IntoTheSpiderverse-1.jpg" alt="Slide 1" />
                <div className="carousel-caption">
                    <h2>Spider-Man: Into the Spiderverse</h2>
                    <p>
                        Now zipping into the theater-verse, is the long-awaited follow-up to 2018's "Spider-Man: Into the Spider-Verse," a revelatory thrill ride that deservedly won the Oscar for animation.
                    </p>
                    <a href="https://www.youtube.com/watch?v=g4Hbz2jLxvQ&pp=ygUoU3BpZGVyLU1hbjogSW50byB0aGUgU3BpZGVydmVyc2UgdHJhaWxlcg%3D%3D" target="_blank" rel="noopener noreferrer">
                    <button className="carousel-button"><span><svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM9.5547 7.16795C9.24784 6.96338 8.8533 6.94431 8.52814 7.11833C8.20298 7.29235 8 7.63121 8 8V12C8 12.3688 8.20298 12.7077 8.52814 12.8817C8.8533 13.0557 9.24784 13.0366 9.5547 12.8321L12.5547 10.8321C12.8329 10.6466 13 10.3344 13 10C13 9.66565 12.8329 9.35342 12.5547 9.16795L9.5547 7.16795Z" fill="#FF0059"/>
                                                              </svg>
                                                        </span>&nbsp;Watch Trailer</button>
                    </a>
                </div>
            </div>
            <div className="carousel-slide">
                <img className= 'carousel-img' src="https://gridfiti.com/wp-content/uploads/2020/04/Gridfiti_BeautifulMovies_7_Gravity-1.jpg" alt="Slide 2" />
                <div className="carousel-caption">
                    <h2>Gravity</h2>
                    <p>Directed by Alfonso Cuarón, is a visually stunning space thriller featuring Sandra Bullock and George Clooney as astronauts stranded in space. Celebrated for its groundbreaking effects, the film won multiple Academy Awards.</p>
                    <a href="https://www.youtube.com/watch?v=OiTiKOy59o4&pp=ygUPZ3Jhdml0eSB0cmFpbGVy" target="_blank" rel="noopener noreferrer">
                    <button className="carousel-button"><span><svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM9.5547 7.16795C9.24784 6.96338 8.8533 6.94431 8.52814 7.11833C8.20298 7.29235 8 7.63121 8 8V12C8 12.3688 8.20298 12.7077 8.52814 12.8817C8.8533 13.0557 9.24784 13.0366 9.5547 12.8321L12.5547 10.8321C12.8329 10.6466 13 10.3344 13 10C13 9.66565 12.8329 9.35342 12.5547 9.16795L9.5547 7.16795Z" fill="#FF0059"/>
                                                              </svg>
                                                        </span>&nbsp;Watch Trailer</button>
                    </a>
                </div>
            </div>
            <div className="carousel-slide">
                <img className= 'carousel-img' src="https://gridfiti.com/wp-content/uploads/2020/05/Gridfiti_BeautifulMovies_26_Arrival.jpg" alt="Slide 3" />
                <div className="carousel-caption">
                    <h2>Arrival</h2>
                    <p>Directed by Denis Villeneuve, is a critically acclaimed sci-fi drama about humanity's encounter with mysterious alien visitors. Starring Amy Adams, the film has been praised for its innovative storytelling and visual excellence.</p>
                    <a href="https://www.youtube.com/watch?v=tFMo3UJ4B4g&pp=ygUPYXJyaXZhbCB0cmFpbGVy" target="_blank" rel="noopener noreferrer">
                    <button className="carousel-button"><span><svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM9.5547 7.16795C9.24784 6.96338 8.8533 6.94431 8.52814 7.11833C8.20298 7.29235 8 7.63121 8 8V12C8 12.3688 8.20298 12.7077 8.52814 12.8817C8.8533 13.0557 9.24784 13.0366 9.5547 12.8321L12.5547 10.8321C12.8329 10.6466 13 10.3344 13 10C13 9.66565 12.8329 9.35342 12.5547 9.16795L9.5547 7.16795Z" fill="#FF0059"/>
                                                              </svg>
                                                        </span>&nbsp;Watch Trailer</button>
                    </a>
                </div>
            </div>
            {/* Add more slides as needed */}
        </Carousel>
    );
};

export default CarouselComponent;
