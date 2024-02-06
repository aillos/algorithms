export const cSharpCode =
    `
int[] BubbleSort(int[] arr) {
    int n = arr.Length;
    for (int i = n; i > 0; i--) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
        `;

export const javaCode =
    `
int[] bubbleSort(int[] arr) {
    int n = arr.length;
    for (int i = n; i > 0; i--) {
        for (int j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
        `;

export const cppCode =
    `
int[] bubbleSort(int[] arr) {
    int n = arr.Length;
    for (int i = n; i > 0; i--) {
        for (int j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    } 
    return arr;
}
        `;

export const pythonCode =
    `
def bubbleSort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr
        `
;


export const javascriptCode =
    `
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = n; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
    `

