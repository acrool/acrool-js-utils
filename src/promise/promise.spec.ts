import {delay} from './promise'; // Replace './yourPromiseModule' with the correct path to your promise module

describe('promise', () => {
    test('should resolve after a given delay', async () => {
        const delayMs = 1000; // Adjust the delay as needed
        const startTime = Date.now();
        await delay(delayMs);
        const endTime = Date.now();
        const elapsedTime = endTime - startTime;
        expect(elapsedTime).toBeGreaterThanOrEqual(delayMs); // Adjust this condition if needed
    });
});
