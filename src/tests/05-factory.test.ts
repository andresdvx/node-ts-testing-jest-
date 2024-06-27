import { buildMakePerson } from "../js-foundation/05-factory";

describe("05 - factory", () => {
  const getUuid = () => "123";
  const getAge = () => 12;

  test("buildMakePerson should return a function", () => {
    const makePerson = buildMakePerson({ getAge, getUuid });
    expect(typeof makePerson).toBe("function");
  });

    test('make person should return a person', ()=>{
        const makePerson = buildMakePerson({getAge, getUuid});
        const jonhDoe = makePerson({name: 'John Doe', birthDate: '2004-04-05'});
    })
});
