import './NavBar.css';

export default function NavBar() {
    return (

        <div class="navbar split samebgc">
            <div class="logo">
                <h1>Dreambuz</h1>
            </div>
            <div class="rightnav">
                <div class="cartinfo itemsaliment">
                    <span>$ 0.00</span>
                    <span>
                        <img src={require("./images/cart-svgrepo-com(1).svg")} alt="cart" />
                    </span>
                    <span>
                        {/* &hearts; */}
                        <img src={require("./images/favourite-svgrepo-com(1).svg")} alt="fav" />
                    </span>
                </div>
                <div>Account</div>
            </div>
        </div>
    );

}