import './App.css';

let bookInfoObject = {
  name: "Harry Potter and the Prisoner of Azkaban",
  author: "Joanne Rowling",
  genre: "Fantasy",
  pages: 317,
  review: `Certainly that seems like more of a possibility in "Harry Potter and the Prisoner of Azkaban," the third Potter film, than it did in the first two. It's not that Harry, Ron and Hermione are faced with any really gruesome dangers (there's nothing here on the order of the spider that wrapped up Frodo for his dinner in the "Ring" trilogy), but that Harry's world has grown a little darker and more menacing.`,
}

let musicalBandObject = {
  name: "The Beatles",
  albums: ['Abbey Road, ', 'Let It Be, ', 'The Beatles, ', 'Help!, ', 'Revolver, ', 'A Hard Day\'s Night, ', 'And more...'],
  info: "The Beatles, formerly called the Quarrymen or the Silver Beatles, byname Fab Four, British musical quartet and a global cynosure for the hopes and dreams of a generation that came of age in the 1960s. The principal members were John Lennon (b. October 9, 1940, Liverpool, Merseyside, England—d. December 8, 1980, New York, New York, U.S.), Paul McCartney (in full Sir James Paul McCartney; b. June 18, 1942, Liverpool), George Harrison (b. February 25, 1943, Liverpool—d. November 29, 2001, Los Angeles, California, U.S.), and Ringo Starr (byname of Richard Starkey; b. July 7, 1940, Liverpool). Other early members included Stuart Sutcliffe (b. June 23, 1940, Edinburgh, Scotland—d. April 10, 1962, Hamburg, West Germany) and Pete Best (b. November 24, 1941, Madras [now Chennai], India).",
}

let recipeObject = {
  name: "Borscht",
  ingredients: ['1 (16 ounce) package pork sausage', '3 medium beets, peeled and shredded', '3 carrots, peeled and shredded', '3 medium baking potatoes, peeled and cubed', '1 tablespoon vegetable oil', '1 medium onion, chopped', '1 (6 ounce) can tomato paste', '¾ cup water', '½ medium head cabbage, cored and shredded', '1 (8 ounce) can diced tomatoes, drained', '3 cloves garlic, minced', 'salt and pepper to taste', '1 teaspoon white sugar, or to taste', '½ cup sour cream, for topping', '1 tablespoon chopped fresh parsley for garnish'],
  directions: `Step 1: Crumble the sausage (if using) into a skillet over medium-high heat. Cook and stir until no longer pink. Remove from the heat and set aside. Step 2: Fill a large pot halfway with water(about 2 quarts), and bring to a boil. Add the sausage, and cover the pot. Return to a boil. Add the beets, and cook until they have lost their color. Add the carrots and potatoes, and cook until tender, about 15 minutes. Add the cabbage, and the can of diced tomatoes. Step 3: Heat the oil in a skillet over medium heat. Add the onion, and cook until tender. Stir in the tomato paste and water until well blended. Transfer to the pot. Add the raw garlic to the soup, cover and turn off the heat. Let stand for 5 minutes. Taste, and season with salt, pepper and sugar. Step 4: Ladle into serving bowls, and garnish with sour cream, if desired, and fresh parsley.`,
  picture: "./images/borscht.jpg",
}

function BookApp() {
  return (
    <>
    <div><p>Book name: {bookInfoObject.name}</p></div>
    <div><p>Book author: {bookInfoObject.author}</p></div>
    <div><p>Book genre: {bookInfoObject.genre}</p></div>
    <div><p>Book pages quantity: {bookInfoObject.pages}</p></div>
    <div><p>Book review: {bookInfoObject.review}</p></div>
    </>
  );
}

function MusicApp() {
    return (    
      <>
      <div><p>Musical band name: {musicalBandObject.name}</p></div>
      <div><p>Musical band albums: {musicalBandObject.albums}</p></div>
      <div><p>Musical band info: {musicalBandObject.info}</p></div>
      </>
    );
}

function RecipeApp() {
  return (
    <>
    <div><p>Dish name: {recipeObject.name}</p></div>
    <div><p>Dish ingredients: {recipeObject.ingredients}</p></div>
    <div><p>Dish directions: {recipeObject.directions}</p></div>
    <div><p>Dish picture: </p><img src="{recipeObject.picture}" alt=""></img></div>
    </>
  );
}

export default (BookApp);
// export default (MusicApp);
// export default (RecipeApp);