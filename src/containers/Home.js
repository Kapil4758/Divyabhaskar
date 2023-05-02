import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Home = () => {

    let [news, setNews] = useState([]);

    useEffect(() => {
        
        fetch("http://localhost:3001/blogData", {
            method: "GET",
            headers: {"content-type":"application/json"}
        }).then(async (res) => {

            let record = await res.json();
            
            if(record[0] == "" || record[0] == null){
                toast.info("There is currently no blog.")
            }
            else{
                setNews(record)
            }
        }).catch((err) => {
            console.log("Record not found");
        })

    }, [news])

    return(
        <React.Fragment>
            <div className="category-news">
                {
                    news.map((value, index) => {
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
        </React.Fragment>
    )
}

export default Home;