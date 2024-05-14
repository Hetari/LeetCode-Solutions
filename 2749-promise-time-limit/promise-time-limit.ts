type Fn = (...params: any[]) => Promise<any>;

function timeLimit(fn: Fn, t: number): Fn {
    const isDone: boolean = false;
    return async function (...args) {
        const promise: Promise<unknown>[] = [
            new Promise(resolve => resolve(fn(...args))),
            new Promise((_, reject) => setTimeout(() => reject('Time Limit Exceeded'), t)),
        ]

        return Promise.race(promise);
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */