var PrintMedia;
(function (PrintMedia) {
    // هنا قمنا بتعمل عناصر من دون قيم اي ان التعداد يكون افتراضي من صفر الي نهايه العناصر 
    PrintMedia[PrintMedia["NewsPaper"] = 0] = "NewsPaper";
    PrintMedia[PrintMedia["NewsLetter"] = 1] = "NewsLetter";
    PrintMedia[PrintMedia["Magazine"] = 2] = "Magazine";
    PrintMedia[PrintMedia["Book"] = 3] = "Book";
})(PrintMedia || (PrintMedia = {}));
// *******************************************************************************
var Gender;
(function (Gender) {
    // هنا تبدا عمليه التعداد من صفر وتذداد بمقدار 1 
    Gender[Gender["Homme"] = 0] = "Homme";
    Gender[Gender["Femme"] = 1] = "Femme";
})(Gender || (Gender = {}));
var PrintMediaOfAddFristValue;
(function (PrintMediaOfAddFristValue) {
    // هنا قنا بتهيئه العنصر لاولكي يبدا من القيمه 1 وتذداد بمقدار 1
    PrintMediaOfAddFristValue[PrintMediaOfAddFristValue["NewsPaper"] = 1] = "NewsPaper";
    PrintMediaOfAddFristValue[PrintMediaOfAddFristValue["NewsLetter"] = 2] = "NewsLetter";
    PrintMediaOfAddFristValue[PrintMediaOfAddFristValue["Magazine"] = 3] = "Magazine";
    PrintMediaOfAddFristValue[PrintMediaOfAddFristValue["Book"] = 4] = "Book";
})(PrintMediaOfAddFristValue || (PrintMediaOfAddFristValue = {}));
// *******************************************************************************
var PrintMediaOfAddSameValue;
(function (PrintMediaOfAddSameValue) {
    // تهيئه عناصر تحمل نفس القيمه
    PrintMediaOfAddSameValue[PrintMediaOfAddSameValue["NewsPaper"] = 1] = "NewsPaper";
    PrintMediaOfAddSameValue[PrintMediaOfAddSameValue["NewsLetter"] = 4] = "NewsLetter";
    PrintMediaOfAddSameValue[PrintMediaOfAddSameValue["Magazine"] = 4] = "Magazine";
    PrintMediaOfAddSameValue[PrintMediaOfAddSameValue["Book"] = 5] = "Book";
})(PrintMediaOfAddSameValue || (PrintMediaOfAddSameValue = {}));
// *******************************************************************************
// يمكننا استخدام التعداد كنوع ارجاع للداله
var PrintMediaAndFunctionReturn;
(function (PrintMediaAndFunctionReturn) {
    PrintMediaAndFunctionReturn[PrintMediaAndFunctionReturn["NewsPaper"] = 1] = "NewsPaper";
    PrintMediaAndFunctionReturn[PrintMediaAndFunctionReturn["NewsLetter"] = 2] = "NewsLetter";
    PrintMediaAndFunctionReturn[PrintMediaAndFunctionReturn["Magazine"] = 200] = "Magazine";
    PrintMediaAndFunctionReturn[PrintMediaAndFunctionReturn["Book"] = 201] = "Book";
})(PrintMediaAndFunctionReturn || (PrintMediaAndFunctionReturn = {}));
function getMedia(mediaName) {
    if (mediaName === 'Outbook' || mediaName === 'Photo')
        PrintMediaAndFunctionReturn;
    {
        return PrintMediaAndFunctionReturn.Book;
    }
}
var mediaType = getMedia();
// *******************************************************************************
var printInfo = document.getElementById('enum');
// printInfo.innerHTML = PrintMedia.Book.toString();
// printInfo.innerHTML = PrintMediaOfAddSameValue.NewsLetter.toString();
// Style
printInfo.style.margin = '50px auto';
printInfo.style.width = '200px';
printInfo.style.backgroundColor = '#6ab04c';
printInfo.style.color = 'white';
printInfo.style.textAlign = 'center';
printInfo.style.padding = '20px';
