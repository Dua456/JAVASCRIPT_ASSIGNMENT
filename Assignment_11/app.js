
// Create 50 Objects with Keys:
// Create JavaScript 50 objects.
// Add keys in it.
// Keys and values will be your own choice
// Values can be string, number, array, object — anything valid in JS.
// Show some output using console.log.

//1. Teachers Objects:

//object 1:
var teacher1 = {
    name: "Miss Minahil Irfan",
    subject: "HTML/CSS",
    experience: 5
}

//object 2:
var teacher2 = {
    name: "Miss Sana",
    subject: "Python",
    experience: 3
}

//object 3:
var teacher3 = {
    name: "Sir Ahsan",
    subject: "JavaScript",
    experience: 4.9
}

//object 4:
var teacher4 = {
    name: "Sir Kashif",
    subject: "React",
    experience: 2
}

//object 5:
var teacher5 = {
    name: "Miss Hina",
    subject: "Degital Markiting",
    experience: 4
}

console.log(`${teacher1.name} teaches ${teacher1.subject} with ${teacher1.experience} years experience.`);
console.log(`${teacher2.name} teaches ${teacher2.subject} with ${teacher2.experience} years experience.`);
console.log(` ${teacher3.name} teaches ${teacher3.subject} with ${teacher3.experience} years experience.`);
console.log(` ${teacher4.name} teaches ${teacher4.subject} with ${teacher4.experience} years experience.`);
console.log(`${teacher5.name} teaches ${teacher5.subject} with ${teacher5.experience} years experience.`);


//2. Pakistani people objects:

//object 6:
var people1 = {
    name: "Abdul Sattar Edhi",
    gender: "Male",
    yearOfBirth: 1928,
    alive: false,
    knownFor: ["Charity", "Edhi Foundation", "Humanitarian Work"],
    origin: {
        city: "Karachi",
        province: "Sindh"
    },
    story: "He dedicated his life to serving humanity selflessly."
}

//object 7:
var people2 = {
    name: "Malala Yousafzai",
    gender: "Female",
    yearOfBirth: 1997,
    alive: true,
    knownFor: ["Education", "Peace", "Nobel Prize"],
    origin: {
        city: "Mingora",
        province: "Khyber Pakhtunkhwa"
    },
    story: "She stood up for girls' education against all odds."
}

//object 8:
var people3 = {
    name: "Wasim Akram",
    gender: "Male",
    yearOfBirth: 1966,
    alive: true,
    knownFor: ["Cricket", "Swing Bowling"],
    origin: {
        city: "Lahore",
        province: "Punjab"
    },
    story: "He ruled the world of fast bowling with his swing magic."
}

//object 9:
var people4 = {
    name: "Benazir Bhutto",
    gender: "Female",
    yearOfBirth: 1953,
    alive: false,
    knownFor: ["Politics", "First Female PM of Pakistan"],
    origin: {
        city: "Larkana",
        province: "Sindh"
    },
    story: "She became the first woman to lead a Muslim nation."
}

//object 10:
var people5 = {
    name: "Arfa Karim",
    gender: "Female",
    yearOfBirth: 1995,
    alive: false,
    knownFor: ["Technology", "Microsoft", "Child Prodigy"],
    origin: {
        city: "Faisalabad",
        province: "Punjab"
    },
    story: "She became the youngest Microsoft Certified Professional."
}

console.log(`${people1.name} (${people1.gender}, born in ${people1.yearOfBirth}) from ${people1.origin.city}, ${people1.origin.province}, is ${people1.alive ? "alive" : "not alive"}, known for ${people1.knownFor.join(", ")}. Story: ${people1.story}`);
console.log(`${people2.name} (${people2.gender}, born in ${people2.yearOfBirth}) from ${people2.origin.city}, ${people2.origin.province}, is ${people2.alive ? "alive" : "not alive"}, known for ${people2.knownFor.join(", ")}. Story: ${people2.story}`);
console.log(`${people3.name} (${people3.gender}, born in ${people3.yearOfBirth}) from ${people3.origin.city}, ${people3.origin.province}, is ${people3.alive ? "alive" : "not alive"}, known for ${people3.knownFor.join(", ")}. Story: ${people3.story}`);
console.log(`${people4.name} (${people4.gender}, born in ${people4.yearOfBirth}) from ${people4.origin.city}, ${people4.origin.province}, is ${people4.alive ? "alive" : "not alive"}, known for ${people4.knownFor.join(", ")}. Story: ${people4.story}`);
console.log(`${people5.name} (${people5.gender}, born in ${people5.yearOfBirth}) from ${people5.origin.city}, ${people5.origin.province}, is ${people5.alive ? "alive" : "not alive"}, known for ${people5.knownFor.join(", ")}. Story: ${people5.story}`);


