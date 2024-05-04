type Fn = (n: number, i: number) => any

function filter(arr: number[], fn: Fn): number[] {
    const newArr: number[] = [];

    arr.forEach((element, index) => {
        if (fn(element, index))
            newArr.push(element)
    })

    return newArr;
};