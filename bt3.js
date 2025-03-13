let choice;
do {
  choice = +prompt(
    "moi ban nhap yeu cau:\n 1 - tinh dien tich hinh tron\n 2 - tinh chu vi hinh tron\n 3 - tinh dien tich hinh chu nhat\n 4 - tinh chu vi hinh chu nhat\n 5 - thoat"
  );
  function sCircle(r) {
    return Math.PI * r * r;
  }
  function cCricle(r) {
    return 2 * Math.PI * r;
  }
  function sRectangle(a, b) {
    return a * b;
  }
  function cRectangle(a, b) {
    return (a + b) * 2;
  }
  switch (choice) {
    case 1:
      const case1 = sCircle(+prompt(`nhap ban kinh r`));
      console.log(`dien tich hinh tron la ${case1}`);

      break;
    case 2:
      const case2 = cCircle(+prompt(`nhap ban kinh r`));
      console.log(`chu vi hinh tron la ${case2}`);
      break;
    case 3:
      const case3 = sRectangle(
        +prompt("nhap chieu dai a"),
        +prompt("nhap chieu rong b")
      );
      console.log(`tong hai so la ${case3}`);
      break;
    case 4:
      const case4 = cRectangle(
        +prompt("nhap chieu dai a"),
        +prompt("nhap chieu rong b")
      );
      console.log(`tong hai so la ${case4}`);
      break;
    case 5:
      break;

    default:
      break;
  }
} while (choice !== 5);
