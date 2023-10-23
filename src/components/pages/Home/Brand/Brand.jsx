import { Link } from "react-router-dom";

const Brand = ({ brand }) => {


    const { _id,title, logo } = brand;



    return (
        <div>
            <Link to={`/brandDetails/${_id}`}>
                <div className="grid grid-cols-3">
                    <img className="w-[200px] h-[200px] " src={logo} alt="" />
                    <h4> {title} </h4>
                </div></Link>
        </div>
    );
};

export default Brand;