import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const ServiceCard = ({service}) => {
    const {_id,title,img,price} = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl ">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title">{title}</h2>
                
                <div className="card-actions flex items-center text-orange-400">
                <p className="text-xl  font-bold">Price :${price}</p>
                    <Link to={`/checkout/${_id}`}>
                    <FaArrowRight></FaArrowRight>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;