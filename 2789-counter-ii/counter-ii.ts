type Counter = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): Counter {
    let n = init;
    return {
        increment: () => ++n,
        decrement: () => --n,
        reset: () => n = init
    }
};
