import React from "react";

const LessonCard = ({ title, duration, difficulty, content }) => {
    return (
        <div className="lesson-card">
            <h2>{title}</h2>
            <p>{duration}</p>
            <p>{difficulty}</p>
            <p>{content}</p>
            <hr />
        </div>
    );
};

export default LessonCard;
