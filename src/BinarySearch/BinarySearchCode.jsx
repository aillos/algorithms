export const cSharpCode =
        `
int BinarySearch(int[] arr, int x) {
    int start = 0;
    int end = arr.Length - 1;
    while (start <= end) {
        int mid = start + (end - start) / 2;
        if (arr[mid] == x) {
            return mid;
        }
        if (arr[mid] < x) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1;
}
        `;

export const javaCode =
    `
int binarySearch (int arr[], int x) {
        int start = 0;
        int end = arr.length - 1;
        while (start <= end) {
        int mid = start + (end - start) / 2;
            if (arr[mid] == x) {
                return mid;
            }
            if (arr[mid] < x) {
                start = mid + 1;
            } else { 
                end = mid - 1;
            }
        }
    return -1;
}
        `;

export const cppCode =
    `
int binarySearch(int arr[], int x, int arr_size) {
    int start = 0;
    int end = arr_size - 1;
    while (start <= end) {
        int mid = start + (end - start) / 2;
        if (arr[mid] == x) {
            return mid;
        }
        if (arr[mid] < x) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1;
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
const BinarySearch = (arr, x) => {
        let start = 0;
        let end = arr.length - 1;
        while (start <= end) {
        let mid = Math.floor((start + end) / 2);
            if (arr[mid] === x) {
                return mid;
            } else if (arr[mid] < x) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    return -1;
}
        `;

