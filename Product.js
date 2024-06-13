import './product-component.css';

const ProductComponent = (props) => {
    console.log('inside', props.productsList)
    return (
        <div className="container marketing">
            <div className='row my-2'>
                {
                    props.productsList.map(data => (
                        <>
                            <div className="col-lg-4 shadow">
                                <img src={data.image} className="bd-placeholder-img rounded-circle" />
                                <h2 className="fw-normal">{data.title}</h2>
                                <p>{data.description}</p>
                                <h3>Rs. - {data.price}</h3>
                            </div>
                        </>
                    ))
                }
            </div>
        </div>
    )
}

export default ProductComponent;