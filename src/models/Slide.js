class Slide {
    constructor(id, type, question, options, heading, subHeading, paragraph) {
        this.id = id;
        this.type = type;
        this.question = question;
        this.options = options;
        this.heading = heading;
        this.subHeading = subHeading;
        this.paragraph = paragraph
    }

   setType(type){
    this.type = type;
   }

   setQuestion(question){
    this.question = question;
   }
   
   setOptions(options){
    this.options = options;
   }
   
   setHeading(heading){
    this.heading = heading;
   }
   
   setSubHeading(subHeading){
    this.subHeading = subHeading;
   }
   
   setParagraph(paragraph){
    this.paragraph = paragraph;
   }
}
export default Slide