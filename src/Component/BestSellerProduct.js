
export default function BestSellerProduct() {
    const bestSellerProduct = [
        { productName: 'Chinise-Nuisen napa', tag: 'Fruits', discount: -20, price: 100, img: './images/mm.png' },
        { productName: 'Chinise-Nuisen napa', tag: 'Fruits', discount: -20, price: 100, img: './images/mm.png' },
        { productName: 'Chinise-Nuisen napa', tag: 'Fruits', discount: -20, price: 100, img: './images/mm.png' },
        { productName: 'Chinise-Nuisen napa', tag: 'Fruits', discount: -20, price: 100, img: './images/mm.png' }
    ]

    return (
        <div className="product_container arrangement">
            {
                bestSellerProduct.map(item => {
                    return (
                        <div className='product'>
                            <div className="discount">
                                <p>
                                    {item.discount}
                                </p>
                            </div>
                            <div className="image">

                                <img src={require(`${item.img}`)} alt="product_image" />

                            </div>
                            <div className="tag">
                                <p>
                                    {item.tag}
                                </p>
                            </div>
                            <div className="name">
                                <h5>
                                    {item.productName}
                                </h5>
                            </div>
                            <div className="price">
                                <p>
                                    ${item.price}/kg
                                </p>
                            </div>
                            <div className='quantity arrangement'>
                                <div className='quantity_num arrangement'>
                                    <span>
                                        <button name='decrease'>-</button>
                                    </span>
                                    <span>
                                        <p>1</p>
                                    </span>
                                    <span>
                                        <button name='increase'>+</button>
                                    </span>
                                </div>
                                <div className='price_image'>
                                    <img src={require("./images/product_images/p_basket.png")} alt="fynn" />
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </div>



    );
}