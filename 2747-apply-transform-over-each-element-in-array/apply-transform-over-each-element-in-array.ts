function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    const newArr: number[] = [];

    arr.forEach((element, index)=>{
        newArr.push(fn(element, index))
    })

    return newArr
};