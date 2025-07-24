
// Create 50 Objects with Keys:
// Create JavaScript 50 objects.
// Add keys in it.
// Keys and values will be your own choice
// Values can be string, number, array, object — anything valid in JS.
// Show some output using console.log.

//1. Teachers Constructor:
function Teacher(name, subject, experience) {
    this.name = name;
    this.subject = subject;
    this.experience = experience;
}

//Creating teacher objects:
var teacher1 = new Teacher("Miss Minahil Irfan", "HTML/CSS", 5);
var teacher2 = new Teacher("Miss Sana", "Python", 3);
var teacher3 = new Teacher("Sir Ahsan", "JavaScript", 4.9);
var teacher4 = new Teacher("Sir Kashif", "React", 2);
var teacher5 = new Teacher("Miss Hina", "Digital Marketing", 4);


//console print:
console.log(`${teacher1.name} teaches ${teacher1.subject} with ${teacher1.experience} years experience.`);
console.log(`${teacher2.name} teaches ${teacher2.subject} with ${teacher2.experience} years experience.`);
console.log(`${teacher3.name} teaches ${teacher3.subject} with ${teacher3.experience} years experience.`);
console.log(`${teacher4.name} teaches ${teacher4.subject} with ${teacher4.experience} years experience.`);
console.log(`${teacher5.name} teaches ${teacher5.subject} with ${teacher5.experience} years experience.`);


//2. Pakistani People Constructor:
function PakistaniPerson(name, gender, yearOfBirth, alive, knownFor, city, province, story) {
    this.name = name;
    this.gender = gender;
    this.yearOfBirth = yearOfBirth;
    this.alive = alive;
    this.knownFor = knownFor;
    this.origin = {
        city: city,
        province: province
    };
    this.story = story;
}

//Creating people objects:
var people1 = new PakistaniPerson("Abdul Sattar Edhi", "Male", 1928, false, ["Charity", "Edhi Foundation", "Humanitarian Work"], "Karachi", "Sindh", "He dedicated his life to serving humanity selflessly.");
var people2 = new PakistaniPerson("Malala Yousafzai", "Female", 1997, true, ["Education", "Peace", "Nobel Prize"], "Mingora", "Khyber Pakhtunkhwa", "She stood up for girls' education against all odds.");
var people3 = new PakistaniPerson("Wasim Akram", "Male", 1966, true, ["Cricket", "Swing Bowling"], "Lahore", "Punjab", "He ruled the world of fast bowling with his swing magic.");
var people4 = new PakistaniPerson("Benazir Bhutto", "Female", 1953, false, ["Politics", "First Female PM of Pakistan"], "Larkana", "Sindh", "She became the first woman to lead a Muslim nation.");
var people5 = new PakistaniPerson("Arfa Karim", "Female", 1995, false, ["Technology", "Microsoft", "Child Prodigy"], "Faisalabad", "Punjab", "She became the youngest Microsoft Certified Professional.");

//console print:
console.log(`${people1.name} (${people1.gender}, born in ${people1.yearOfBirth}) from ${people1.origin.city}, ${people1.origin.province}, is ${people1.alive ? "alive" : "not alive"}, known for ${people1.knownFor.join(", ")}. Story: ${people1.story}`);
console.log(`${people2.name} (${people2.gender}, born in ${people2.yearOfBirth}) from ${people2.origin.city}, ${people2.origin.province}, is ${people2.alive ? "alive" : "not alive"}, known for ${people2.knownFor.join(", ")}. Story: ${people2.story}`);
console.log(`${people3.name} (${people3.gender}, born in ${people3.yearOfBirth}) from ${people3.origin.city}, ${people3.origin.province}, is ${people3.alive ? "alive" : "not alive"}, known for ${people3.knownFor.join(", ")}. Story: ${people3.story}`);
console.log(`${people4.name} (${people4.gender}, born in ${people4.yearOfBirth}) from ${people4.origin.city}, ${people4.origin.province}, is ${people4.alive ? "alive" : "not alive"}, known for ${people4.knownFor.join(", ")}. Story: ${people4.story}`);
console.log(`${people5.name} (${people5.gender}, born in ${people5.yearOfBirth}) from ${people5.origin.city}, ${people5.origin.province}, is ${people5.alive ? "alive" : "not alive"}, known for ${people5.knownFor.join(", ")}. Story: ${people5.story}`);

//3. Book Constructor:
function Book(title, author, yearPublished, genre, pages, available, city, country, storyline) {
    this.title = title;
    this.author = author;
    this.yearPublished = yearPublished;
    this.genre = genre;
    this.pages = pages;
    this.available = available;
    this.origin = {
        city: city,
        country: country
    };
    this.storyline = storyline;
}

