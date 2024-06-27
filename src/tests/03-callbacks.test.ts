import exp from "constants";
import { getUserById } from "../js-foundation/03-callbacks";

describe("03 - callbacks", () => {
  test("it should return an error", (done) => {
    const id: number = 12;
    getUserById(id, (err, user) => {
      expect(err).toContain(err);
      expect(user).toBeUndefined();
      done();
    });
  });

  test('it should return an user', (done)=>{
    const id : number = 1;
    getUserById(id, (err, user)=>{
        expect(user).toEqual({id: 1, name: 'Andrés'})
        expect(err).toBeUndefined();
        done();
    })
  })
});
