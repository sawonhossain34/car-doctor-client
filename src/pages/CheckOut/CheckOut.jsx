import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from 'sweetalert2'



const CheckOut = () => {
    const service = useLoaderData();
    const { title,price,_id,img } = service;
    const {user} =useContext(AuthContext);
    

    const handleBookService = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const booking ={
            customerName : name,
            email,
            date,
            img,
            service:title,
            service_id:_id,
            price:price
        }
        console.log(booking);

        fetch('http://localhost:5000/bookings',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId)
            Swal.fire({
                title: 'Success!',
                text: 'booking this service',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        })

    }
    return (
        <div>
            Check Book :{title}


            <form onSubmit={handleBookService}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' defaultValue={user?.displayName} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name='date' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name='email' defaultValue={user?.email} placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due amount</span>
                        </label>
                        <input type="text" defaultValue={'$'+price} className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <button >
                        <input className="btn-btn-primary btn btn-block" type="submit" value="Order Confirm" /></button>
                </div>
            </form>
        </div>
    );
};

export default CheckOut;