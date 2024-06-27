import { type } from 'os';
import {getAge} from '../plugins/getAge'


describe(' get age plugin', ()=>{
    test('get age should return a new Date', ()=>{
        const birthDate : string = '2004-04-05';
        const age = getAge(birthDate);
        expect(typeof age).toBe('number');
    });

    test('get age should return 20', ()=>{
        const birthDate : string = '2004-05-04';
        const age = getAge(birthDate);
        expect(age).toBe(20);
    });

    test('get age should return 0 years', ()=>{
        const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(2004);
        const birthDate: string = '2004-04-05';
        const age = getAge(birthDate);
        expect(age).toBe(0);
        expect(spy).toHaveBeenCalled();
    });
})