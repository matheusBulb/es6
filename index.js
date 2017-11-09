class Message {

 constructor(text = '', created = Date.now()){
  this.text = text;
  this.created = created;
 }
 get created() {
  return this._created;
 }
 set created(created) {
  this._created = created;
 }
 toString() {
  return `Foi criada no: ${this.created} - Text: ${this.text}`;
 }
}

class ImageMessage extends Message {
 constructor(text = '', created = Date.now(),
             url = '', thumbnail = ''){
  super(text, created);
  this.url = url;
  this.thumbnail = thumbnail;
 }
 toString() {
  return `Photo ${super.toString()}` +
         `- Url: ${this.url}` +
         `Thumbnail: ${this.thumbnail}`;
 }
}

var emptyMessage = new Message();
var textMessage = new Message('oie', Date.now());
var photoMessage = new ImageMessage();

console.log(String(emptyMessage));
console.log(String(textMessage));
console.log(String(photoMessage));

console.log(emptyMessage instanceof Message);
console.log(textMessage instanceof Message);