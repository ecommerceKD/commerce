import productImg from '../../assets/product/exemplo.png'

import Card from '../../components/card'

import './index.scss'
import { useState, useEffect } from 'react'

interface CardRowInterface {
    qtd: number;
}

export default function CardRow(props: CardRowInterface) {
    const [cards, setCards] = useState({})

    useEffect(() => {
        let array = []
        for (let i = 0; i < props.qtd; i++) {
            array.push(<Card price={22.50} thumbnail={productImg} key={i} />)
        }
        setCards(array)

    }, [props.qtd])

    return (
        <div className="content-cards-home">
            <div className="row">
                {Object.values(cards).map((card) => card)}
            </div>
        </div>
    )
}

// Object
// .values(cards)
// .map((card) => {
//     return card
// }) 