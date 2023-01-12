class Presentation {
    constructor(id, title, code, description, slides, collaborators) {
        this.id = id;
        this.title = title;
        this.code = code;
        this.description = description;
        this.slides = slides;
        this.collaborators = collaborators;
    }

   setType(title){
    this.title = title;
   }

   setDescription(description){
    this.description = description;
   }
   
   setSlides(slides){
    this.slides = slides;
   }
   
   setHeading(heading){
    this.heading = heading;
   }
   
   setCollaborators(collaborators){
    this.collaborators = collaborators;
   }
   
}
export default Presentation