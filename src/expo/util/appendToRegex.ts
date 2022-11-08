export const appendToRegex = (content: string, regex: RegExp, toAdd: string): string => {
    // Make sure the project does not have the repositories already
    if (!content.includes(toAdd)) {
        return content.replace(regex, (substring) => substring.concat(content));
    }
    return content;
};
