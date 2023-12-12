import { useEffect, useState } from "react"
import Card from "./Card";

const Cards = ({selectCard,isClicked}) =>{
    const[cards,setCard] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCard(data))
    },[])
    return(
        <div className="w-full lg:w-3/4 grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center gap-5">
            {
                cards.map(card=><Card 
                    card = {card}
                    key = {card.id}
                    selectCard = {selectCard}
                    >
                </Card>)
            }
        </div>
    )
}
export default Cards;