//3. Book objects (Pakistani)

//object 11:
var book1 = {
    title: "Raja Gidh",
    author: "Bano Qudsia",
    yearPublished: 1981,
    genre: "Philosophical Fiction",
    pages: 342,
    available: true,
    origin: {
        city: "Lahore",
        country: "Pakistan"
    },
    storyline: "A philosophical exploration of halal and haram through human desires and madness."
}

//object 12:
var book2 = {
    title: "Aangan",
    author: "Khadija Mastoor",
    yearPublished: 1962,
    genre: "Historical Fiction",
    pages: 295,
    available: true,
    origin: {
        city: "Lahore",
        country: "Pakistan"
    },
    storyline: "A story set before partition, highlighting women’s roles in political struggle."
}

//object 13:
var book3 = {
    title: "The Reluctant Fundamentalist",
    author: "Mohsin Hamid",
    yearPublished: 2007,
    genre: "Political Fiction",
    pages: 184,
    available: false,
    origin: {
        city: "Lahore",
        country: "Pakistan"
    },
    storyline: "A Pakistani man narrates his journey from success in America to disillusionment."
}

//object 14:
var book4 = {
    title: "In Other Rooms, Other Wonders",
    author: "Daniyal Mueenuddin",
    yearPublished: 2009,
    genre: "Short Story Collection",
    pages: 247,
    available: true,
    origin: {
        city: "Lahore",
        country: "Pakistan"
    },
    storyline: "Stories about power, class, and the lives of both rich and poor in Pakistan."
}

//object 15:
var book5 = {
    title: "How It Happened",
    author: "Shazaf Fatima Haider",
    yearPublished: 2012,
    genre: "Comedy / Fiction",
    pages: 225,
    available: true,
    origin: {
        city: "Karachi",
        country: "Pakistan"
    },
    storyline: "A funny look at arranged marriages in a traditional Shia Muslim family."
}

console.log(`${book1.title} by ${book1.author} (${book1.yearPublished}) from ${book1.origin.city}, ${book1.origin.country} — Genre: ${book1.genre}, Pages: ${book1.pages}, Available: ${book1.available ? "Yes" : "No"}. Story: ${book1.storyline}`);
console.log(`${book2.title} by ${book2.author} (${book2.yearPublished}) from ${book2.origin.city}, ${book2.origin.country} — Genre: ${book2.genre}, Pages: ${book2.pages}, Available: ${book2.available ? "Yes" : "No"}. Story: ${book2.storyline}`);
console.log(`${book3.title} by ${book3.author} (${book3.yearPublished}) from ${book3.origin.city}, ${book3.origin.country} — Genre: ${book3.genre}, Pages: ${book3.pages}, Available: ${book3.available ? "Yes" : "No"}. Story: ${book3.storyline}`);
console.log(`${book4.title} by ${book4.author} (${book4.yearPublished}) from ${book4.origin.city}, ${book4.origin.country} — Genre: ${book4.genre}, Pages: ${book4.pages}, Available: ${book4.available ? "Yes" : "No"}. Story: ${book4.storyline}`);
console.log(`${book5.title} by ${book5.author} (${book5.yearPublished}) from ${book5.origin.city}, ${book5.origin.country} — Genre: ${book5.genre}, Pages: ${book5.pages}, Available: ${book5.available ? "Yes" : "No"}. Story: ${book5.storyline}`);


//4. receipe Object

//object 16:
var recipe1 = {
    name: "Biryani",
    type: "Non-Veg",
    cookingTime: 90,
    spicy: true,
    ingredients: ["Rice", "Chicken", "Yogurt", "Spices", "Tomatoes", "Onions"],
    origin: {
        city: "Karachi",
        province: "Sindh"
    },
    story: "A spicy layered rice dish loved across the country."
}

