import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Astrology = () => {

    let [astrology, setAstrology] = useState();

    useEffect(() => {

        fetch("http://localhost:3001/blogData?categoryid=5", {
            method: "GET",
            headers: {"content-type": "application/json"}
        }).then(async (res) => {
            let record = await res.json();

            if(record[0] == "" || record[0] == null){
                toast.info("There is currently no blog.")
            }
            else{
                setAstrology(record);
            }
        }).catch((err) => {
            console.log(err.message);
        })

    })

    return(
        <div>
            <div className="category-news">
                {
                    astrology && astrology.map((value, index) => {
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
        </div>
    )
}

export default Astrology;