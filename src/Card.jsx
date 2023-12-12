import { FaDollarSign,FaBookOpen } from 'react-icons/fa';
const Card=({card,selectCard,isClicked})=>{
    const {course_title,description,price,credit_time,image_url} = card;
    return(
        <div className="relative w-[350px] lg:w-[250px] 2xl:w-[300px] xl:w-[310px] h-[500px] 2xl:h-[500px] lg:h-[550px] bg-white rounded-lg">
            <div className="p-4 flex flex-col gap-3">
                <div className="image w-full h-[190px] lg:h-[200px]">
                    <img src={image_url} className="w-full h-full"></img>
                </div>
                <div className="description flex flex-col">
                    <h1 className="text-2xl font-bold">{course_title}</h1>
                    <p>{description}</p>
                </div>
                <div className="amount flex justify-between absolute bottom-20 gap-12">
                    <h1><span className='flex justify-center items-center text-gray-500'><FaDollarSign style={{color:'gray'}}></FaDollarSign> Price: {price}</span></h1>
                    <h1><span className='flex justify-center items-center gap-1 text-gray-500'><FaBookOpen style={{color:'gray'}}></FaBookOpen> Credit: {credit_time}hr</span></h1>
                </div>
                <div className="button w-full">
                    <button className="w-[90%] bg-blue-500 rounded-lg text-white p-2 absolute bottom-4"
                    onClick={()=>selectCard(card)}>Select</button>
                </div>
            </div>
        </div>
    )
}
export default Card