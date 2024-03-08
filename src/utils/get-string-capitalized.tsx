export const getStringCapitalized = (text: string) => {
    return text.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())
}