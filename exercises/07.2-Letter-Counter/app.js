let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};
// Your code here
for (letter of par){
    if (letter == ' '){
        continue;
    }else if (letter.toLowerCase() in counts){
        counts[letter.toLowerCase()] +=1;
    }else{
        counts[letter.toLowerCase()] = 1;
    }
}

console.log(counts);
