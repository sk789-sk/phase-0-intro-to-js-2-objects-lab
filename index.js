// Write your solution in this file!

const employee = {
    name : '',
    streetAddress : ''
}

function updateEmployeeWithKeyAndValue(_employee,_key,value){
    const newObject = {..._employee}
    newObject[_key] = value
    //newObject.name = _employee.name
    //newObject.streetAddress = _employee.streetAddress
    return newObject
}


function destructivelyUpdateEmployeeWithKeyAndValue(_employee,_key,value){
    _employee[_key] = value
    return _employee
}

function deleteFromEmployeeByKey(_employee,key){
    const newObject = {..._employee}
    delete newObject[key]
    return newObject

}

function destructivelyDeleteFromEmployeeByKey(_employee,key){
    delete _employee[key]
    return _employee
}
