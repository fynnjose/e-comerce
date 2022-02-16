export default function SpecialOfferItem1() {
    const h1Style = {
        color: '#ffffff'
    }

    const divStyle = {
        backgroundColor: 'rgba(255, 174, 0, 0.842)'
    }
    return (
        <div class="_offer" id="_offerbgc1">
            <div class="flame">
                <div class="orange">
                    <img src={require("./images/product_images/Layer 4.png")} alt="" />
                </div>
                <div class="orange">
                    <h1 style={h1Style}>Monthly <br />Offer</h1>
                    <h6>50% OFFER FOR THIS MONTH</h6>
                    <div style={divStyle} class="trend trending">
                        <a href="Shop Now">SHOP NOW</a>
                    </div>
                </div>
            </div>
        </div>
    );
}