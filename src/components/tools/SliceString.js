function SliceString(string) {
	if (typeof string !== 'string') {
		throw new Error('Slice String function can only accept String as parameter')
	}
	return string.length > 8 ? `${string.slice(0, 8)}...` : string;
};

export default SliceString;