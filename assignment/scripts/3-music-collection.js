console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line


//1.Create an empty array named myCollection

let myCollection = [];

//2.Create a function named addToCollection. It should have this basic structure:
// your code here...
//This function should:
//Take in a collection parameter. (This allows the function to be reused to add an
// album to any array of album objects.)
//Take in the album's title, artist, yearPublished as parameters.
//Create a new object having the above properties.
//NOTE: Your object's properties must have title, artist, and yearPublished in order
// for this assignment's automated tests to work correctly!
//Add the new object to the end of the collection array.
//return the newly created object.

 function addToCollection(collection,title,artist,yearPublished){
 obj = {
  title : title,
  artist : artist,
  yearPublished : yearPublished,
 };

 
 
  
 
collection.push(obj);
 
 return obj;
 

 }
 console.log('Added in my collection ',addToCollection(myCollection,'cheap Thrills','Sia',2023))
console.log('My collection is ',myCollection);



//3.Use and Test the addToCollection function:
//Add 6 albums to the myCollection array. Aim to have a mix of both same and different artists and 
//published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
//console.log each album as added using the function's returned value.
//After all are added, console.log the myCollection array.

console.log('Added in my collection ',addToCollection(myCollection,'Lilly','Alan Walker',2018));
console.log('Added in my collection ',addToCollection(myCollection,'Flowers','miley Cyrous',2023));
console.log('Added in my collection ',addToCollection(myCollection,'Cruel Summer','Taylor Swift',2019));
console.log('Added in my collection ',addToCollection(myCollection,'Roar','Katy Perry',2013));
console.log('Added in my collection ',addToCollection(myCollection,'Waka waka','Shakira',2010));
console.log('Added in my collection ',addToCollection(myCollection,'Faded','Alan Walker',2015));
console.log('Added in my collection ',addToCollection(myCollection,'Lilly','Alan Walker',2018));

console.log('My collection is ',myCollection);


//Create a function named showCollection. This function should:
//Take in a collection parameter. (This allows it to be reused to show any array of album objects.)
//Loop through the collection and console.log each album's information formatted within a single string,
// like: TITLE by ARTIST, published in YEARPUBLISHED.
//Test the showCollection function.

function showCollection(collection){
  for(let i = 0; i < collection.length; i++){
  
  console.log(collection[i].title+ ' by ' + collection[i].artist + ' Published in ' + collection[i].yearPublished);
  }  

}
showCollection(myCollection);  


//Add a function named findByArtist. This function should:
//Take in a collection parameter. Remember, we want to be able to search any collection!
//Take in an artist (string) parameter.
//Create an empty array to hold any matching results, if any.
//Loop through the collection and add any album objects with a matching artist to the array.
//Return the array with the matching results. (If no results are found, an empty array should be returned.)
//Test the findByArtist function. Make sure to test with an artist you know is in the collection, as well as
// an artist you know is not in your collection. Check that for artists with multiple matches, all are returned.
//When testing your functions, write all tests in the JavaScript file!



function findByArtist(collection,artist){
 artistArray = []; 
for(let i =0; i < collection.length; i++){ 

  if(collection[i].artist === artist){    
   artistArray.push(collection[i])        
  }
   
}
return artistArray;
}
console.log('find artist value is now ',findByArtist(myCollection,'Alan Walker'));
console.log('My array is now ',artistArray);

//Stretch Goal

//Create a function called search that will allow for searching by artist and yearPublished. 
//This function should:
//Take in a collection parameter.
//Take in a searchCriteria parameter. Create your solution based on a search object that has these properties:
//{ artist: 'Ray Charles', yearPublished: 1957 }
//The returned output from search should meet these requirements:
//Return a new array of all items in the collection matching all of the search criteria.
//If no results are found, return an empty array.
//If there is no search object, an empty search object, or missing artist/yearPublished data provided as input,
// return all albums from the collection being searched.


function search(collection,searchCriteria){
   foundArray = [];
   let gotAny = false;        
  
   
 
  
  for(let i =0; i < collection.length ; i++){
    if(collection[i].artist === searchCriteria.artist && collection[i].yearPublished === searchCriteria.yearPublished){
          foundArray.push(collection[i]);
          gotAny = true;   
  }
}
if(gotAny !== true){
  return collection;
}
return foundArray;
}

console.log('Find result in collection ',search(myCollection,{artist : 'Sia',yearPublished : 2023}));
console.log('My new found array value is ',foundArray);



/*Add an array of tracks to each of your album objects. Each track should have a name and duration.
 You will need to update the functions to support this new property:
//Update the addToCollection function to also take an input parameter for the array of tracks.
//Update the showCollection function to display the list of tracks for each album with its name and duration.
//TITLE by ARTIST, published in YEARPUBLISHED:
    1. NAME: DURATION
    2. NAME: DURATION
    3. NAME: DURATION
TITLE by ARTIST, published in YEARPUBLISHED:
    1. NAME: DURATION
    2. NAME: DURATION
Update search to allow an optional trackName search criteria.
IF the search object has a trackName property, only search for that, ignoring any artist or yearPublished 
properties.*/



































// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
