const { convertInrToUsd } = require('./convert');

describe('convertInrToUsd', () => {
    const fixedRate = 0.012;

    it('should correctly convert INR to USD with the fixed rate', () => {
        expect(convertInrToUsd(1000)).toBe((1000 * fixedRate).toFixed(2));
        expect(convertInrToUsd(500)).toBe((500 * fixedRate).toFixed(2));
    });

    it('should return 0.00 for an input of 0', () => {
        expect(convertInrToUsd(0)).toBe('0.00');
    });

    it('should handle decimal inputs correctly', () => {
        expect(convertInrToUsd(123.45)).toBe((123.45 * fixedRate).toFixed(2));
    });

    it('should return "NaN" for invalid inputs', () => {
        expect(convertInrToUsd('abc')).toBe('NaN');
    });
});
