describe("Test in app file", () => {
  test("It should be 17", () => {
     // 1.arrange
        const num1 = 5;
        const num2 = 12;
     // 2.act
        const res = num1 + num2;
     // 3.assert
     expect(res).toBe(17);
  });
});
 