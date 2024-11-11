let people = ['juan','ana','michelle','daniella','stefany','lucy','barak', 'emilio'];

function deletePerson(person){
    let filterArr = people.filter((elem) => elem!=person);
    return filterArr;
}
// Your code below

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));