//object 17:
var recipe2 = {
    name: "Nihari",
    type: "Non-Veg",
    cookingTime: 180,
    spicy: true,
    ingredients: ["Beef Shank", "Ginger", "Garlic", "Wheat Flour", "Spices"],
    origin: {
        city: "Lahore",
        province: "Punjab"
    },
    story: "A slow-cooked beef stew enjoyed as a royal breakfast."
}

//object 18:
var recipe3 = {
    name: "Sohan Halwa",
    type: "Sweet",
    cookingTime: 120,
    spicy: false,
    ingredients: ["Sugar", "Milk", "Ghee", "Corn Flour", "Nuts"],
    origin: {
        city: "Multan",
        province: "Punjab"
    },
    story: "A rich traditional sweet famous in southern Punjab."
}

//object 19:
var recipe4 = {
    name: "Chapli Kebab",
    type: "Non-Veg",
    cookingTime: 40,
    spicy: true,
    ingredients: ["Minced Meat", "Onions", "Tomatoes", "Spices", "Coriander"],
    origin: {
        city: "Peshawar",
        province: "Khyber Pakhtunkhwa"
    },
    story: "A crispy spicy kebab originating from Peshawar."
}

//object 20:
var recipe5 = {
    name: "Daal Chawal",
    type: "Veg",
    cookingTime: 35,
    spicy: false,
    ingredients: ["Lentils", "Rice", "Onions", "Tomatoes", "Spices"],
    origin: {
        city: "Hyderabad",
        province: "Sindh"
    },
    story: "A comforting everyday lentil and rice dish."
}

console.log(`${recipe1.name} (${recipe1.type}) from ${recipe1.origin.city}, ${recipe1.origin.province} takes ${recipe1.cookingTime} mins to cook, Spicy: ${recipe1.spicy ? "Yes" : "No"}. Ingredients: ${recipe1.ingredients.join(", ")}. Story: ${recipe1.story}`);
console.log(`${recipe2.name} (${recipe2.type}) from ${recipe2.origin.city}, ${recipe2.origin.province} takes ${recipe2.cookingTime} mins to cook, Spicy: ${recipe2.spicy ? "Yes" : "No"}. Ingredients: ${recipe2.ingredients.join(", ")}. Story: ${recipe2.story}`);
console.log(`${recipe3.name} (${recipe3.type}) from ${recipe3.origin.city}, ${recipe3.origin.province} takes ${recipe3.cookingTime} mins to cook, Spicy: ${recipe3.spicy ? "Yes" : "No"}. Ingredients: ${recipe3.ingredients.join(", ")}. Story: ${recipe3.story}`);
console.log(`${recipe4.name} (${recipe4.type}) from ${recipe4.origin.city}, ${recipe4.origin.province} takes ${recipe4.cookingTime} mins to cook, Spicy: ${recipe4.spicy ? "Yes" : "No"}. Ingredients: ${recipe4.ingredients.join(", ")}. Story: ${recipe4.story}`);
console.log(`${recipe5.name} (${recipe5.type}) from ${recipe5.origin.city}, ${recipe5.origin.province} takes ${recipe5.cookingTime} mins to cook, Spicy: ${recipe5.spicy ? "Yes" : "No"}. Ingredients: ${recipe5.ingredients.join(", ")}. Story: ${recipe5.story}`);


//5. Product Objects:

//object 21:
var product1 = {
    name: "Brighto Paint",
    category: "Paint",
    price: 1200,
    available: true,
    madeInPakistan: true,
    description: "High-quality paint suitable for interior and exterior walls."
}

//object 22:
var product2 = {
    name: "Khaadi Shirt",
    category: "Clothing",
    price: 3500,
    available: true,
    madeInPakistan: true,
    description: "Trendy Pakistani stitched shirt for everyday wear."
}

//object 23:
var product3 = {
    name: "Service Shoes",
    category: "Footwear",
    price: 2800,
    available: true,
    madeInPakistan: true,
    description: "Durable and stylish shoes for formal and casual use."
}

