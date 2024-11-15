/**
 * Creates a debounced function that delays invoking the callback until after the specified delay.
 *
 * @param {Function} callback - The function to debounce.
 * @param {number} delay - The number of milliseconds to delay.
 * @returns {Function} - Returns the new debounced function.
 */
export function debounce(callback: Function, delay: number) {
    let timer: ReturnType<typeof setTimeout>;
    return function(...args: any[]) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback(...args);
        }, delay);
    };
}
