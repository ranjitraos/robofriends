import React from "react";

interface CardStatelessProps {
    name: string,
    email: string,
    id: number
}
const Card: React.FC<CardStatelessProps> = ({ id, name, email }) => {
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 card">
            <img width={200} height={200} alt="robot" src={`https://robohash.org/${id}?size=200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card