export default function Discovery() {
    const sp = {
        backgroundColor: 'white', border: ' 1px solid rgba(23, 168, 23, 0.712)'
    };

    const a = {
        color: 'rgba(0, 0, 0, 0.637)'
    };
    return (
        <div class="discovery">
            <div class="about">
                <div class="abouttext">
                    <h1>Denver <br />Organic Food</h1>
                    <p>Sumptuous, filling and temptingly healthy. Our Biona Organic Granola <br />with Wild Berries is just the thing to get you out of bed.</p>
                </div>
                <div class="aboutlinks">
                    <span><a href="discovery">DISCOVER NOW</a></span>
                    <span style={sp}><a style={a} href="./about">ABOUT US</a></span>
                </div>

            </div>
            <div class="foodinfo">
                <img src={require("./images/mm.png")} alt="redmeat" />
            </div>
        </div>
    );

}