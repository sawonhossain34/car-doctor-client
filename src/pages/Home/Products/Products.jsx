import product1 from '../../../assets/images/products/1.png';
import product2 from '../../../assets/images/products/2.png';
import product3 from '../../../assets/images/products/3.png';
import product4 from '../../../assets/images/products/4.png';
import product5 from '../../../assets/images/products/5.png';
import product6 from '../../../assets/images/products/6.png';
// import { Rating } from '@smastrom/react-rating';

const Products = () => {
    return (
        <div className='text-center pt-10'>
            <p className='text-2xl font-bold text-red-500'>Popular Products</p>
            <h3 className='text-5xl font-semibold'>Browse Our Products</h3>
            <p>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-2 '>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10 bg-[#F3F3F3] rounded-xl ">
                        <img src={product1} alt="Shoes" className="rounded-xl w-3/4" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Car Engine Plug</h2>
                        <p>price :$20</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10 bg-[#F3F3F3] rounded-xl">
                        <img src={product2} alt="Shoes" className="rounded-xl w-3/4" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Car Engine Plug</h2>
                        <p>price :$20</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10 bg-[#F3F3F3] rounded-xl">
                        <img src={product3} alt="Shoes" className="rounded-xl w-3/4" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Car Engine Plug</h2>
                        <p>price :$20</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10 bg-[#F3F3F3] rounded-xl">
                        <img src={product4} alt="Shoes" className="rounded-xl w-3/4" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Car Engine Plug</h2>
                        <p>price :$20</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10 bg-[#F3F3F3] rounded-xl">
                        <img src={product5} alt="Shoes" className="rounded-xl w-3/4" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Car Engine Plug</h2>
                        <p>price :$20</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10 bg-[#F3F3F3] rounded-xl">
                        <img src={product6} alt="Shoes" className="rounded-xl w-3/4" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Car Engine Plug</h2>
                        <p>price :$20</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;