//object 24:
var product4 = {
    name: "J. Fragrance",
    category: "Perfume",
    price: 1800,
    available: true,
    madeInPakistan: true,
    description: "Long-lasting fragrance crafted with exotic notes."
}

//object 25:
var product5 = {
    name: "Q&Q Watch",
    category: "Watches",
    price: 2500,
    available: true,
    madeInPakistan: true,
    description: "Affordable and elegant wristwatch designed for daily use."
}

console.log(`${product1.name} (${product1.category}) costs Rs.${product1.price}. Available: ${product1.available}. Made in Pakistan: ${product1.madeInPakistan}. ${product1.description}`);
console.log(`${product2.name} (${product2.category}) costs Rs.${product2.price}. Available: ${product2.available}. Made in Pakistan: ${product2.madeInPakistan}. ${product2.description}`);
console.log(`${product3.name} (${product3.category}) costs Rs.${product3.price}. Available: ${product3.available}. Made in Pakistan: ${product3.madeInPakistan}. ${product3.description}`);
console.log(`${product4.name} (${product4.category}) costs Rs.${product4.price}. Available: ${product4.available}. Made in Pakistan: ${product4.madeInPakistan}. ${product4.description}`);
console.log(`${product5.name} (${product5.category}) costs Rs.${product5.price}. Available: ${product5.available}. Made in Pakistan: ${product5.madeInPakistan}. ${product5.description}`);


//6. pakistani Drama objects:

//object 26:
var drama1 = {
    title: "Mere Paas Tum Ho",
    director: "Nadeem Baig",
    releaseYear: 2019,
    isHit: true,
    story: "A heart-touching story of love, betrayal, and emotions starring Humayun Saeed and Ayeza Khan."
}

//object 27:
var drama2 = {
    title: "Khaani",
    director: "Anjum Shahzad",
    releaseYear: 2017,
    isHit: true,
    story: "The journey of a brave girl who stands up against the killer of her brother."
}

//object 28:
var drama3 = {
    title: "Tere Bin",
    director: "Siraj-ul-Haque",
    releaseYear: 2022,
    isHit: true,
    story: "A complicated love story between Meerab and Murtasim that touched millions of hearts."
}

//object 29:
var drama4 = {
    title: "Do Bol",
    director: "Syed Wajahat Hussain",
    releaseYear: 2019,
    isHit: true,
    story: "A tale of unexpected love between two very different people from different social classes."
}

//object 30:
var drama5 = {
    title: "BASHAR MOMIN",
    director: "Syed Ali Raza Usama",
    releaseYear: 2014,
    isHit: true,
    story: "One of the most expensive dramas in Pakistan, portraying a dark and intense love story."
}

console.log(`${drama1.title} (${drama1.releaseYear}) - Directed by ${drama1.director}. Hit: ${drama1.isHit}. Story: ${drama1.story}`);
console.log(`${drama2.title} (${drama2.releaseYear}) - Directed by ${drama2.director}. Hit: ${drama2.isHit}. Story: ${drama2.story}`);
console.log(`${drama3.title} (${drama3.releaseYear}) - Directed by ${drama3.director}. Hit: ${drama3.isHit}. Story: ${drama3.story}`);
console.log(`${drama4.title} (${drama4.releaseYear}) - Directed by ${drama4.director}. Hit: ${drama4.isHit}. Story: ${drama4.story}`);
console.log(`${drama5.title} (${drama5.releaseYear}) - Directed by ${drama5.director}. Hit: ${drama5.isHit}. Story: ${drama5.story}`);


//7. Countries:

//object 31:
var province1 = {
    name: "Punjab",
    capital: "Lahore",
    cities: ["Lahore", "Faisalabad", "Rawalpindi"],
    details: {
        famousFor: "Food & Culture",
        population: "110 million"
    }
}

//object 32:
var province2 = {
    name: "Sindh",
    capital: "Karachi",
    cities: ["Karachi", "Hyderabad", "Sukkur"],
    details: {
        famousFor: "Port & Business",
        population: "47 million"
    }
}

//object 33:
var province3 = {
    name: "Khyber Pakhtunkhwa",
    capital: "Peshawar",
    cities: ["Peshawar", "Abbottabad", "Swat"],
    details: {
        famousFor: "Mountains & Hospitality",
        population: "35 million"
    }
}

