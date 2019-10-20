enum PrintMedia {
	// هنا قمنا بتعمل عناصر من دون قيم اي ان التعداد يكون افتراضي من صفر الي نهايه العناصر 
	NewsPaper,
	NewsLetter,
	Magazine,
	Book,
}
// *******************************************************************************
enum Gender {
	// هنا تبدا عمليه التعداد من صفر وتذداد بمقدار 1 
	Homme = 0,
	Femme = 1,
}

enum PrintMediaOfAddFristValue {
	// هنا قنا بتهيئه العنصر لاولكي يبدا من القيمه 1 وتذداد بمقدار 1
	NewsPaper = 1,
	NewsLetter,
	Magazine,
	Book,
}
// *******************************************************************************

enum PrintMediaOfAddSameValue {
	// تهيئه عناصر تحمل نفس القيمه
	NewsPaper = 1,
	NewsLetter = 4,
	Magazine = 4,
	Book = 5,
}
// *******************************************************************************
// يمكننا استخدام التعداد كنوع ارجاع للداله
enum PrintMediaAndFunctionReturn {
	NewsPaper = 1,
	NewsLetter,
	Magazine = 200,							// الكود مبهم مراجعه
	Book,
}
function getMedia (mediaName : String) {
	if (mediaName === 'Outbook' || mediaName === 'Photo') PrintMediaAndFunctionReturn{
		return PrintMediaAndFunctionReturn.Book
	}
}
let mediaType : PrintMediaAndFunctionReturn = getMedia();

// *******************************************************************************


let printInfo = document.getElementById('enum');
// printInfo.innerHTML = PrintMedia.Book.toString();
// printInfo.innerHTML = PrintMediaOfAddSameValue.NewsLetter.toString();


// Style
printInfo.style.margin = '50px auto';
printInfo.style.width = '200px';
printInfo.style.backgroundColor = '#6ab04c';
printInfo.style.color = 'white';
printInfo.style.textAlign = 'center';
printInfo.style.padding = '20px';



