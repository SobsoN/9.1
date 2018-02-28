function getTriangleArea (dlugosc, wysokosc) {
	if (dlugosc<0 || wysokosc<0) {
		console.log('Nieprawidłowe dane');
	}
	else {
		return dlugosc*wysokosc/2
	}
}

const triangleArea1 = getTriangleArea(10,15),
	triangleArea2 = getTriangleArea(21,3),
	triangleArea3 = getTriangleArea(7,8);

console.log(triangleArea1, triangleArea2, triangleArea3);