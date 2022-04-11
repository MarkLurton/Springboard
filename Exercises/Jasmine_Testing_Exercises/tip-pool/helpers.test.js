describe('helpers tests with setup and teardown', function() {
    it('should calculate the percentage of the tip', function() {
        expect(calculateTipPercent(100, 15)).toBe(15);
        expect(calculateTipPercent(40, 0)).toBe(0);
        expect(calculateTipPercent(60, 20)).toBe(33);
    })

    it('should append a new td element with given value to a table row', function() {
        let tr = document.createElement('tr');
        appendTd(tr, 'Mark');
        expect(tr.firstChild.innerText).toBe('Mark');
        appendTd(tr, '$5.00');
        expect(tr.lastChild.innerText).toBe('$5.00')
    })

    it('should sum all payments of the given type', function() {
        allPayments = {
            payment1: {billAmt: '150', tipAmt: '20', tipPercent: 13},
            payment2: {billAmt: '140', tipAmt: '30', tipPercent: 21},
            payment3: {billAmt: '1', tipAmt: '100', tipPercent: 10000}
        };
        expect(sumPaymentTotal('billAmt')).toBe(291);
        expect(sumPaymentTotal('tipAmt')).toBe(150);
        expect(sumPaymentTotal('tipPercent')).toBe(10034)
    })

    it('should add a delete button to the given tr element', function() {
        let tr = document.createElement('tr');
        let serverId = 'server1';
        appendDeleteBtn(tr, serverId);
        expect(tr.firstChild.innerText).toBe('X');
        expect(tr.childElementCount).toBe(1);
      })

    afterEach(function() {
        allPayments = {}
    })

})