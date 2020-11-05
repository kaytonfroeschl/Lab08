

function run(){
    
    //initalizing variables
    var bc = document.getElementById("border").value;
    //document.getElementById("borderWidth").innerHTML = bc;
    var borderWidth;
    var backgroundColor;
    var paragraph = document.getElementById("text");
    var bordercolorMess = document.getElementById("borderColor");
    var borderwidthMess = document.getElementById("borderWidth");
    var backgroundcolorMess = document.getElementById("backColor");

    borderWidth = document.getElementById("borderwidth").value;

    //boreder color
    if(bc === "red"){

        if(borderWidth === "thin"){
            paragraph.style.border = "thin solid red";
        }
        else if(borderWidth === "medium"){
            paragraph.style.border = "medium solid red";
        }
        else if(borderWidth === "thick"){
            paragraph.style.border = "thick solid red";
        }
        else{
            borderwidthMess.innerHTML = "Oops! That width is not an option!";
        }
    }
    else if(bc === "green"){
        if(borderWidth === "thin"){
            paragraph.style.border = "thin solid green";
        }
        else if(borderWidth === "medium"){
            paragraph.style.border = "medium solid green";
        }
        else if(borderWidth === "thick"){
            paragraph.style.border = "thick solid green";
        }
        else{
            borderwidthMess.innerHTML = "Oops! That width is not an option!";
        }
    }
    else if(bc === "blue"){
        if(borderWidth === "thin"){
            paragraph.style.border = "thin solid blue";
        }
        else if(borderWidth === "medium"){
            paragraph.style.border = "medium solid blue";
        }
        else if(borderWidth === "thick"){
            paragraph.style.border = "thick solid blue";
        }
        else{
            borderwidthMess.innerHTML = "Oops! That width is not an option!";
        }
    }
    else{
        bordercolorMess.innerHTML = "Oops! That color color is not an option.";
    }

    //background color
    backgroundColor = document.getElementById("background").value;
    if(backgroundColor === "red"){
        paragraph.style.backgroundColor = "red";
    }
    else if(backgroundColor === "green"){
        paragraph.style.backgroundColor = "green";
    }
    else if(backgroundColor === "blue"){
        paragraph.style.backgroundColor = "blue";
    }
    else{
        backgroundcolorMess.innerHTML = "Oops! That background color is not an option!";
    }
    
}
