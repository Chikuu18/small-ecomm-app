import CarouselComponent from "../components/Carousel";
import FooterComponent from "../components/Footer";
import ProductComponent from "../components/Product";


const Home = (props) => {
    return (
        <main>
            <CarouselComponent sliderImage = {props.products}/>
            <ProductComponent productsList = {props.products} />
            <FooterComponent />
        </main>
    )
}

export default Home;