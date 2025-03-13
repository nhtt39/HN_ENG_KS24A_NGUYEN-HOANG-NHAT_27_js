let choice;
do {
   choice = +prompt(
    "moi ban nhap yeu cau:\n 1 - cong hai so\n 2 - tru hai so\n 3 - nhan hai so\n 4 - chia hai so\n 5 - thoat"
  );
  function case1(a, b) {
    return a + b;
  }
  function case2(a, b) {
    return a - b;
  }
  function case3(a, b) {
    return a * b;
  }
  function case4(a, b) {
    return a / b;
  }
  switch (choice) {
    case 1:
      const sum = case1(+prompt("nhap so a"), +prompt("nhap so b"));
      console.log(`tong hai so la ${sum}`);

      break;

    case 2:
      const subtract = case2(+prompt("nhap so a"), +prompt("nhap so b"));
      console.log(`hieu hai so la ${subtract}`);

      break;

    case 3:
      const tich = case3(+prompt("nhap so a"), +prompt("nhap so b"));
      console.log(`tich hai so la ${tich}`);

      break;

    case 4:
      const thuong = case4(+prompt("nhap so a"), +prompt("nhap so b"));
      console.log(`thuong hai so la ${thuong}`);

      break;

    case 5:
      break;

    default:
      console.log(`lua chon khong hop le`);
      break;
      

  }
} while (choice !== 5);
