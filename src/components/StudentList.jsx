function StudentList() {
    const students = ["Nguyễn Văn A", "Trần Thị B", "Lê Văn C"];

    return (
        <div className="student-list">
            <h2>Danh sách sinh viên</h2>
            <ul>
                <li>{students[0]}</li>
                <li>{students[1]}</li>
                <li>{students[2]}</li>
            </ul>
        </div>
    );
}
export default StudentList;