//Creating book objects:
var book1 = new Book("Raja Gidh", "Bano Qudsia", 1981, "Philosophical Fiction", 342, true, "Lahore", "Pakistan", "A philosophical exploration of halal and haram through human desires and madness.");
var book2 = new Book("Aangan", "Khadija Mastoor", 1962, "Historical Fiction", 295, true, "Lahore", "Pakistan", "A story set before partition, highlighting women's roles in political struggle.");
var book3 = new Book("The Reluctant Fundamentalist", "Mohsin Hamid", 2007, "Political Fiction", 184, false, "Lahore", "Pakistan", "A Pakistani man narrates his journey from success in America to disillusionment.");
var book4 = new Book("In Other Rooms, Other Wonders", "Daniyal Mueenuddin", 2009, "Short Story Collection", 247, true, "Lahore", "Pakistan", "Stories about power, class, and the lives of both rich and poor in Pakistan.");
var book5 = new Book("How It Happened", "Shazaf Fatima Haider", 2012, "Comedy / Fiction", 225, true, "Karachi", "Pakistan", "A funny look at arranged marriages in a traditional Shia Muslim family.");

//console print:
console.log(`${book1.title} by ${book1.author} (${book1.yearPublished}) from ${book1.origin.city}, ${book1.origin.country} — Genre: ${book1.genre}, Pages: ${book1.pages}, Available: ${book1.available ? "Yes" : "No"}. Story: ${book1.storyline}`);
console.log(`${book2.title} by ${book2.author} (${book2.yearPublished}) from ${book2.origin.city}, ${book2.origin.country} — Genre: ${book2.genre}, Pages: ${book2.pages}, Available: ${book2.available ? "Yes" : "No"}. Story: ${book2.storyline}`);
console.log(`${book3.title} by ${book3.author} (${book3.yearPublished}) from ${book3.origin.city}, ${book3.origin.country} — Genre: ${book3.genre}, Pages: ${book3.pages}, Available: ${book3.available ? "Yes" : "No"}. Story: ${book3.storyline}`);
console.log(`${book4.title} by ${book4.author} (${book4.yearPublished}) from ${book4.origin.city}, ${book4.origin.country} — Genre: ${book4.genre}, Pages: ${book4.pages}, Available: ${book4.available ? "Yes" : "No"}. Story: ${book4.storyline}`);
console.log(`${book5.title} by ${book5.author} (${book5.yearPublished}) from ${book5.origin.city}, ${book5.origin.country} — Genre: ${book5.genre}, Pages: ${book5.pages}, Available: ${book5.available ? "Yes" : "No"}. Story: ${book5.storyline}`);

//4. Recipe Constructor:
function Recipe(name, type, cookingTime, spicy, ingredients, city, province, story) {
    this.name = name;
    this.type = type;
    this.cookingTime = cookingTime;
    this.spicy = spicy;
    this.ingredients = ingredients;
    this.origin = {
        city: city,
        province: province
    };
    this.story = story;
}

//Creating recipe objects:
var recipe1 = new Recipe("Biryani", "Non-Veg", 90, true, ["Rice", "Chicken", "Yogurt", "Spices", "Tomatoes", "Onions"], "Karachi", "Sindh", "A spicy layered rice dish loved across the country.");
var recipe2 = new Recipe("Nihari", "Non-Veg", 180, true, ["Beef Shank", "Ginger", "Garlic", "Wheat Flour", "Spices"], "Lahore", "Punjab", "A slow-cooked beef stew enjoyed as a royal breakfast.");
var recipe3 = new Recipe("Sohan Halwa", "Sweet", 120, false, ["Sugar", "Milk", "Ghee", "Corn Flour", "Nuts"], "Multan", "Punjab", "A rich traditional sweet famous in southern Punjab.");
var recipe4 = new Recipe("Chapli Kebab", "Non-Veg", 40, true, ["Minced Meat", "Onions", "Tomatoes", "Spices", "Coriander"], "Peshawar", "Khyber Pakhtunkhwa", "A crispy spicy kebab originating from Peshawar.");
var recipe5 = new Recipe("Daal Chawal", "Veg", 35, false, ["Lentils", "Rice", "Onions", "Tomatoes", "Spices"], "Hyderabad", "Sindh", "A comforting everyday lentil and rice dish.");

