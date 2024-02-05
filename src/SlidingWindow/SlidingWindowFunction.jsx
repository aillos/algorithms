export const SlidingWindowFunction = async (arr, x, callback) => {
    let max = 0;
    let sum = 0;
    let start = 0;
    let end = x - 1;
    let maxStart = 0;
    let maxEnd = x - 1;
    for (let i = 0; i < x; i++) {
        sum += arr[i];
        max = sum;
    }
    callback(max, sum, start, end, start, end);
    for (let i = x; i < arr.length; i++) {
        start=i-x+1;
        end=i;
        sum += arr[end] - arr[start-1];
        if (sum > max) {
            max = sum;
            maxStart = i - x + 1;
            maxEnd = i;
        }
        await new Promise(resolve => setTimeout(resolve, 500));
        callback(max, sum, maxStart, maxEnd, start, end);
    }
    start = arr.length+1;
    end = arr.length+1;
    callback(max, sum, maxStart, maxEnd, start, end);
    return max;
}