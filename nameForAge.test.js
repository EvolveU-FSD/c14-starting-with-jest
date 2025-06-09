import nameForAge from './nameForAge.js'

describe("nameForAge", () => {

    it('should return unborn with age < 0', () => {
        const actual = nameForAge(-1)
        expect(actual).toEqual('unborn')
    })

    it('should return baby at age 0', () => {
        const actual = nameForAge(0)
        expect(actual).toEqual('baby')
    })


    it('should return baby under 2', () => {
        const actual = nameForAge(1)
        expect(actual).toEqual('baby')
    })

    it('should return child at 2', () => {
        const actual = nameForAge(2)
        expect(actual).toEqual('child')
    })

    it('should return child between 2 and 13', () => {
        const actual = nameForAge(9)
        expect(actual).toEqual('child')
    })

    it('should return teenager at age 13', () => {
        const actual = nameForAge(13)
        expect(actual).toEqual('teenager')
    })

    it('should return teenager between 13 and 20', () => {
        const actual = nameForAge(15)
        expect(actual).toEqual('teenager')
    })

    it('should return teenager between just before 20', () => {
        const actual = nameForAge(19.9)
        expect(actual).toEqual('teenager')
    })

    it('should return twenty something at age 20', () => {
        const actual = nameForAge(20)
        expect(actual).toEqual('twenty something')
    })

    it('should return twenty something between 20 and 30', () => {
        const actual = nameForAge(26)
        expect(actual).toEqual('twenty something')
    })

    it('should return thirty something at age 30', () => {
        const actual = nameForAge(30)
        expect(actual).toEqual('thirty something')
    })

    it('should return almost grown up at 40', () => {
        const actual = nameForAge(40)
        expect(actual).toEqual('almost grown up!')
    })

    it('should return almost grown up over 40', () => {
        const actual = nameForAge(150)
        expect(actual).toEqual('almost grown up!')
    })

    it('should accept decimal numbers', () => {
        const actual = nameForAge(13.7)
        expect(actual).toEqual('teenager')
    })

    it('should accept strings', () => {
        const actual = nameForAge("14")
        expect(actual).toEqual('teenager')
    })

})