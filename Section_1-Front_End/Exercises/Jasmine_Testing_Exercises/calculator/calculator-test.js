
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment( {
    amount: 15000,
    years: 10,
    rate: 0.03
  })).toBe('144.84')
  expect(calculateMonthlyPayment( {
    amount: 20000,
    years: 25,
    rate: 0.08
  })).toBe('154.36')
  expect(calculateMonthlyPayment( {
    amount: 0,
    years: 10,
    rate: 0.03
  })).toBe('0.00')
});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment( {
    amount: 15000,
    years: 10,
    rate: 0.03
  }).split('.').length).toBe(2)
  expect(calculateMonthlyPayment( {
    amount: 20000,
    years: 25,
    rate: 0.08
  }).split('.').length).toBe(2)
  expect(calculateMonthlyPayment( {
    amount: 0,
    years: 10,
    rate: 0.03
  }).split('.').length).toBe(2)
});

