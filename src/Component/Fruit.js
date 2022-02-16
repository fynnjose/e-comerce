import './Fruit.css'

export default function Fruit() {
    const fruit = [
        { promotion: 'Black Friday', offer: '5% OFFER FOR THIS WEEK', img: './images/letuce.jpg' },
        { promotion: 'Special Offer', offer: '5% OFFER FOR THIS WEEK', img: './images/pinapple.jpg' },
        { promotion: 'Black Graps', offer: '5% OFFER FOR THIS WEEK', img: './images/graps.jpg' }
    ]
    return (
        <div class="fruits">
            {
                fruit.map(item => {
                    return (
                        <div class="fruit">
                            <h1>{item.promotion}</h1>
                            <h6>{item.offer}</h6>
                            <img src={require(`${item.img}`)} alt="letuce" />
                        </div>
                    );
                })

            }
        </div>
    );
}