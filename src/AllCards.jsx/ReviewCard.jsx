import { FiUsers } from "react-icons/fi";
import { Rating } from 'react-simple-star-rating';
import {MdVerifiedUser} from "react-icons/md";



const ReviewCard = () => {
    return (
        <div className='w-100  rev-card-compo'>
            <h4>Lorem ipsum dolor sit amet.</h4>
            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, fuga.</h5>
            <div className="d-flex  justify-content-start  align-items-start flex-row" >
                <img src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="image-user" />

                <div className="name-box d-flex flex-row" >
                    <div>
                    <p>Dilshad Ansari</p>
                    <p className="">Software dev</p>
                    <span>
                        <FiUsers />
                        <Rating
                            initialValue={4}
                            className="starts"
                            size={16}
                            style={{marginLeft:"4px", color:"#38E325 "}}
                            fillColor={"#38E325"}
                           
                        />

                    </span>
                    </div>
                    <MdVerifiedUser className="veryicon" />
                </div>

            </div>

        </div>
    )
}

export default ReviewCard