export default function Blog() {
    return (
        <div className='blog'>
            <div className="img">
                <img src={require("./images/orangefarm.png")} alt="" />
            </div>
            <div className="date">
                <p>13 January 2022</p>
            </div>
            <div className="bloghead">
                <h3>Best guide to shopping for <br />orgnic ingredients</h3>
            </div>
            <div className="article">
                <p>loooonbhhewiiijieiiejijeijijeij <br /> hehhuhuheuhuhuh.</p>
            </div>
            <div className="readmore">
                <a href="#">Read More &rightarrow;</a>
            </div>
        </div>
    );
}