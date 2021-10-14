// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


 function findMatching(array, name) {
    
    function CbFun(element) {
        return (element.toLowerCase() === name.toLowerCase())
    }
    
    let returnArray= array.filter(CbFun)
   
    return returnArray
}


function fuzzyMatch (array, name){

    function CbFun(element) {
        return element.startsWith(name)
    }

    let returnArray= array.filter(CbFun)

    return returnArray
}

function matchName (array, string) {

    function nameFilter(element) {
        return (element.name.toLowerCase() === string.toLowerCase())

    }

    return array.filter(nameFilter)
}