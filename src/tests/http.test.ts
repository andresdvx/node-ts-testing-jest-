import { http } from "../plugins/http";

describe("http client plugin", () => {
  test("http clien plugin should return a strig", async () => {
    const data = await http.get("https://jsonplaceholder.typicode.com/todos/1");
    expect(data).toEqual({
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: expect.any(Boolean),
    });
  });

  test('http client plugin should have POST, PUT AND DELETE METHOD', ()=>{
    expect(typeof http.post).toBe('function');
    expect(typeof http.put).toBe('function');
    expect(typeof http.delete).toBe('function');
    expect(typeof http.get).toBe('function');
  })
});
