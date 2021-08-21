/**
 * генерация UUID
 * @returns {string} - уникальный ID
 */
export const getUUID = () => (Date.now() + Math.random() * (10 ** 8)).toString(36);