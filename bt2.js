let choice;
let arr = [];
do {
  console.log(`1.Nhập danh sách sinh viên.`);
  console.log(`2.Hiển thị danh sách sinh viên.`);
  console.log(`3.Tìm sinh viên theo tên.`);
  console.log(`4.Xóa sinh viên khỏi danh sách.`);
  console.log(`5.Thoát.`);
  choice = +prompt(`Nhập lựa chọn của bạn: `);
  switch (choice) {
    case 1:
      let arrLength = +prompt(`Nhập số lượng sinh viên: `);
      for (let i = 0; i < arrLength; i++) {
        arr.push(prompt(`Nhập vào sinh viên thứ ${i + 1}: `));
      }
      break;
    case 2:
      if (arr.length === 0) {
        console.log("Danh sách sinh viên trống.");
      } else {
        console.log("Danh sách sinh viên:");
        arr.forEach(function (element, index) {
          console.log(`${index + 1}. ${element}`);
        });
      }
      break;
    case 3:
      let search = prompt(`Nhập tên sinh viên muốn tìm kiếm: `);
      let foundStudents = arr.filter(function (element) {
        return element.includes(search);
      });
      if (foundStudents.length > 0) {
        console.log("Các sinh viên tìm thấy:");
        foundStudents.forEach(function (student) {
          console.log(student);
        });
      } else {
        console.log(`Không tìm thấy sinh viên nào.`);
      }
      break;
    case 4:
      let deleteName = prompt(`Nhập tên sinh viên muốn xóa: `);
      let index = arr.indexOf(deleteName);

      if (index !== -1) {
        arr.splice(index, 1);
        console.log(`Đã xóa sinh viên ${deleteName} khỏi danh sách.`);
      } else {
        console.log(`Không tìm thấy sinh viên trong danh sách.`);
      }
      break;
    case 5:
      break;
    default:
      console.log(`Vui lòng nhập lại`);
  }
} while (choice != 5);
