const list = new Set();

list.add('item 1');
list.add('item 2').add('item 3');
console.log(list);

list.delete('item 1');
console.log(list);