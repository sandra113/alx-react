/**
 * Returns the current year.
 * @returns {number} The current year.
 */

export function getFullYear() {
    return new Date().getFullYear();
}

/**
 * Returns the footer copy based on the isIndex boolean.
 * @param {boolean} isIndex - If true, return "Holberton School". If false, return "Holberton School main dashboard".
 * @returns {string} The footer copy.
 */

export function getFooterCopy(isIndex) {
    return isIndex? 'Holberton School' : 'Holberton School main dashboard';
}