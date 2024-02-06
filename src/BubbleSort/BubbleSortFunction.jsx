export const BubbleSortFunction = async (array, callback) => {
    for (let i = array.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            await new Promise(resolve => setTimeout(resolve, 250));
            callback(array, i);
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;

            }
        }
    }
    callback(array, 0);
}