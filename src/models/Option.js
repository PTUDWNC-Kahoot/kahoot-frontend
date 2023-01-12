class Option {
    constructor(id, content, isCorrect) {
        this.id = id;
        this.content = content;
        this.isCorrect = isCorrect;
    }

   setContent(content){
    this.content = content;
   }

   setIsCorrect(isCorrect){
    this.isCorrect = isCorrect;
   }
}
export default Option