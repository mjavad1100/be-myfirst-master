import './services.css';
const CardSlide = (data) => {
    const {title, image,id} = data;
    return (
        <div className="image-flip">
            <div className="mainflip">
                <div className="frontside">
                    <img src={image} id={id} alt="third" />
                </div>
                <div className="backside hoverclass">
                    <div className="card card-body text-center p-5 mt-4">
                        <p className="card-text text-white text-justify">
                            {title}
                        </p>
                        <a href='#portfolio' className='bttn light'>More ...</a>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardSlide;
