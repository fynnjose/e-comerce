import './Popular_Product.css'
export default function PopularProduct() {
    return (
        <div class="popular_product arrangement">
            <img src={require("./images/product_icon.png")} alt="" />
            <ul>
                <li><h3>Popular Product</h3></li>
            </ul>
        </div>
    );
}