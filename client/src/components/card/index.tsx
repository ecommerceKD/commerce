import './index.scss'

import { 
    RiShoppingCart2Fill,
    FaShare,
    AiFillHeart
} from '../../icons'


interface CardInterface {
    price: number,
    thumbnail: string,
}

export default function Card(props: CardInterface) {
    return (
        <div id="content-cards-home">
            <div className="card-product">

                <div className="background-card">
                    <img className="background-img" src={props.thumbnail} alt="ilustração do produto" />
                </div>

                <div className="card-icons">
                    <button className="icon-options">
                        <FaShare className="icon" />
                    </button>

                    <button className="icon-options">
                        <RiShoppingCart2Fill className="icon" />
                    </button>

                    <button className="icon-options">
                        <AiFillHeart className="icon" />
                    </button>
                </div>

                <div className="price">
                    <button className="price-button">R${props.price}</button>
                </div>

            </div>
        </div>
    )
}