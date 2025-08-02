
// Create 50 Objects with Keys:
// Create JavaScript 50 objects.
// Add keys in it.
// Keys and values will be your own choice
// Values can be string, number, array, object — anything valid in JS.
// Show some output using console.log.

// Student Constructor Function
function Student(name, age, course, grades, contact) {
    this.name = name;
    this.age = age;
    this.course = course;
    this.grades = grades; // Array of subject grades
    this.contact = contact; // Nested object
}

// Array of 50 Student Objects
const students = [
    new Student("Ali", 20, "Web Development", [85, 90, 78], { email: "ali@gmail.com", phone: "03001234567" }),
    new Student("Sara Khan", 22, "AI & ML", [88, 92, 89], { email: "sara@gmail.com", phone: "03009876543" }),
    new Student("Ahmed Bilal", 19, "Data Science", [75, 80, 84], { email: "ahmed@gmail.com", phone: "03005678901" }),
    new Student("Ayesha Noor", 21, "UI/UX Design", [90, 95, 87], { email: "ayesha@gmail.com", phone: "03004561234" }),
    new Student("Zainab Fatima", 23, "Cloud Computing", [82, 88, 79], { email: "zainab@gmail.com", phone: "03006781234" }),
    new Student("Usman Javed", 24, "Cybersecurity", [70, 76, 69], { email: "usman@gmail.com", phone: "03003456789" }),
    new Student("Mariam Ali", 20, "Software Engineering", [88, 91, 85], { email: "mariam@gmail.com", phone: "03007895432" }),
    new Student("Hamza Sheikh", 22, "DevOps", [84, 87, 90], { email: "hamza@gmail.com", phone: "03001234987" }),
    new Student("Hira Iqbal", 19, "AI & ML", [79, 88, 82], { email: "hira@gmail.com", phone: "03006789234" }),
    new Student("Faisal Abbas", 23, "Web Development", [92, 85, 89], { email: "faisal@gmail.com", phone: "03009871234" }),
    new Student("Noor Hassan", 21, "UI/UX Design", [91, 87, 84], { email: "noor@gmail.com", phone: "03007891234" }),
    new Student("Sana Tariq", 20, "Cloud Computing", [83, 80, 78], { email: "sana@gmail.com", phone: "03001238765" }),
    new Student("Bilal Asif", 24, "Cybersecurity", [75, 73, 77], { email: "bilal@gmail.com", phone: "03003459876" }),
    new Student("Iqra Saeed", 21, "Software Engineering", [88, 91, 90], { email: "iqra@gmail.com", phone: "03007899876" }),
    new Student("Taha Ahmed", 20, "Data Science", [86, 85, 88], { email: "taha@gmail.com", phone: "03005678876" }),
    new Student("Fatima Zahra", 19, "Web Development", [93, 90, 89], { email: "fatima@gmail.com", phone: "03006789876" }),
    new Student("Rehan Malik", 22, "AI & ML", [89, 92, 87], { email: "rehan@gmail.com", phone: "03006784567" }),
    new Student("Lubna Hassan", 23, "UI/UX Design", [82, 85, 88], { email: "lubna@gmail.com", phone: "03006783456" }),
    new Student("Imran Qureshi", 24, "Cloud Computing", [78, 81, 75], { email: "imran@gmail.com", phone: "03006782345" }),
    new Student("Anam Baloch", 21, "Cybersecurity", [85, 88, 83], { email: "anam@gmail.com", phone: "03006781234" }),
    new Student("Yasir Ali", 20, "Software Engineering", [90, 92, 88], { email: "yasir@gmail.com", phone: "03009872134" }),
    new Student("Nida Rehman", 22, "Data Science", [80, 85, 84], { email: "nida@gmail.com", phone: "03008765432" }),
    new Student("Hassan Jameel", 23, "DevOps", [86, 89, 90], { email: "hassan@gmail.com", phone: "03003458976" }),
    new Student("Rida Khan", 19, "AI & ML", [88, 84, 79], { email: "rida@gmail.com", phone: "03001239876" }),
    new Student("Shoaib Akhtar", 21, "Web Development", [77, 81, 74], { email: "shoaib@gmail.com", phone: "03003457891" }),
    new Student("Neha Iqbal", 24, "UI/UX Design", [89, 90, 85], { email: "neha@gmail.com", phone: "03008764567" }),
    new Student("Zeeshan Ali", 20, "Cybersecurity", [80, 82, 78], { email: "zeeshan@gmail.com", phone: "03005678923" }),
    new Student("Mehwish Javed", 23, "Cloud Computing", [85, 86, 88], { email: "mehwish@gmail.com", phone: "03003456723" }),
    new Student("Adnan Rafiq", 22, "Software Engineering", [92, 94, 90], { email: "adnan@gmail.com", phone: "03006789456" }),
    new Student("Laiba Fatima", 19, "AI & ML", [78, 80, 79], { email: "laiba@gmail.com", phone: "03001239887" }),
    new Student("Asim Iqbal", 21, "Data Science", [84, 86, 88], { email: "asim@gmail.com", phone: "03003458912" }),
    new Student("Zoya Tariq", 24, "UI/UX Design", [90, 93, 92], { email: "zoya@gmail.com", phone: "03007892345" }),
    new Student("Hamid Bashir", 20, "Cloud Computing", [88, 85, 89], { email: "hamid@gmail.com", phone: "03009872123" }),
    new Student("Hina Ashraf", 22, "Web Development", [75, 80, 77], { email: "hina@gmail.com", phone: "03005678234" }),
    new Student("Rafay Shah", 21, "AI & ML", [91, 89, 93], { email: "rafay@gmail.com", phone: "03003458721" }),
    new Student("Anaya Saeed", 23, "Cybersecurity", [86, 87, 88], { email: "anaya@gmail.com", phone: "03001234987" }),
    new Student("Kashif Ali", 19, "DevOps", [83, 85, 82], { email: "kashif@gmail.com", phone: "03006782345" }),
    new Student("Nashit Riaz", 24, "Cloud Computing", [76, 78, 74], { email: "nashit@gmail.com", phone: "03007891234" }),
    new Student("Sundas Ahmed", 20, "Software Engineering", [89, 91, 92], { email: "sundas@gmail.com", phone: "03005678123" }),
    new Student("Talha Mehmood", 22, "Web Development", [85, 80, 82], { email: "talha@gmail.com", phone: "03009874567" }),
    new Student("Rabia Jamil", 21, "UI/UX Design", [90, 92, 91], { email: "rabia@gmail.com", phone: "03001239456" }),
    new Student("Mubeen Altaf", 23, "AI & ML", [87, 88, 89], { email: "mubeen@gmail.com", phone: "03003457876" }),
    new Student("Komal Riaz", 24, "Cloud Computing", [84, 86, 85], { email: "komal@gmail.com", phone: "03007894567" }),
    new Student("Wasif Ali", 20, "Cybersecurity", [80, 83, 81], { email: "wasif@gmail.com", phone: "03005678901" }),
    new Student("Farah Naz", 22, "Data Science", [88, 90, 87], { email: "farah@gmail.com", phone: "03003459876" }),
    new Student("Saif Ullah", 21, "Software Engineering", [86, 89, 88], { email: "saif@gmail.com", phone: "03006789234" }),
    new Student("Nimra Haider", 19, "DevOps", [92, 94, 91], { email: "nimra@gmail.com", phone: "03007893456" }),
    new Student("Owais Raza", 23, "Web Development", [90, 91, 93], { email: "owais@gmail.com", phone: "03003456789" }),
    new Student("Amber Sheikh", 20, "AI & ML", [88, 89, 90], { email: "amber@gmail.com", phone: "03001239876" }),
    new Student("Danish Rauf", 22, "Cybersecurity", [81, 82, 80], { email: "danish@gmail.com", phone: "03005678909" })
];

console.log(students);
