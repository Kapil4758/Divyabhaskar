import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const India = () => {

    let [india, setIndia] = useState();

    useEffect(() => {

        fetch("http://localhost:3001/blogData?categoryid=3", {
            method: "GET",
            headers: {"content-type": "application/json"}
        }).then(async (res) => {
            let record = await res.json();

            console.log(record);

            if(record[0] == "" || record[0] == null){
                toast.info("There is currently no blog.")
            }
            else{
                setIndia(record);
            }
        }).catch((err) => {
            console.log(err.message);
        })

    }, [setIndia])

    return(
        <div>
            <div className="category-news">
                {
                    india && india.map((value, index) => {
                        return(
                            <Link to={"/singleblog/"+value.id}>
                                <div className="news-post">
                                    <h1><span>{value.heading}</span>{value.title}</h1>
                                    <img src={value.media} alt="" title="" />
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
            <ToastContainer />
        </div>
    )
}

export default India;