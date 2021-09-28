const testsToRun = require('./palindrome');

for (const algorithm of testsToRun.algorithms) {
    describe(algorithm.name, () => {
        test('Verify results of palindrome checker', () => {
            for (const testData of testsToRun.tests) {
                expect(algorithm.funcReference(testData.input)).toBe(testData.output);
            }
        });
    })
}