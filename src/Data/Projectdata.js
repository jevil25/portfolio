let cadenzaPic = require('../Images/cadenza.png');
let foodismPic = require('../Images/foodism.png');
const amazonPic = require('../Images/amazon.png');
const portfolioPic = require("../Images/portfolio.png");
const incrideaClient = require("../Images/incridea-client.png");
const incrideaServer = require("../Images/incridea-server.png");
const Vinland = require("../Images/vinland.png");
const Homify = require("../Images/homify.jpeg");
const letter = require("../Images/letter_recognition.png");
const compiler = require("../Images/compiler.png");


const Projectdata = [
    {
      "Key": 1,
      "title": "Aaron Nazareth(Portfolio)",
      "description": "This is my most favorite and the first page that I built using ReactJS. This shows all my skills and projects. Do keep visiting it for my future projects. This helped me understand React hooks in a much better manner. I would love to improve this project even more by constantly adding more features to it.",
      "Technologies_Used": ["ReactJS", "Github", "vercel", "Javascript", "React-hooks", "Aos-Animation"],
      "github": ["https://github.com/jevil25/portfolio"],
      "live": ["https://aaronnazareth.vercel.app/"],
      "pic": [portfolioPic],
      "type": "web",
      "technologies_color": ["#5ED4F3", "#09244b", "#000000", "#F7DF1E", "#5ED4F3", "#000000"]
    },
    {
      "Key": 2,
      "title": "Incridea",
      "description": "Incridea is a 4-day college fest. This webpage was made for users to login and register for the events. I was given the task to make the admin dashboard which had several features like adding events, deleting events, viewing the registered users, viewing the events, and also updating the events. I also wrote many queries and mutations on the server side. I also made some changes in the authentication part of the webpage.",
      "Technologies_Used": ["NextJS", "NodeJS", "ExpressJS", "MongoDB", "GraphQL", "Apollo-Client", "JWT", "Bcrypt", "TailwindCSS", "Prisma", "Pothos", "Vercel", "Github"],
      "github": ["https://github.com/incridea-23/incridea-client", "https://github.com/incridea-23/incridea-server"],
      "live": ["https://incridea.vercel.app/", "https://incridea.onrender.com/graphql"],
      "pic": [incrideaClient],
      "type": "web",
      "technologies_color": ["#5ED4F3", "#539E43", "#353535", "#1172B8", "#F16529", "#1172B8", "#F7DF1E", "#F16529", "#15b8c5", "#0C344B", "#F16529", "#F16529", "#000000", "#000000"]
    },
    {
      "key": 3,
      "title": "Cadenza",
      "description": "I had the most fun while developing this webpage. It's similar to Spotify but with a few fewer features. I developed this webpage using HTML, CSS, JavaScript, Handlebars, Node.js, and SQL. This webpage allows the admin to add and delete songs as well. Users can listen to songs and get the lyrics based on top charts or artists available.",
      "Technologies_Used": ["HTML", "CSS", "Javascript", "Handlebars", "NodeJS", "ExpressJS", "SQL"],
      "github": ["https://github.com/jevil25/cadenza"],
      "live": ["https://cadenza.vercel.app/"],
      "pic": [cadenzaPic],
      "type": "web",
      "technologies_color": ["#F16529", "#1172B8", "#F7DF1E", "#1172B8", "#539E43", "#353535", "#58AA50"]
    },
    {
      "key": 4,
      "title": "Foodism.com",
      "description": "Foodism.com is a webpage which allows the user to upload their personal recipes and view others' recipes as well. It allows users to choose recipes based on continents or view all the recipes at once.",
      "Technologies_Used": ["HTML", "CSS", "Javascript", "Handlebars", "NodeJS", "ExpressJS", "MongoDB", "API"],
      "github": ["https://github.com/jevil25/Foodism.com"],
      "live": ["https://foodism-com.vercel.app/"],
      "pic": [foodismPic],
      "type": "web",
      "technologies_color": ["#F16529", "#1172B8", "#F7DF1E", "#1172B8", "#539E43", "#353535", "#58AA50"]
    },
    {
      "Key": 4,
      "title": "Amazon Clone",
      "description": "This webpage is an Amazon clone that I made as my initial ReactJS project to strengthen my basic concepts. It is a replica of the Amazon page and includes a payment feature implemented using Firebase Authentication. It also uses Firestore as its database and is deployed using Firebase as well.",
      "Technologies_Used": ["ReactJS", "Firebase", "Firestore", "NodeJS", "ExpressJS"],
      "github": ["https://github.com/jevil25/Amazon-clone-using-react"],
      "live": [""],
      "pic": [amazonPic],
      "type": "web",
      "technologies_color": ["#5ED4F3", "#fcca3f", "#5ED4F3", "#5ED4F3", "#539E43"]
    },
    {
      "Key": 5,
      "title": "Homify",
      "description": "This is Android Mobile App. Used to give users important updates. It has features like store important document id and expriy date, store important contacts, and also has a feature to add grocery list. It also has a feature to set reminders for the documents and contacts.",
      "Technologies_Used": ["JAVA", "Android Studio", "API", "Mobile App","Git"],
      "github": ["https://github.com/Amith-Jagannath/Homify"],
      "live": [""],
      "pic": [Homify],
      "type": "mobile",
      "technologies_color": ["#5ED4F3", "#fcca3f", "#5ED4F3", "#5ED4F3", "#539E43"]
    },
    {
      "Key": 6,
      "title": "Letter Recognition",
      "description": "This is a Machine Learning project. It is used to recognize the letters. It uses Algorithms like KNN, SVM, and Random Forest. It takes 16 features as input and predicts the letter.",
      "Technologies_Used": ["Python", "Sciket-learn", "Machine Learning", "Data Preprocssing","Git"],
      "github": ["https://github.com/jevil25/letter-recognition-using-ml"],
      "live": [""],
      "pic": [letter],
      "type": "Machine Learning",
      "technologies_color": ["#5ED4F3", "#fcca3f", "#5ED4F3", "#5ED4F3", "#539E43"]
    },
    {
      "Key": 7,
      "title": "Vinland Island",
      "description": "This is 2D Island made used Open GL. It has 3 views of the Island. It has various shops, people moving , and many more secenry features.",
      "Technologies_Used": ["C/C++", "OpenGL", "freeGlut", "Designing","Animation"],
      "github": ["https://github.com/jevil25/The-Island-OpenGL"],
      "live": [""],
      "pic": [Vinland],
      "type": "Graphics",
      "technologies_color": ["#5ED4F3", "#fcca3f", "#5ED4F3", "#5ED4F3", "#539E43"]
    },
    {
      "Key": 8,
      "title": "Cloud Compiler",
      "description": "This is a java cloud sim based program. It is used to compile and run the code. It has features like compile and run the code. It gives proper error messages and gives proper ouput. It suports multiple programming languages. It can also take live user input.",
      "Technologies_Used": ["JAVA", "Cloud Sim", "C/C++", "Scheduling Algorithms","Git"],
      "github": ["https://github.com/jevil25/cloud_Compiler"],
      "live": [""],
      "pic": [compiler],
      "type": "Cloud Computing",
      "technologies_color": ["#5ED4F3", "#fcca3f", "#5ED4F3", "#5ED4F3", "#539E43"]
    },
  ]
  

export default Projectdata;