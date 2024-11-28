/**
 * Formats a number as a currency string in Vietnamese Dong (VND).
 *
 * @param {number} price - The number to format.
 * @returns {string} The formatted currency string.
 */
export const useFormatNumber = (price: number): string => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits: 0
  }).format(price);
};