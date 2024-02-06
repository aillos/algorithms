export const cSharpCode =
    `
int SlidingWindow(int[] arr, int x) {
    int maxSum = 0;
    for (int i = 0; i < x; i++)
        maxSum += arr[i];
    int windowSum = maxSum;
    for (int i = x; i < arr.Length; i++) {
        windowSum += arr[i] - arr[i - x];
        maxSum = Math.Max(maxSum, windowSum);
    }
    return maxSum;
}
        `;

export const javaCode =
    `
int slidingWindow(int arr[], int x) {
        int maxSum = 0;
        for (int i = 0; i < x; i++)
            maxSum += arr[i];
 
        int windowSum = maxSum;
        for (int i = x; i < arr.length; i++) {
            windowSum += arr[i] - arr[i - x];
            maxSum = Math.max(maxSum, windowSum);
        }
 
        return maxSum;
    }
        `;

export const cppCode =
    `
int slidingWindow(int arr[], int x) {
    int maxSum = 0;
    for (int i = 0; i < x; i++)
        maxSum += arr[i];
    int windowSum = maxSum;
    for (int i = x; i < arr.length; i++) {
        windowSum += arr[i] - arr[i - x];
        maxSum = max(maxSum, windowSum);
    }
    return maxSum;
}
        `;

export const pythonCode =
    `
def slidingWindow(arr, x):
    maxSum = 0
    for i in range(x):
        maxSum += arr[i]
    windowSum = maxSum
    for i in range(x, len(arr)):
        windowSum += arr[i] - arr[i - x]
        maxSum = max(maxSum, windowSum)
    return maxSum
        `;


export const javascriptCode =
    `
const slidingWindow = (arr, x) => {
    let maxSum = 0;
    for (let i = 0; i < x; i++)
        maxSum += arr[i];
        
    let windowSum = maxSum;
    for (let i = x; i < arr.length; i++) {
        windowSum += arr[i] - arr[i - x];
        maxSum = Math.max(maxSum, windowSum);
    }
    return maxSum;
}
        `;

