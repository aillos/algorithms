export const BinarySearch = async (arr, target, callback) => {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        let mid = Math.floor((start + end) / 2);
        callback(start, mid, end);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1;
}