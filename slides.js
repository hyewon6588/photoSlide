

window.addEventListener("load", createLightbox);

function createLightbox() {
   // Lightbox Container
   let lightBox = document.getElementById("lightbox");

   // Parts of the lightbox
   let lbTitle = document.createElement("h1");
   let lbCounter = document.createElement("div");
   let lbPrev = document.createElement("div");
   let lbNext = document.createElement("div");
   let lbPlay = document.createElement("div");
   let lbImages = document.createElement("div");
   let favoriteList =document.getElementById("favoriteList");
   // Design the lightbox title
   lightBox.appendChild(lbTitle);
   lbTitle.id = "lbTitle";
   lbTitle.textContent = lightboxTitle;

   // Design the lightbox slide counter
   lightBox.appendChild(lbCounter);
   lbCounter.id = "lbCounter"; 
   let currentImg = 1;
   lbCounter.textContent = currentImg + " / " + imgCount;

   // Design the lightbox previous slide button
   lightBox.appendChild(lbPrev);
   lbPrev.id = "lbPrev"; 
   lbPrev.innerHTML = "&#9664;";
   lbPrev.onclick = showPrev;

   // Design the lightbox next slide button
   lightBox.appendChild(lbNext);
   lbNext.id = "lbNext";
   lbNext.innerHTML = "&#9654;";
   lbNext.onclick = showNext;

   // Design the lightbox Play-Pause button
//    lightBox.appendChild(lbPlay);
//    lbPlay.id = "lbPlay"; 
//    lbPlay.innerHTML = "&#9199;";
//    let timeID;
//    lbPlay.onclick = function() {
//       if (timeID) {
//          // Stop the slideshow
//          window.clearInterval(timeID);
//          timeID = undefined;
//       } else {
//          // Start the slideshow
//          showNext();
//          timeID = window.setInterval(showNext, 1500);
//       }
//    }

   // Design the lightbox images container
   lightBox.appendChild(lbImages);
   lbImages.id = "lbImages";
   // Add images from the imgFiles array to the container
   for (let i = 0; i < imgCount; i++) {
      let image = document.createElement("img");
      image.src = imgFiles[i];
      image.alt = imgCaptions[i];
      image.onclick = addFavorites;
      lbImages.appendChild(image);
   }
   
   // Function to move forward through the image list
   function showNext() {
      lbImages.appendChild(lbImages.firstElementChild);
      (currentImg < imgCount) ? currentImg++ : currentImg = 1;
      lbCounter.textContent = currentImg + " / " + imgCount;
   }
   
   // Function to move backward through the image list
   function showPrev() {
      lbImages.insertBefore(lbImages.lastElementChild, lbImages.firstElementChild);
      (currentImg > 1) ? currentImg-- : currentImg = imgCount;
      lbCounter.textContent = currentImg + " / " + imgCount;
   }
   
   function addFavorites(){
      var newWindow=window.open("about:blank","Hello in My Window","width=600,height=500");
      var newObject=document.createElement("div");
      newWindow.document.body.appendChild(newObject);
      
      newObject.id = "fullSizePhoto";
      this.id="clicked";
      // Add the image to new window
      let overlayImage = this.cloneNode("true");
      // let overlayImage=this;
      let imageId=overlayImage.attributes.item(0).value;
      newObject.appendChild(overlayImage);
      // console.log(overlayImage.attributes.item(0).value);
      newObject.firstElementChild.id=imageId;
      
      newWindow.document.body.appendChild(newObject);
      newWindow.document.getElementById(imageId).attributes.item(0).value=this.src;
      

      console.log(this.attributes)
      
      // Add a close button to the overlay
      // let closeBox = document.createElement("div");
      // closeBox.id = "lbOverlayClose";
      // closeBox.innerHTML = "&times;";
      // closeBox.onclick = function() {
      //    document.body.removeChild(newObject);
      // }      
      // newObject.appendChild(closeBox);
      


      // lightBox.appendChild(favoriteList);
      // favoriteList.id ="favoriteList";
         
      let addButton = document.createElement("button");
      addButton.textContent = "Add to Favorite List";
      addButton.onclick=addButtonClicked;
      newObject.appendChild(addButton);
      newWindow.document.body.appendChild(newObject);
   }

// Update the addButton.onclick function
function addButtonClicked() {
    const favoriteList = document.getElementById("favoriteList");
    console.log(favoriteList.querySelector("img"));
   
   //  let clonedImage = document.getElementById("clicked").cloneNode("true");
    let clonedImage = document.getElementById("clicked").cloneNode("true");
    document.getElementById("clicked").id=null;
    clonedImage.onclick=favClicked;
    
    
    clonedImage.classList.add("favorite-image"); // Add the CSS class to the cloned image
    let countFavs = favoriteList.getElementsByTagName("img").length;
    var isDuplicate = false;

  
    favoriteList.querySelectorAll("img").forEach((image)=> {
      if(image.src === clonedImage.src){
         isDuplicate = true;
         return;
      }
    });
    if(isDuplicate){
        window.alert("this photo is already in your favorite List");
    }
    else if(countFavs >= 5) {
      window.alert("You have reached the maximum limit of 5 favorite photos.");
    } else {
         var newImage=document.createElement("div");
         newImage.id="fav_img";
         favoriteList.appendChild(newImage);
         newImage.appendChild(clonedImage);
    } 
  }

  function favClicked(){
   if(this.parentElement.querySelector("button")===null){
      var newButton=document.createElement("button");
      newButton.textContent="Remove from favorites";
      newButton.onclick=removeButtonClicked;
      this.parentElement.appendChild(newButton);
   }
      
   }

  function removeButtonClicked(){
     favoriteList.removeChild(this.parentElement);
  }
}

