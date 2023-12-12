import { useState } from "react"
import Cards from "./Cards"
import SideBar from "./SideBar"
import { data } from "autoprefixer";

const Container = () =>{
    const [select,setSelect] = useState([]);
    const [creditHour, setCreditHour] = useState(0);
    const [creditPrice, setCreditPrice] = useState(0);

    const selectCard = card =>{
        const newCard = [...select,card];
        rmvDuplicate(newCard,'id');
    } 

    function rmvDuplicate(arr,pro){
        const uniqueArray = arr.filter(
            (obj, index, self) => self.findIndex(prev => prev[pro] === obj[pro]) === index
          );
          setSelect(uniqueArray);
    }

    const handleToCreditTime = () =>{
        select.map((time,idx)=>{time.credit_time})
        const IntNumber = Number(time);
        const IntCreditTimeNumber = Number(readingTime);
        setCreditHour(IntNumber+IntCreditTimeNumber);
    }

    const handelToCreditPrice = () =>{
        select.map((price,idx)=>{price.price})
        const IntNumber = Number(price);
        const IntCreditPriceNumber = Number(readingTime);
        setCreditPrice(IntNumber+IntCreditPriceNumber);
    }
    return (
        <div className="flex-none lg:flex h-full gap-3">
            <Cards selectCard= {selectCard}></Cards>
            <SideBar addCard = {select} creditTime ={handleToCreditTime} creditPrice = {handelToCreditPrice} setCreditHour = {setCreditHour} setCreditPrice = {setCreditPrice}></SideBar>
        </div>
    )
}
export default Container