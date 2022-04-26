describe('payments tests with setup and teardown', function() {
    beforeEach(function() {
        billAmtInput.value = 100;
        tipAmtInput.value = 25
    })

    it('should return payment object if billAmt and tipAmt are not empty and non-negative', function() {
        expect(createCurPayment()).toEqual({'billAmt': '100', 'tipAmt': '25', 'tipPercent': 25});
    })

    it('should add curPayment to AllPayments, update html and reset input values', function() {
        submitPaymentInfo();
        expect(paymentId).toBe(1);
        expect(allPayments['payment1']).toEqual({'billAmt': '100', 'tipAmt': '25', 'tipPercent': 25});
        expect(billAmtInput.value).toBe('');
        expect(tipAmtInput.value).toBe('');
        expect(paymentTbody.childElementCount).toBe(1);
    })

    it('should Create table row element and pass to appendTd with calculated sum of all payment', function() {
        submitPaymentInfo();
        updateSummary();
        expect(summaryTds[0].innerHTML).toBe('$100');
        expect(summaryTds[1].innerHTML).toBe('$25');
        expect(summaryTds[2].innerHTML).toBe('25%');
    })

    it('should create table row element and pass to append Td with input value', function() {
        appendPaymentTable(createCurPayment());
        let tr = paymentTbody.firstChild
        expect(tr.childElementCount).toBe(4);
        expect(tr.childNodes[0].innerText).toBe('$100');
        expect(tr.childNodes[1].innerText).toBe('$25');
        expect(tr.childNodes[2].innerText).toBe('25%');
        expect(tr.childNodes[3].innerText).toBe('X');
    }, 10000)

    afterEach(function() {
        allPayments = {};
        while (paymentTbody.hasChildNodes()) {
            paymentTbody.removeChild(paymentTbody.firstChild);
        }
        billAmtInput.value = '';
        tipAmtInput.value = '';
        for (let col of summaryTds) {
            col.innerText = '';
        }
        paymentId = 0;
    })
})