function StringBuilder(baseValue){
this.value = `${baseValue}`;
}
StringBuilder.prototype.getValue = function(){
return this.value;
}
StringBuilder.prototype.padEnd = function(str){
this.value  = `${this.value}${str}`;
}
StringBuilder.prototype.padStart = function(str){
this.value  = `${str}${this.value}`;
}
StringBuilder.prototype.padBoth = function(str){
this.value  = `${str}${this.value}${str}`;
}


//TODO =============== черрез методы массива =================

/* function StringBuilder(baseValue) {
  this.value = baseValue;
}

StringBuilder.prototype.getValue = function () {
  return this.value;
}

StringBuilder.prototype.padEnd = function (str) {
  const newString = this.value.split(' ');
  newString.push(str);
  this.value = newString.join('');
}

StringBuilder.prototype.padStart = function (str) {
  const newString = this.value.split(' ');
  newString.unshift(str);
  this.value = newString.join('');
}

StringBuilder.prototype.padBoth = function (str) {
  const newString = this.value.split(' ');
  newString.push(str);
  newString.unshift(str);
  this.value = newString.join('');
} */

// Пиши код выше этой строки
const builder = new StringBuilder('.');
console.log(builder.getValue()); // '.'
builder.padStart('^');
console.log(builder.getValue()); // '^.'
builder.padEnd('^');
console.log(builder.getValue()); // '^.^'
builder.padBoth('=');
console.log(builder.getValue()); // '=^.^='