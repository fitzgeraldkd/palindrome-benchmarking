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

// for (const algorithm of testsToRun.algorithms) {
//     describe(algorithm.name, () => {
//         const startTime = Date.now();
//         for (const testData of testsToRun.tests) {
//             test(`Output of ${testData.output} from input ${testData.input}`, () => {
//                 expect(algorithm.funcReference(testData.input)).toBe(testData.output);
//             })
//         }
//         const endTime = Date.now();
//         test(`Suite completed in ${endTime - startTime}ms`, () => {
//             expect(true).toBe(true);
//         });
//     })
// }