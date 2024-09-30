const somar = require('./soma');

test('A soma de 1+1 é para resultar em 2', () => {
    expect(somar(1, 1)).toBe(2);
})