//console print:
console.log(`${recipe1.name} (${recipe1.type}) from ${recipe1.origin.city}, ${recipe1.origin.province} takes ${recipe1.cookingTime} mins to cook, Spicy: ${recipe1.spicy ? "Yes" : "No"}. Ingredients: ${recipe1.ingredients.join(", ")}. Story: ${recipe1.story}`);
console.log(`${recipe2.name} (${recipe2.type}) from ${recipe2.origin.city}, ${recipe2.origin.province} takes ${recipe2.cookingTime} mins to cook, Spicy: ${recipe2.spicy ? "Yes" : "No"}. Ingredients: ${recipe2.ingredients.join(", ")}. Story: ${recipe2.story}`);
console.log(`${recipe3.name} (${recipe3.type}) from ${recipe3.origin.city}, ${recipe3.origin.province} takes ${recipe3.cookingTime} mins to cook, Spicy: ${recipe3.spicy ? "Yes" : "No"}. Ingredients: ${recipe3.ingredients.join(", ")}. Story: ${recipe3.story}`);
console.log(`${recipe4.name} (${recipe4.type}) from ${recipe4.origin.city}, ${recipe4.origin.province} takes ${recipe4.cookingTime} mins to cook, Spicy: ${recipe4.spicy ? "Yes" : "No"}. Ingredients: ${recipe4.ingredients.join(", ")}. Story: ${recipe4.story}`);
console.log(`${recipe5.name} (${recipe5.type}) from ${recipe5.origin.city}, ${recipe5.origin.province} takes ${recipe5.cookingTime} mins to cook, Spicy: ${recipe5.spicy ? "Yes" : "No"}. Ingredients: ${recipe5.ingredients.join(", ")}. Story: ${recipe5.story}`);

//5. Product Constructor:
function Product(name, category, price, available, madeInPakistan, description) {
    this.name = name;
    this.category = category;
    this.price = price;
    this.available = available;
    this.madeInPakistan = madeInPakistan;
    this.description = description;
}

//Creating product objects:
var product1 = new Product("Brighto Paint", "Paint", 1200, true, true, "High-quality paint suitable for interior and exterior walls.");
var product2 = new Product("Khaadi Shirt", "Clothing", 3500, true, true, "Trendy Pakistani stitched shirt for everyday wear.");
var product3 = new Product("Service Shoes", "Footwear", 2800, true, true, "Durable and stylish shoes for formal and casual use.");
var product4 = new Product("J. Fragrance", "Perfume", 1800, true, true, "Long-lasting fragrance crafted with exotic notes.");
var product5 = new Product("Q&Q Watch", "Watches", 2500, true, true, "Affordable and elegant wristwatch designed for daily use.");

//console print:
console.log(`${product1.name} (${product1.category}) costs Rs.${product1.price}. Available: ${product1.available}. Made in Pakistan: ${product1.madeInPakistan}. ${product1.description}`);
console.log(`${product2.name} (${product2.category}) costs Rs.${product2.price}. Available: ${product2.available}. Made in Pakistan: ${product2.madeInPakistan}. ${product2.description}`);
console.log(`${product3.name} (${product3.category}) costs Rs.${product3.price}. Available: ${product3.available}. Made in Pakistan: ${product3.madeInPakistan}. ${product3.description}`);
console.log(`${product4.name} (${product4.category}) costs Rs.${product4.price}. Available: ${product4.available}. Made in Pakistan: ${product4.madeInPakistan}. ${product4.description}`);
console.log(`${product5.name} (${product5.category}) costs Rs.${product5.price}. Available: ${product5.available}. Made in Pakistan: ${product5.madeInPakistan}. ${product5.description}`);

//6. Pakistani Drama Constructor:
function Drama(title, director, releaseYear, isHit, story) {
    this.title = title;
    this.director = director;
    this.releaseYear = releaseYear;
    this.isHit = isHit;
    this.story = story;
}

//Creating drama objects:
var drama1 = new Drama("Mere Paas Tum Ho", "Nadeem Baig", 2019, true, "A heart-touching story of love, betrayal, and emotions starring Humayun Saeed and Ayeza Khan.");
var drama2 = new Drama("Khaani", "Anjum Shahzad", 2017, true, "The journey of a brave girl who stands up against the killer of her brother.");
var drama3 = new Drama("Tere Bin", "Siraj-ul-Haque", 2022, true, "A complicated love story between Meerab and Murtasim that touched millions of hearts.");
var drama4 = new Drama("Do Bol", "Syed Wajahat Hussain", 2019, true, "A tale of unexpected love between two very different people from different social classes.");
var drama5 = new Drama("BASHAR MOMIN", "Syed Ali Raza Usama", 2014, true, "One of the most expensive dramas in Pakistan, portraying a dark and intense love story.");

