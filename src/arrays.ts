/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    return numbers.length === 0 ?
            []
        :   [numbers[0], numbers[numbers.length - 1]];
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    return numbers.map((num: number): number => num * 3);
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    return numbers.map((num: string): number => {
        const parsed = parseInt(num, 10);
        return isNaN(parsed) ? 0 : parsed;
    });
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    return amounts.map((amount: string): number => {
        const noDollar = amount.startsWith("$") ? amount.slice(1) : amount;
        const parsed = parseInt(noDollar, 10);
        return isNaN(parsed) ? 0 : parsed;
    });
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const fltrMsg = messages.filter(
        (message: string): boolean => !message.includes("?"),
    );
    return fltrMsg.map((message: string): string => {
        const loudMsg = message.endsWith("!") ? message.toUpperCase() : message;
        return loudMsg;
    });
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const shortWords = words.filter((word: string): boolean => word.length < 4);
    return shortWords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    return colors.every(
        (color: string): boolean =>
            color === "red" || color === "blue" || color === "green",
    );
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const sum = addends.reduce((total, num) => total + num, 0);
    const strRep = addends.length > 0 ? addends.join("+") : "0";
    return sum.toString() + "=" + strRep;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const sumUpTo = (arr: number[]): number =>
        arr.reduce((acc, num) => acc + num, 0);

    const indexOfFirstNegative = values.findIndex((num) => num < 0);

    if (indexOfFirstNegative !== -1) {
        const sumBeforeNegative = sumUpTo(
            values.slice(0, indexOfFirstNegative),
        );
        return [
            ...values.slice(0, indexOfFirstNegative + 1),
            sumBeforeNegative,
            ...values.slice(indexOfFirstNegative + 1),
        ];
    } else {
        const totalSum = sumUpTo(values);
        return [...values, totalSum];
    }
}
