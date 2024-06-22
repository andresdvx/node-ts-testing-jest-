import { emailTemplate } from "../js-foundation/01-template";


describe('01 - template', ()=>{
    test('email template must contain a greeting', ()=>{
        expect(emailTemplate).toContain('Hi')
    });

    test('email template must have div container', ()=>{
        expect(emailTemplate).toMatch(/<div>/)
    })
})