//object 34:
var province4 = {
    name: "Balochistan",
    capital: "Quetta",
    cities: ["Quetta", "Gwadar", "Zhob"],
    details: {
        famousFor: "Minerals & Mountains",
        population: "12 million"
    }
}

//object 35:
var province5 = {
    name: "Gilgit-Baltistan",
    capital: "Gilgit",
    cities: ["Gilgit", "Skardu", "Hunza"],
    details: {
        famousFor: "Tourism & Peaks",
        population: "2 million"
    }
}

console.log(`Province: ${province1.name}, Capital: ${province1.capital}, Cities: ${province1.cities.join(", ")}, Famous For: ${province1.details.famousFor}, Population: ${province1.details.population}`);
console.log(`Province: ${province2.name}, Capital: ${province2.capital}, Cities: ${province2.cities.join(", ")}, Famous For: ${province2.details.famousFor}, Population: ${province2.details.population}`);
console.log(`Province: ${province3.name}, Capital: ${province3.capital}, Cities: ${province3.cities.join(", ")}, Famous For: ${province3.details.famousFor}, Population: ${province3.details.population}`);
console.log(`Province: ${province4.name}, Capital: ${province4.capital}, Cities: ${province4.cities.join(", ")}, Famous For: ${province4.details.famousFor}, Population: ${province4.details.population}`);
console.log(`Province: ${province5.name}, Capital: ${province5.capital}, Cities: ${province5.cities.join(", ")}, Famous For: ${province5.details.famousFor}, Population: ${province5.details.population}`);

//8. computer Courses objects:

//object 36:
var course1 = {
    title: "Web Development",
    provider: "SMIT",
    technologies: ["HTML", "CSS", "JavaScript"],
    location: {
        city: "Karachi",
        institute: "Saylani"
    },
    duration: "6 months"
}

//object 37:
var course2 = {
    title: "Graphic Designing",
    provider: "DigiSkills",
    technologies: ["Photoshop", "Illustrator", "InDesign"],
    location: {
        city: "Lahore",
        institute: "Virtual University"
    },
    duration: "3 months"
}

//object 38:
var course3 = {
    title: "Data Science",
    provider: "PIAIC",
    technologies: ["Python", "Pandas", "Machine Learning"],
    location: {
        city: "Islamabad",
        institute: "NED University"
    },
    duration: "1 year"
}

//object 39:
var course4 = {
    title: "Cyber Security",
    provider: "Aptech",
    technologies: ["Networking", "Ethical Hacking", "Linux"],
    location: {
        city: "Rawalpindi",
        institute: "Aptech Learning"
    },
    duration: "1 year"
}

//object 40:
var course5 = {
    title: "Mobile App Development",
    provider: "GIAIC",
    technologies: ["Flutter", "React Native", "Firebase"],
    location: {
        city: "Hyderabad",
        institute: "Governor House Initiative"
    },
    duration: "6 months"
}

console.log(`${course1.title} by ${course1.provider} in ${course1.location.city}, covers ${course1.technologies.join(", ")}, duration: ${course1.duration}`);
console.log(`${course2.title} by ${course2.provider} in ${course2.location.city}, covers ${course2.technologies.join(", ")}, duration: ${course2.duration}`);
console.log(`${course3.title} by ${course3.provider} in ${course3.location.city}, covers ${course3.technologies.join(", ")}, duration: ${course3.duration}`);
console.log(`${course4.title} by ${course4.provider} in ${course4.location.city}, covers ${course4.technologies.join(", ")}, duration: ${course4.duration}`);
console.log(`${course5.title} by ${course5.provider} in ${course5.location.city}, covers ${course5.technologies.join(", ")}, duration: ${course5.duration}`);

//9. game Objects:

//object 41: 
let game1 = {
    name: "Cricket",
    type: "Outdoor",
    popularCities: ["Lahore", "Karachi", "Multan"],
    team: {
        players: 11,
        equipment: ["Bat", "Ball", "Stumps"]
    },
    origin: "England"
}

//object 42: 
let game2 = {
    name: "Ludo",
    type: "Indoor",
    popularCities: ["Rawalpindi", "Hyderabad"],
    players: [2, 4],
    origin: "India",
    board: {
        shape: "Square",
        tokens: 4
    }
}

