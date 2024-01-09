const {describe, beforeEach} = require("vitest");
describe('some tests', () => {
    beforeEach(() => {
        throw new Error('error')
    })

    it('some test', () => {

    })
})
