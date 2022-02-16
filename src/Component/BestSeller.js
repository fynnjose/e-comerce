import './Popular_Product.css'
export default function BestSeller() {
    return (
        <div class="popular_product arrangement">
            <img src={require("./images/product_icon.png")} alt="" />
            <ul>
                <li><h3>Best Seller</h3></li>
            </ul>
        </div>
    );
}