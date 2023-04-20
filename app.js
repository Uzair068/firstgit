// // GETELEMENTSBYCLASSNAME //
// var items = document.getElementsByClassName('list-group-item');
// items [1].style.backgroundColor = 'green';
// items [2].style.display = 'none';

// var allitems=document.getElementById('items')
// allitems.style.fontWeight="bold"

//className
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items [1]);
// items [1].textContent = 'Hello 2';
// items [1].style.fontweight = 'bold';
// items [1].style.backgroundColor = 'yellow';
// // Gives error
// //items.style.backgroundColor = '#f4f4f4';
// for(var i = 0; i < items.length; i++){
//   items[i].style.backgroundColor = '#f4f4f4';
// }

// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontweight = 'bold';
// li[1].style.backgroundColor = 'yellow';
// // Gives error
// //items.style.backgroundColor = '#f4f4f4';
// for(var i = 0; i < li.length; i++){
//   li[i].style.backgroundColor = '#f4f4f4';
// }

var item = document.querySelector('.list-group-item');
item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:nth-child');
// lastItem.style.color = 'blue';
var sItem = document.querySelector('.list-group-item:nth-child(3)');
sItem.style.color = 'blue';

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'coral';

// var titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = 'Hello';
// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even= document.querySelectorAll('li:nth-child(even)');
// for(var i = 0; i < odd.length; i++){
//   odd[i].style.backgroundColor = '#f4f4f4';
//   even[i].style.backgroundColor ='green';
// }