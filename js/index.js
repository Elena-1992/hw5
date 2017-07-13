const forSearchLast = "Lorem ipsum dolor `1499587246497` -> `https://example.io` sit amet, consectetur adipiscing elit, " +
"sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis \"Aug 9, 2016\" => \"file:///some-file.md\"" +
"nostrud exercitation ullamco laboris nisi ut aliquip 'Wed, 22 Jan 2015 00:00:00 GMT' :: 'http://something.com.ua' ex ea commodo consequat." +
"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, "+
"sunt in culpa qui officia deserunt mollit anim id est laborum."

// const regexpStrDateLast = /(`|"|')(\w*\s+"|:?)(.*?)(`|"|')(\s((->)|(=>)|(::))\s)(`|"|')(\w*\s+"|:?)(.*?)(`|"|')/gi
const regexpStrDateLast = /(?:\"|\'|\`)[\d\w\W][^\"\'\`]+(?:\`|\'|\")\s(?:\-\>|\=\>|[\:]{2})\s(?:\"|\'|\`)(?:[\d\w\W][^\"\'\`]+)(?:\`|\'|\")/gmi

let resultStr = forSearchLast.match(regexpStrDateLast)

const mas = []
console.log(mas)

const stringToObj = function(str){
    let regular = /(?:\-\>|\=\>|[\:]{2})/
    let res = str.split(regular)
    let timeshtamp = Date.parse(res[0])
    if(isNaN(timeshtamp)){
    	let timestampStr= res[0].replace(/`/gi, '')
    	date = new Date(parseInt(timestampStr));
    }else{
    	date = new Date(parseInt(timeshtamp));
    }
    let obj = {
        date: date.toLocaleDateString(), // DD/MM/YY
        url: res[1]
    }
    mas.push(obj)
}
const buildResultArray = function(arr){
    result = []
    for (let i of arr) {
        result.push(stringToObj(i))
    }
    return result
}
buildResultArray(resultStr)
