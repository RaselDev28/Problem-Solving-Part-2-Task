const heights2 = [167, 190, 120, 165, 137];
function lowNumber(heights){
    let lowestHeight=heights[0];
    for(let height of heights){
        if(height < lowestHeight){
            lowestHeight=height;
        }
    }
    return lowestHeight;
} 

const low=lowNumber(heights2);
console.log(low);