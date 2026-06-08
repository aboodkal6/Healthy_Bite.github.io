const meals = {

creamChicken:{
title:"دجاج بالكريما",
description:`
200 غ دجاج
<br>200 غ رز
<br>كريمة دايت
<br><br>
540 كالوري
<br>52 بروتين
`
},

mushroomChicken:{
title:"دجاج بكريمة الفطر",
description:`
200 غ دجاج
<br>200 غ رز
<br>كريمة مشروم دايت
<br><br>
550 كالوري
<br>50 بروتين
`
},

chineseChicken:{
title:"دجاج صيني",
description:`
200 غ دجاج
<br>200 غ رز
<br>صويا صوص
<br><br>
590 كالوري
<br>50 بروتين
`
},

pizzaChicken:{
title:"دجاج بصوص البيتزا",
description:`
200 غ دجاج
<br>200 غ رز
<br>فليفلة خضراء
<br>زيتون
<br>ذرة
<br>جبنة
<br>فطر
`
},

bbqChicken:{
title:"دجاج باربكيو",
description:`
200 غ دجاج
<br>200 غ رز
<br>صوص باربكيو
<br><br>
550 كالوري
<br>50 بروتين
`
},

fajita:{
title:"وجبة فاهيتا",
description:`
فليفلة خضراء
<br>فليفلة حمراء
<br>ذرة
<br>فطر
<br>جبنة
`
},

oriental:{
title:"سلطة شرقية",
description:`
خس
<br>بندورة
<br>خيار
<br>ليمون
`
},

caesar:{
title:"سلطة سيزر",
description:`
صدر دجاج
<br>خس
<br>جبنة لايت
<br>صوص سيزر لايت
`
},

arugula:{
title:"سلطة جرجير",
description:`
جرجير
<br>بندورة كرزية
<br>خل بلسمك
<br>زيتون
`
},

pastaSalad:{
title:"سلطة معكرونة مع الدجاج",
description:`
200 غ معكرونة
<br>200 غ دجاج
<br>خس
<br>ذرة
<br>فطر
<br>فليفلة خضراء
<br>الصوص الخاص
`
},

eggToast:{
title:"توست البيض",
description:`
بيض
<br>خس
<br>بندورة
`
},

zaatarToast:{
title:"توست اللبنة والزعتر",
description:`
لبنة
<br>زعتر
`
},

peanutToast:{
title:"توست زبدة الفستق",
description:`
زبدة فستق
`
},

oats:{
title:"شوفان مع الحليب",
description:`
حليب
<br>شوفان
<br>لوز
<br>عسل
<br>زبيب
`
},

proteinShake:{
title:"شيك بروتين",
description:"مشروب بروتين عالي الجودة"
}

};

function openMeal(meal){

document.getElementById("mealTitle").innerHTML =
meals[meal].title;

document.getElementById("mealDescription").innerHTML =
meals[meal].description;

document.getElementById("mealModal").style.display =
"block";
}

function closeMeal(){

document.getElementById("mealModal").style.display =
"none";
}

const searchInput =
document.getElementById("searchInput");

searchInput.addEventListener("keyup",function(){

let value =
this.value.toLowerCase();

let cards =
document.querySelectorAll(".card");

cards.forEach(card=>{

if(card.innerText.toLowerCase().includes(value))
card.style.display="block";
else
card.style.display="none";

});

});