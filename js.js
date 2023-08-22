"use strict";
/*    Group 7

      Image List

      Filename:js.js
*/

// Title of the slideshow
let lightboxTitle = "My Western Vacation";

// Names of the image files shown in the slideshow
let imgFiles = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg",
                "image5.jpg", "image6.jpg", "image7.jpg", "image8.jpg",
                "image9.jpg", "image10.jpg"]

// Captions associated with each image
let imgCaptions = new Array(10);
imgCaptions[0]="what";
imgCaptions[1]="Buffalo on the Plains (South Dakota)"; 
imgCaptions[2]="Garden of the Gods (Colorado Springs)"; 
imgCaptions[3]="Elephant Head Wild Flower (Rocky Mountain National Park)"; 
imgCaptions[4]="Double Rainbow (Colorado National Monument)";
imgCaptions[5]="Moose in the Wild (Grand Lake, Colorado)";
imgCaptions[6]="Camas Wild Flower (Rocky Mountain National Park)";
imgCaptions[7]="Chasm Lake (Rocky Mountain National Park)";
imgCaptions[8]="Teton Crest Trail (Grand Teton National Park)";
imgCaptions[9]="The Notch Trail (Badlands National Park)";
// Count of images in the slideshow
let imgCount = imgFiles.length;
