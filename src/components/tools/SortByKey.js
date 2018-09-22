function SortByKey(arr, key) {
	if (!(arr instanceof Array)) {
		throw new Error('Can only accept Array on the first parameter');
	}

	if(typeof key !== 'string') {
		throw new Error('Can only accept String on the second parameter');
	}

	arr.sort((a,b) => {
		const nameA = a[key].toUpperCase(); 
    const nameB = b[key].toUpperCase(); 
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
	});
	return arr;
}

export default SortByKey;