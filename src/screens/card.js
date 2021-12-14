import React from 'react'
import Button from '../components/button'
import Cards from '../components/cards'

export default function Card() {
    const arr = [
        {
            name: "Aston Martin DBS Superleggera 2021",
            type: "Cars",
            discpriton: "a classic DB5, a V8 Vantage, and a Valhalla. And the baddies will probably drive Land Rover Defenders",
            imge: "https://cdn.motor1.com/images/mgl/10219/s3/aston-martin-dbs-superleggera-exterior.jpg",
            price: "$304,995",
            button:"Add to cart",
        },
        {
            name: "Aston Martin DBS Superleggera 2021",
            type: "Cars",
            discpriton: "a classic DB5, a V8 Vantage, and a Valhalla. And the baddies will probably drive Land Rover Defenders",
            imge: "https://cdn.motor1.com/images/mgl/10219/s3/aston-martin-dbs-superleggera-exterior.jpg",
            price: "$304,995",
            button:"Add to cart",
        },
        {
            name: "Aston Martin DBS Superleggera 2021",
            type: "Cars",
            discpriton: "a classic DB5, a V8 Vantage, and a Valhalla. And the baddies will probably drive Land Rover Defenders",
            imge: "https://cdn.motor1.com/images/mgl/10219/s3/aston-martin-dbs-superleggera-exterior.jpg",
            price: "$304,995",
            button:"Add to cart",
        },
        {
            name: "Aston Martin DBS Superleggera 2021",
            type: "Cars",
            discpriton: "a classic DB5, a V8 Vantage, and a Valhalla. And the baddies will probably drive Land Rover Defenders",
            imge: "https://cdn.motor1.com/images/mgl/10219/s3/aston-martin-dbs-superleggera-exterior.jpg",
            price: "$304,995",
            button:"Add to cart",
        },
        {
            name: "Aston Martin DBS Superleggera 2021",
            type: "Cars",
            discpriton: "a classic DB5, a V8 Vantage, and a Valhalla. And the baddies will probably drive Land Rover Defenders",
            imge: "https://cdn.motor1.com/images/mgl/10219/s3/aston-martin-dbs-superleggera-exterior.jpg",
            price: "$304,995",
            button:"Add to cart",
        },
        {
            name: "Aston Martin DBS Superleggera 2021",
            type: "Cars",
            discpriton: "a classic DB5, a V8 Vantage, and a Valhalla. And the baddies will probably drive Land Rover Defenders",
            imge: "https://cdn.motor1.com/images/mgl/10219/s3/aston-martin-dbs-superleggera-exterior.jpg",
            price: "$304,995",
            button:"Add to cart",
        },
    ]
    return (
        <>
            <div className="Cards">
                <div className="Cards2">
                    <div className="Cards3 container">
                        {arr.map((e, i) => {
                            return (
                                <Cards key={i} className="Cards4">
                                    <img className="CardsIMG"  src={e.imge} />
                                    <h3 className="CardsH3">{e.name}</h3>
                                    <h4 className="CardsH3">{e.type}</h4>
                                    <p className="CardsP">{e.discpriton}</p>
                                    <p className="CardsPrice">{e.price}</p>
                                    <Button className="CardsBTN" 
                                    // onClick={add}
                                    >{e.button}</Button>
                                </Cards>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}