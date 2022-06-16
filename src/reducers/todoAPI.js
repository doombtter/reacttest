export function fetchCount(amount = 1) {
    return new Promise((resolve) => resolve({ data: amount }));
}