// object 43:
let game3 = {
    name: "Kabaddi",
    type: "Outdoor",
    popularIn: ["Punjab", "Sindh"],
    team: {
        players: 7,
        rules: "Tag and touch"
    },
    traditional: true
}

//object 44: 
let game4 = {
    name: "Gilli Danda",
    type: "Traditional Outdoor",
    equipment: ["Gilli", "Danda"],
    playedIn: ["Villages", "Small towns"],
    funLevel: "High"
}

//object 45: 
let game5 = {
    name: "Carrom Board",
    type: "Indoor",
    players: [2, 4],
    pieces: {
        coins: 19,
        striker: 1
    },
    popularAmong: ["Teens", "Families"]
}


console.log(`${game1.name} is an ${game1.type} game, popular in ${game1.popularCities.join(", ")}, played with ${game1.team.equipment.join(", ")}, ${game1.team.players} players per team, originated from ${game1.origin}.`);
console.log(`${game2.name} is an ${game2.type} game, popular in ${game2.popularCities.join(", ")}, usually played by ${game2.players.join(" or ")} players, board shape is ${game2.board.shape}, originated from ${game2.origin}.`);
console.log(`${game3.name} is an ${game3.type} game, popular in ${game3.popularIn.join(", ")}, played by ${game3.team.players} players per team, rule: ${game3.team.rules}, traditional: ${game3.traditional}.`);
console.log(`${game4.name} is a ${game4.type} game, played in ${game4.playedIn.join(", ")}, uses ${game4.equipment.join(" and ")}, fun level is ${game4.funLevel}.`);
console.log(`${game5.name} is an ${game5.type} game, played by ${game5.players.join(" or ")} players, has ${game5.pieces.coins} coins and ${game5.pieces.striker} striker, popular among ${game5.popularAmong.join(", ")}.`);

//Makeup Objects:

//object 46:  
let makeup1 = {
    name: "Lipstick",
    type: "Cosmetic",
    shades: ["Red", "Nude", "Pink"],
    brand: "Maybelline",
    price: "Rs.1200"
}

//object 47: 
let makeup2 = {
    name: "Foundation",
    type: "Base Makeup",
    tones: ["Fair", "Medium", "Olive"],
    brand: "L'Oréal",
    coverage: "Full",
    price: "Rs.2500"
}

//object 48: 
let makeup3 = {
    name: "Mascara",
    type: "Eye Makeup",
    brand: "Essence",
    waterproof: true,
    effect: "Length & Volume",
    price: "Rs.950"
}

//object 49: 
let makeup4 = {
    name: "Blush",
    type: "Face Makeup",
    shades: ["Peach", "Rosy", "Coral"],
    brand: "Milani",
    finish: "Matte",
    price: "Rs.1800"
}

//object 50: 
let makeup5 = {
    name: "Eyeliner",
    type: "Eye Makeup",
    style: ["Liquid", "Pencil", "Gel"],
    brand: "Rivaj UK",
    smudgeProof: true,
    price: "Rs.650"
}

console.log(`${makeup1.name} is a ${makeup1.type} item by ${makeup1.brand}, available in shades: ${makeup1.shades.join(", ")}, priced at ${makeup1.price}.`);
console.log(`${makeup2.name} is a ${makeup2.type} by ${makeup2.brand}, available in ${makeup2.tones.join(", ")} tones, provides ${makeup2.coverage} coverage, priced at ${makeup2.price}.`);
console.log(`${makeup3.name} is an ${makeup3.type} product by ${makeup3.brand}, waterproof: ${makeup3.waterproof}, effect: ${makeup3.effect}, priced at ${makeup3.price}.`);
console.log(`${makeup4.name} is a ${makeup4.type} item by ${makeup4.brand}, shades: ${makeup4.shades.join(", ")}, finish: ${makeup4.finish}, price: ${makeup4.price}.`);
console.log(`${makeup5.name} is an ${makeup5.type} product by ${makeup5.brand}, styles: ${makeup5.style.join(", ")}, smudge-proof: ${makeup5.smudgeProof}, price: ${makeup5.price}.`);
