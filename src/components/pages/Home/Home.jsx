import { useLoaderData } from "react-router-dom";
import Brand from "./Brand/Brand";

const Home = () => {


    const brands = useLoaderData()

    return (
        <div>
            <h3>Brand Length : {brands.length} </h3>
           <div>
            {
                brands.map(brand  => <Brand key={brand._id} brand={brand}></Brand>)
            }
           </div>
        </div>
    );
};

export default Home;