import { useState } from "react";

const SideBar = ({addCard,setCreditHour,setCreditPrice,creditPrice}) =>{
    const {course_title,price,credit_time} = addCard;
    return(
    <div className="w-full lg:w-1/4">
        <div className="mb-24 m-4 lg:mt-0 md:mt-0 bg-white rounded-lg">
            <div className="p-4 flex flex-col gap-3">
                <div className="remainingTime">
                    <h1 className="font-bold text-blue-400 text-[1.2rem]">Credit Hour Remaining {}hr</h1>
                </div>
                <hr></hr>
                <div className="markCourse">
                    <h1 className="font-bold text-[1.2rem] lg:text-2xl">Course Name </h1>
                    <div className="markCourseName">
                        {
                            addCard.map((name,idx)=><h1 className="p-2 text-zinc-900" key={idx}> {idx+1}. {name.course_title}</h1>)
                        }
                    </div>
                </div>
                <hr></hr>
                <div className="credit">
                        {
                            addCard.map((time,idx)=><h1 className="font-bold text-gray-700" key={idx}> Total Credit Hour : {time.credit_time}</h1>)
                        }
                </div>
                <hr></hr>
                <div className="price">
                        {
                            addCard.map((price,idx)=><h1 className="font-bold text-gray-700" key={idx}> Total Price : {price.price} USD </h1>)
                        }
                        
                </div>
            </div>
        </div>
    </div>
    )
}
export default SideBar;