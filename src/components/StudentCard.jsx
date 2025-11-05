const StudentCard = () => {
    const name = "Nhập tên của bạn";
    const dob = "dd/mm/yyyy";
    const hometown = "Nhập quê quán";
    const hobby = "Nhập sở thích";

    return (
        <div className="student-card">
            <h2>{name}</h2>
            <p>Ngày sinh: {dob}</p>
            <p>Quê quán: {hometown}</p>
            <p>Sở thích: {hobby}</p>
        </div>
    );
};
export default StudentCard;
