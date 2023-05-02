import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Singleblog = () => {

    let id = useParams();

    let blogId = id.index;

    let [heading, setHeading] = useState();
    let [title, setTitle] = useState();
    let [media, setMedia] = useState();
    let [content, setContent] = useState();

    useEffect(() => {
        
        fetch("http://localhost:3001/blogData/"+blogId, {
            method: "GET",
            headers: {"content-type":"application/json"}
        }).then(async (res) => {

            let record = await res.json();

        setHeading(record.heading);
        setTitle(record.title);
        setMedia(record.media);
        setContent(record.content);

        }).catch((err) => {
            console.log("Record not found");
        })

    }, [setHeading])

    return(
        <div className="category-news">
            <div className="news-post">
                <h1><span>{heading}</span>{title}</h1>
                <img src={media} alt="" title="" />
                <div dangerouslySetInnerHTML={{__html: content}}></div>
            </div>
        </div>
    )
}

export default Singleblog;