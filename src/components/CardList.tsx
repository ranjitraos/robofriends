import React from "react";
import Card from "./Card";
import { IRobot } from "./MainPage";

const CardList = ({ robots }: { robots: Array<IRobot> }) => {
    return (
        <div>
            {robots.map(robot => {
                return (
                    <Card
                        key={robot.id}
                        id={robot.id}
                        name={robot.name}
                        email={robot.email}
                    />
                )
            })}
        </div>
    )
}

export default CardList