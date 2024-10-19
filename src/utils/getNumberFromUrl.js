export function getPageNumberFromUrl(url) {
    let position = url.indexOf('=');
    return parseInt(url.slice(position+1));
}