/**
 * Checks if the current device layout is mobile.
 *
 * @returns {boolean} - Returns true if the device layout is mobile, otherwise false.
 */
export const useCheckDeviceIsMobile = (): boolean => {
  return useState('deviceLayout').value === 'mobile'
}