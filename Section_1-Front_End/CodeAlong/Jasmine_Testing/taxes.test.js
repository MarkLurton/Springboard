describe('calculateTaxes tests', function() {
    it('should calculate low-bracket', function() {
        expect(calculateTaxes(10000)).toEqual(1500);
        expect(calculateTaxes(20000)).toEqual(3000);
    });

    it('should calculate high-bracket', function() {
        expect(calculateTaxes(50000)).toEqual(12500);
        expect(calculateTaxes(80000)).toEqual(20000);
    });

    it('should reject invalid incomes', function() {
        expect(() => calculateTaxes('money')).toThrowError('BAD INCOME');
        expect(() => calculateTaxes([])).toThrowError('BAD INCOME');
        expect(() => calculateTaxes(true)).toThrowError('BAD INCOME');
    });
});


describe('removeDupes tests', function() {
    it('should remove duplicates from an array', function() {
        expect(removeDupes([1, 1, 2, 2, 3, 4])).toEqual([1, 2, 3, 4]);
        expect(removeDupes([1, 2, 3])).toEqual([1, 2, 3]);
        expect(removeDupes([1, 2, 3])).toBeInstanceOf(Array);
    })

    it('should remove duplicates from a string', function() {
        expect(removeDupes('hello')).toEqual('helo');
        expect(removeDupes('hello')).toBeInstanceOf(String);
    })
});

describe('remove tests', function() {
    it('should remove elements that equal a given value from an array', function() {
        expect(remove([1, 2, 3, 4, 5, 7, 7], 7)).not.toContain(7);
    })
});

describe('submitForm tests', () => {
    it('saves input val to names array', () => {
        input.value = 'chickenGal';
        submitForm();
        expect(names.length).toBe(1);
        expect(names).toContain('chickenGal')
    })
})

afterEach(function() {
    input.value = '';
    names = [];
})