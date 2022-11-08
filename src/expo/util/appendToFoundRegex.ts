export const appendToFoundRegex = (content: string, regex: RegExp, toAdd: string): string => {
    // Make sure the project does not have the string already
    if (!content.includes(toAdd)) {
        return content.replace(regex, (substring) => substring.concat(toAdd));
    }
    return content;
};
