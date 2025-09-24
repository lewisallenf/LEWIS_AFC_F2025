//module.exports = { element, element2.....}. This is at the bottom of the page

const isPalindrome = (input) =>{
    if(typeof input !== "string"){return false}
    const cleaning1 = input.toLowerCase().replace(/[^a-z0-9]/gi, '');
    const cleaned = cleaning1.split('').reverse().join('');
    return cleaned == cleaning1;
}
module.exports = {
    isPalindrome
}



