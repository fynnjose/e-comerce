export default function SpecialOfferItem2() {
    const div_Style = {
        padding: '24px 0px'
    }
    const h1Style = {
        color: '#ffffff'
    }
    const divStyle = {
        backgroundColor: 'rgba(0, 0, 255, 0.842)'
    }
    return (
        <div class="_offer" id="_offerbgc2">
            <div style={div_Style} class="flame">

                <div class="orange">
                    <h1 style={h1Style}>High <br />Standars</h1>
                    <h6>BLACK FRIDAY GET YOUR OFFER <br />SHOPPING</h6>
                    <div style={divStyle} class="trend trending">
                        <a href="Shop NOw">SHOP NOW</a>
                    </div>
                </div>
                <div class="orange">
                    <img src={require("./images/product_images/Layer 5.png")} alt="orange" />
                </div>
            </div>
        </div>
    );
}