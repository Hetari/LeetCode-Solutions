type F = (x: number) => number;

function compose(functions: F[]): F {
    return function(x) {
        functions.reverse().forEach(f=>{
            x = f(x)
        })
        return x;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */