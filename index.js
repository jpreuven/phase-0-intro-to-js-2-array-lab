const cats = ["Milo","Otis", "Garfield"];
const destructivelyAppendCat = function (cat) {
        cats.push(cat);
}
const destructivelyPrependCat = function (cat) {
    cats.unshift(cat);
}

const destructivelyRemoveLastCat = function (cat) {
    cats.pop(cat);
}
const destructivelyRemoveFirstCat = function (cat) {
    cats.shift(cat);
}
const appendCat = function (cat) {
    return [...cats, cat]
}
const prependCat = function (cat) {
    return [cat, ...cats]
}

const removeLastCat = function () {
    return cats.slice(0,-1)
}
const removeFirstCat = function () {
    return cats.slice(1)
}