type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | JSONValue[]

function isEmpty(obj: Obj): boolean {
    return (
        // Check if obj is an array and has no elements
        (Array.isArray(obj) && obj.length === 0) ||
        // Check if obj is an object and has no own enumerable properties
        (obj !== null && obj !== undefined && Object.keys(obj).length === 0)
    );
}