//console print:
console.log(`${drama1.title} (${drama1.releaseYear}) - Directed by ${drama1.director}. Hit: ${drama1.isHit}. Story: ${drama1.story}`);
console.log(`${drama2.title} (${drama2.releaseYear}) - Directed by ${drama2.director}. Hit: ${drama2.isHit}. Story: ${drama2.story}`);
console.log(`${drama3.title} (${drama3.releaseYear}) - Directed by ${drama3.director}. Hit: ${drama3.isHit}. Story: ${drama3.story}`);
console.log(`${drama4.title} (${drama4.releaseYear}) - Directed by ${drama4.director}. Hit: ${drama4.isHit}. Story: ${drama4.story}`);
console.log(`${drama5.title} (${drama5.releaseYear}) - Directed by ${drama5.director}. Hit: ${drama5.isHit}. Story: ${drama5.story}`);

//7. Province Constructor:
function Province(name, capital, cities, famousFor, population) {
    this.name = name;
    this.capital = capital;
    this.cities = cities;
    this.details = {
        famousFor: famousFor,
        population: population
    };
}

//Creating province objects:
var province1 = new Province("Punjab", "Lahore", ["Lahore", "Faisalabad", "Rawalpindi"], "Food & Culture", "110 million");
var province2 = new Province("Sindh", "Karachi", ["Karachi", "Hyderabad", "Sukkur"], "Port & Business", "47 million");
var province3 = new Province("Khyber Pakhtunkhwa", "Peshawar", ["Peshawar", "Abbottabad", "Swat"], "Mountains & Hospitality", "35 million");
var province4 = new Province("Balochistan", "Quetta", ["Quetta", "Gwadar", "Zhob"], "Minerals & Mountains", "12 million");
var province5 = new Province("Gilgit-Baltistan", "Gilgit", ["Gilgit", "Skardu", "Hunza"], "Tourism & Peaks", "2 million");

//console print:
console.log(`Province: ${province1.name}, Capital: ${province1.capital}, Cities: ${province1.cities.join(", ")}, Famous For: ${province1.details.famousFor}, Population: ${province1.details.population}`);
console.log(`Province: ${province2.name}, Capital: ${province2.capital}, Cities: ${province2.cities.join(", ")}, Famous For: ${province2.details.famousFor}, Population: ${province2.details.population}`);
console.log(`Province: ${province3.name}, Capital: ${province3.capital}, Cities: ${province3.cities.join(", ")}, Famous For: ${province3.details.famousFor}, Population: ${province3.details.population}`);
console.log(`Province: ${province4.name}, Capital: ${province4.capital}, Cities: ${province4.cities.join(", ")}, Famous For: ${province4.details.famousFor}, Population: ${province4.details.population}`);
console.log(`Province: ${province5.name}, Capital: ${province5.capital}, Cities: ${province5.cities.join(", ")}, Famous For: ${province5.details.famousFor}, Population: ${province5.details.population}`);

//8. Computer Course Constructor:
function Course(title, provider, technologies, city, institute, duration) {
    this.title = title;
    this.provider = provider;
    this.technologies = technologies;
    this.location = {
        city: city,
        institute: institute
    };
    this.duration = duration;
}

//Creating course objects:
var course1 = new Course("Web Development", "SMIT", ["HTML", "CSS", "JavaScript"], "Karachi", "Saylani", "6 months");
var course2 = new Course("Graphic Designing", "DigiSkills", ["Photoshop", "Illustrator", "InDesign"], "Lahore", "Virtual University", "3 months");
var course3 = new Course("Data Science", "PIAIC", ["Python", "Pandas", "Machine Learning"], "Islamabad", "NED University", "1 year");
var course4 = new Course("Cyber Security", "Aptech", ["Networking", "Ethical Hacking", "Linux"], "Rawalpindi", "Aptech Learning", "1 year");
var course5 = new Course("Mobile App Development", "GIAIC", ["Flutter", "React Native", "Firebase"], "Hyderabad", "Governor House Initiative", "6 months");

//console print:
console.log(`${course1.title} by ${course1.provider} in ${course1.location.city}, covers ${course1.technologies.join(", ")}, duration: ${course1.duration}`);
console.log(`${course2.title} by ${course2.provider} in ${course2.location.city}, covers ${course2.technologies.join(", ")}, duration: ${course2.duration}`);
console.log(`${course3.title} by ${course3.provider} in ${course3.location.city}, covers ${course3.technologies.join(", ")}, duration: ${course3.duration}`);
console.log(`${course4.title} by ${course4.provider} in ${course4.location.city}, covers ${course4.technologies.join(", ")}, duration: ${course4.duration}`);
console.log(`${course5.title} by ${course5.provider} in ${course5.location.city}, covers ${course5.technologies.join(", ")}, duration: ${course5.duration}`);

