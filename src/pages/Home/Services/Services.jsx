import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {

    const [sevices,setServices] = useState([]);

    useEffect( () => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }  ,[])



    return (
        <div className="mt-4">
            <div className="text-center"> 
                <h3 className="text-2xl font-bold text-orange-500">service</h3>
                <h3 className="text-5xl">Our Service Area</h3>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    sevices.map(service => <ServiceCard 
                    key={service._id}
                    service={service}
                    >

                    </ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;