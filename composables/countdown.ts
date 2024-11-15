/**
 * Calculates the countdown to a specified end date.
 *
 * @param {Date} endDate - The end date to count down to.
 * @returns {Object} An object containing the remaining days and hours.
 */
export const countdown = (endDate: Date): object => {
    const now = new Date().getTime();
    const distance = endDate.getTime() - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    return {days, hours};
};