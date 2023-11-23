import {useState} from "react";

const Links = () => {
    const [nameLink, SetnameLink] = useState([
        {
            name: "Getting-started",
            url: "/gettingStarted"
        },
    ]);

    return (
        <div className={"flex justify-around p-1"}>
            {nameLink.map((value, index) => (

                <a key={index} href={value.url} className={"w-24 h-24 p-8 rounded-2xl shadow"}>
                    <p className={"text-5xl font-bold"}>Name: {value.name}</p>
                </a>
            ))}
        </div>
    )
}

export default Links;