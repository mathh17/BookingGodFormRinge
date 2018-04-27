function TrainerObject(trainerName, trainerPicture, trainerDescription ){
    this.trainerName = trainerName;
    this.trainerPicture = trainerPicture.src;
    this.trainerDescription = trainerDescription;
}
        
        var sørenPicture = new Image();
        sørenPicture.src = "../Udklip5.png";
        
        var søren = new TrainerObject(
            "Søren", 
             sørenPicture, 
            "Han hedder søren"
        );

        var katrinePicture = new Image();
        katrinePicture.src = "../Udklip5.png";
        
        var katrine = new TrainerObject(
            "Katrine", 
             katrinePicture, 
            "Hun hedder Katrine"
        );