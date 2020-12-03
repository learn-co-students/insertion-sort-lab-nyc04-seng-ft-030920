function findMinAndRemove(array){

    let min = Number.MAX_SAFE_INTEGER
    let minIndex = 0; 

    for(let i = 0; i < array.length; i++){

        if(array[i] < min){
            min = array[i];
            minIndex = i; 
        }
    }

    array.splice(minIndex,1);

    return min; 

}

function selectionSort(array){

    let newArray = []; 
    let i = 0; 

    while(array.length){
        let value = findMinAndRemove(array)
        newArray.push(value);
    }

    return newArray;

}
