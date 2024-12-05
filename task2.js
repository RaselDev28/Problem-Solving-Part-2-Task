const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function smallName(heights){
    let smallest=heights[0];
    for(let name of heights){
        if( name.length < smallest.length){
            smallest=name;
        }
    }
    return smallest;
}
const minName=smallName(heights2);
console.log(minName);