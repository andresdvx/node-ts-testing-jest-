import {characters} from '../js-foundation/02-destructuring'
 
describe('02 - destructuring', ()=>{
    test('must contain Flash and Batman', ()=>{
        expect(characters).toContain('Flash');
        expect(characters).toContain('BatMan');
    });
    
    test('flash to be equal Flash', ()=>{
        const [character] = characters;
        expect(character).toBe('Flash');
    })
})