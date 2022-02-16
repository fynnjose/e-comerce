import './Trending.css'
export default function Trending() {
    return (
        <div class="aside split">
            <div class="directme">
                <img src={require("./images/colored_arrow.png")} alt="Trending Direction" />
                <img src={require("./images/colored_arrowr.png")} alt="Trending Direction" />
            </div>
            <div class="trending">
                <a href="./Trending">ALL TRENDING</a>
            </div>
        </div>
    );
}