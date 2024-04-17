/**
 * Converts a string to camel case.
 * @param {string} str - The string to convert.
 * @returns {string} The camel-cased string.
 */
function toCamelCase(str: string): string {
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
    if (+match === 0) return ''; // or if (/\s+/.test(match)) for white spaces
    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  });
}

/**
 * Converts a string to snake case.
 * @param {string} str - The string to convert.
 * @returns {string} The snake-cased string.
 */
function toSnakeCase(str: string): string {
  return str
    .replace(/\W+/g, ' ')
    .split(/ |\B(?=[A-Z])/)
    .map((word) => word.toLowerCase())
    .join('_');
}

/**
 * Converts a string to kebab case.
 * @param {string} str - The string to convert.
 * @returns {string} The kebab-cased string.
 */
function toKebabCase(str: string): string {
  return str
    .replace(/\W+/g, ' ')
    .split(/ |\B(?=[A-Z])/)
    .map((word) => word.toLowerCase())
    .join('-');
}

/**
 * Converts a string to title case.
 * @param {string} str - The string to convert.
 * @returns {string} The title-cased string.
 */
function toTitleCase(str: string): string {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

export { toCamelCase, toSnakeCase, toKebabCase, toTitleCase };
