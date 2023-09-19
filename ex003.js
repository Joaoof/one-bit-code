function reverseArray(arr) {
    const reversed = []

    for (let i = 0; i < arr.length; i++) {
        reversed[i] = arr[arr.length -1 - i]
    }

    return reversed
}

console.log(reverseArray([10, 2, 5, 7]))


