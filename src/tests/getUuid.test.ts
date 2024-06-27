import {getUuid} from '../plugins/getUuid'


describe('get uuid', ()=>{
    test(' get uuid should return an uuid', ()=>{
        const uuid = getUuid();
        expect(typeof uuid).toBe('string');
    })
})