//9. Game Constructor:
function Game(name, type, popularCities, players, equipment, origin) {
    this.name = name;
    this.type = type;
    this.popularCities = popularCities;
    this.team = {
        players: players,
        equipment: equipment
    };
    this.origin = origin;
}

//Creating game objects:
var game1 = new Game("Cricket", "Outdoor", ["Lahore", "Karachi", "Multan"], 11, ["Bat", "Ball", "Stumps"], "England");
var game2 = new Game("Ludo", "Indoor", ["Rawalpindi", "Hyderabad"], [2, 4], ["Board", "Tokens"], "India");
var game3 = new Game("Kabaddi", "Outdoor", ["Punjab", "Sindh"], 7, ["No equipment"], "India");
var game4 = new Game("Gilli Danda", "Traditional Outdoor", ["Villages", "Small towns"], 2, ["Gilli", "Danda"], "India");
var game5 = new Game("Carrom Board", "Indoor", ["All cities"], [2, 4], ["Board", "Coins", "Striker"], "India");

//console print:
console.log(`${game1.name} is an ${game1.type} game, popular in ${game1.popularCities.join(", ")}, played with ${game1.team.equipment.join(", ")}, ${game1.team.players} players per team, originated from ${game1.origin}.`);
console.log(`${game2.name} is an ${game2.type} game, popular in ${game2.popularCities.join(", ")}, usually played by ${game2.team.players.join(" or ")} players, originated from ${game2.origin}.`);
console.log(`${game3.name} is an ${game3.type} game, popular in ${game3.popularCities.join(", ")}, played by ${game3.team.players} players per team, originated from ${game3.origin}.`);
console.log(`${game4.name} is a ${game4.type} game, played in ${game4.popularCities.join(", ")}, uses ${game4.team.equipment.join(" and ")}, originated from ${game4.origin}.`);
console.log(`${game5.name} is an ${game5.type} game, played by ${game5.team.players.join(" or ")} players, originated from ${game5.origin}.`);

//10. Makeup Constructor:
function Makeup(name, type, shades, brand, price, special) {
    this.name = name;
    this.type = type;
    this.shades = shades;
    this.brand = brand;
    this.price = price;
    this.special = special;
}

//Creating makeup objects:
var makeup1 = new Makeup("Lipstick", "Cosmetic", ["Red", "Nude", "Pink"], "Maybelline", "Rs.1200", "Long lasting");
var makeup2 = new Makeup("Foundation", "Base Makeup", ["Fair", "Medium", "Olive"], "L'Oréal", "Rs.2500", "Full coverage");
var makeup3 = new Makeup("Mascara", "Eye Makeup", ["Black", "Brown"], "Essence", "Rs.950", "Waterproof");
var makeup4 = new Makeup("Blush", "Face Makeup", ["Peach", "Rosy", "Coral"], "Milani", "Rs.1800", "Matte finish");
var makeup5 = new Makeup("Eyeliner", "Eye Makeup", ["Black", "Brown"], "Rivaj UK", "Rs.650", "Smudge proof");

//console print:
console.log(`${makeup1.name} is a ${makeup1.type} item by ${makeup1.brand}, available in shades: ${makeup1.shades.join(", ")}, priced at ${makeup1.price}, ${makeup1.special}.`);
console.log(`${makeup2.name} is a ${makeup2.type} by ${makeup2.brand}, available in ${makeup2.shades.join(", ")} tones, ${makeup2.special}, priced at ${makeup2.price}.`);
console.log(`${makeup3.name} is an ${makeup3.type} product by ${makeup3.brand}, available in ${makeup3.shades.join(", ")}, ${makeup3.special}, priced at ${makeup3.price}.`);
console.log(`${makeup4.name} is a ${makeup4.type} item by ${makeup4.brand}, shades: ${makeup4.shades.join(", ")}, ${makeup4.special}, price: ${makeup4.price}.`);
console.log(`${makeup5.name} is an ${makeup5.type} product by ${makeup5.brand}, shades: ${makeup5.shades.join(", ")}, ${makeup5.special}, price: ${makeup5.price}.`);

// Display total count
console.log("\n=== SUMMARY ===");
console.log("Total objects created: 50");
console.log("All objects now use constructor functions with 'this' keyword!");
console.log("Categories: Teachers, People, Books, Recipes, Products, Dramas, Provinces, Courses, Games, Makeup");