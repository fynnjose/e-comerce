export default function Slide() {
    const slides = [{ img: "./images/dietary.jpg" }, { img: "./images/freshfruits.jpg" }, { img: "./images/freshfruits.jpg" }, { img: "./images/freshfruits.jpg" }];
    return (
        <div className="slideitems">
            {

                slides.map(item => {
                    return (
                        <div className="slideitem">
                            <img src={require(`${item.img}`)} alt="slide" />
                        </div>
                    );
                })

            }

        </div>
    );
}