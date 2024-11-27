const toTinh = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Thành công");
        }, 2000);
    });
};
// toTinh().then((result) => {
//     console.log(result);
// });
const tienHanh = async () => {
    const result = await toTinh();
    console.log(result);
};
tienHanh();
