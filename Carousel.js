
import './carousel.css';

const CarouselComponent = (props) => {
    return (
        <>
            <div id="myCarousel" className="carousel slide mb-4" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    {
                        props.sliderImage.map(count => (
                            count.id < 5 ? (
                                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to={count.id} aria-label={`Slide ${count.id}`} key={count.id}></button>
                            ) : (<></>)
                        ))
                    }

                </div>
                <div className="carousel-inner">

                    {
                        props.sliderImage.map(images => (
                            // console.log("--",images.id)
                            images.id < 5 ? (
                                <>
                                <div className={images.id === 1 ? "carousel-item active" : "carousel-item"} key={images.id}>
                                    <img src={images.image} className="bd-placeholder-img" width="100%" height="100%" />
                                    <div className="container">
                                        <div className="carousel-caption text-start">
                                            <h1>{images.title}</h1>
                                        </div>
                                    </div>
                                </div>
                            </>
                            ) : (
                                <></>
                            )
                            
                        ))
                    }
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <hr />
        </>
    )
}

export default CarouselComponent;