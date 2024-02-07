export const QuickSortFunction = async (array, callback) => {
    const n = array.length;
    await quicksort(array, 0, n - 1, callback);
    return n;
}

const partition = (array, low, high) => {
    let pivot = array[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
        if (array[j] < pivot) {
            i++;
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
    let temp = array[i + 1];
    array[i + 1] = array[high];
    array[high] = temp;
    return i + 1;
}

const quicksort = async (array, low, high, callback) => {
    await new Promise(resolve => setTimeout(resolve, 250));
    if (low < high) {
        let pi = partition(array, low, high);
        callback(array, pi);
        await quicksort(array, low, pi - 1, callback);
        await quicksort(array, pi + 1, high, callback);
    }
}