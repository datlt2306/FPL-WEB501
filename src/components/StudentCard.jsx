const StudentCard = ({ age }) => {
    console.log(age); // undefined
    return (
        <div className="student-card">
            {/* <h2>{props.user.name}</h2>
            <p>Ngày sinh: {props.user.dob}</p>
            <p>Quê quán: {props.user.hometown}</p>
            <p>Sở thích: {props.user.hobby}</p> */}
        </div>
    );
};
export default StudentCard;
