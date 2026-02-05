let cadenzaPic = require('../Images/cadenza.png');
let foodismPic = require('../Images/foodism.png');
const amazonPic = require('../Images/amazon.png');
const portfolioPic = require("../Images/portfolio2.png");
const incrideaClient = require("../Images/incridea-client.png");
// const incrideaServer = require("../Images/incridea-server.png");
const incridea2024 = require("../Images/incridea2024.png");
const Vinland = require("../Images/vinland.png");
const Homify = require("../Images/homify.jpeg");
const letter = require("../Images/letter_recognition.png");
const compiler = require("../Images/compiler.png");
const salesine = require("../Images/salesine.png");
const lipread = require("../Images/lipnet.png");


const Projectdata = [
    {
      "Key": 1,
      "title": "Aaron Nazareth (Portfolio)",
      "description": "A modern, responsive portfolio website built with React.js, featuring dynamic content sections and smooth animations. Implemented using React hooks for state management and AOS for scroll-based animations. The site showcases projects, skills, and experience with an intuitive user interface and seamless navigation.",
      "Technologies_Used": ["ReactJS", "Github", "vercel", "Javascript", "React-hooks", "Aos-Animation"],
      "github": ["https://github.com/jevil25/portfolio"],
      "live": ["https://aaronnazareth.vercel.app/"],
      "pic": [portfolioPic],
      "type": "web",
      "technologies_color": ["#5ED4F3", "#09244b", "#000000", "#F7DF1E", "#5ED4F3", "#000000"]
    },
    {
      "Key": 2,
      "title": "Incridea-2024",
      "description": "Developed a comprehensive event management platform for Incridea 2024, a major college festival. Architected and implemented an admin dashboard with advanced features including event management, XP-based gamification system, and user leaderboard. Utilized GraphQL for efficient data querying and ThreeJS for interactive 3D elements.\n\nKey Features:\n• Custom admin dashboard for event management\n• XP-based gaming system with leaderboard\n• Robust authentication using JWT and Bcrypt\n• GraphQL API with Pothos schema builder\n• Responsive UI with TailwindCSS",
      "Technologies_Used": ["NextJS", "NodeJS", "ExpressJS", "ThreeJs", "GraphQL", "Apollo-Client", "JWT", "Bcrypt", "TailwindCSS", "Prisma", "Pothos", "Vercel", "Github"],
      "github": ["https://github.com/incridea-23/incridea-client", "https://github.com/incridea-23/incridea-server"],
      "live": ["https://incridea-2024.vercel.app/", "https://incridea-pai3.onrender.com/graphql"],
      "pic": [incridea2024],
      "type": "web",
      "technologies_color": ["#5ED4F3", "#539E43", "#353535", "#1172B8", "#F16529", "#1172B8", "#F7DF1E", "#F16529", "#15b8c5", "#0C344B", "#F16529", "#F16529", "#000000", "#000000"]
    },
    {
      "Key": 3,
      "title": "Incridea-2023",
      "description": "Built a full-stack event management system for Incridea 2023, featuring comprehensive admin controls and user registration functionality. Implemented GraphQL API architecture with optimized queries and mutations for efficient data handling.\n\nKey Features:\n• Advanced admin dashboard with CRUD operations\n• Real-time event management and user tracking\n• Secure authentication system\n• GraphQL-powered data layer with Prisma ORM\n• Responsive design with TailwindCSS",
      "Technologies_Used": ["NextJS", "NodeJS", "ExpressJS", "MongoDB", "GraphQL", "Apollo-Client", "JWT", "Bcrypt", "TailwindCSS", "Prisma", "Pothos", "Vercel", "Github"],
      "github": ["https://github.com/incridea-23/incridea-client", "https://github.com/incridea-23/incridea-server"],
      "live": ["https://incridea.vercel.app/", "https://incridea.onrender.com/graphql"],
      "pic": [incrideaClient],
      "type": "web",
      "technologies_color": ["#5ED4F3", "#539E43", "#353535", "#1172B8", "#F16529", "#1172B8", "#F7DF1E", "#F16529", "#15b8c5", "#0C344B", "#F16529", "#F16529", "#000000", "#000000"]
    },
    {
      "Key": 4,
      "title": "Salesine",
      "description": "Engineered an AI-powered meeting analytics platform that revolutionizes how companies manage and analyze Zoom meetings. The system automatically processes recordings to generate valuable insights and analytics.\n\nKey Features:\n• Dual dashboard system for super-admin and company management\n• AI-powered meeting recording analysis\n• Google Calendar and Drive integration\n• Secure authentication with role-based access\n• Scalable backend with MongoDB and Prisma",
      "Technologies_Used": ["NextJS", "NodeJS", "ExpressJS", "MongoDB", "Prisma","Google-Auth", "Zoom","AI/ML","JWT", "Vercel", "Github"],
      "github": ["https://github.com/jevil25/salesine", "https://github.com/jevil25/salestine_server"],
      "live": ["https://salestine.vercel.app/", "https://salestine.onrender.com/"],
      "pic": [salesine],
      "type": "web",
      "technologies_color": ["#5ED4F3", "#539E43", "#353535", "#1172B8", "#F16529", "#1172B8", "#F7DF1E", "#F16529", "#15b8c5", "#0C344B", "#F16529", "#F16529", "#000000", "#000000"]
    },
    {
      "key": 5,
      "title": "Cadenza",
      "description": "Developed a full-featured music streaming platform inspired by Spotify, incorporating modern web technologies for seamless audio playback and content management.\n\nKey Features:\n• Custom audio player with playlist management\n• Admin panel for music content management\n• Real-time lyrics synchronization\n• SQL database for efficient data management\n• RESTful API architecture with Express.js",
      "Technologies_Used": ["HTML", "CSS", "Javascript", "Handlebars", "NodeJS", "ExpressJS", "SQL"],
      "github": ["https://github.com/jevil25/cadenza"],
      "live": ["https://cadenza.vercel.app/"],
      "pic": [cadenzaPic],
      "type": "web",
      "technologies_color": ["#F16529", "#1172B8", "#F7DF1E", "#1172B8", "#539E43", "#353535", "#58AA50"]
    },
    {
      "key": 6,
      "title": "Foodism.com",
      "description": "Created an interactive recipe sharing platform that enables users to discover and share culinary experiences from around the world. The platform features a continent-based recipe categorization system and user-generated content.\n\nKey Features:\n• User recipe upload and management\n• Geographic-based recipe categorization\n• Interactive recipe viewing interface\n• MongoDB integration for flexible data storage\n• RESTful API implementation",
      "Technologies_Used": ["HTML", "CSS", "Javascript", "Handlebars", "NodeJS", "ExpressJS", "MongoDB", "API"],
      "github": ["https://github.com/jevil25/Foodism.com"],
      "live": ["https://foodism-com.vercel.app/"],
      "pic": [foodismPic],
      "type": "web",
      "technologies_color": ["#F16529", "#1172B8", "#F7DF1E", "#1172B8", "#539E43", "#353535", "#58AA50"]
    },
    {
      "Key": 7,
      "title": "Amazon Clone",
      "description": "Engineered a comprehensive e-commerce platform replicating Amazon's core functionalities. Implemented Firebase Authentication and Firestore for secure user management and real-time data storage.\n\nKey Features:\n• User authentication and authorization\n• Real-time shopping cart updates\n• Secure payment processing\n• Responsive product catalog\n• Firebase-powered backend",
      "Technologies_Used": ["ReactJS", "Firebase", "Firestore", "NodeJS", "ExpressJS"],
      "github": ["https://github.com/jevil25/Amazon-clone-using-react"],
      "live": [""],
      "pic": [amazonPic],
      "type": "web",
      "technologies_color": ["#5ED4F3", "#fcca3f", "#5ED4F3", "#5ED4F3", "#539E43"]
    },
    {
      "Key": 8,
      "title": "Homify",
      "description": "Developed a comprehensive Android application for personal information management and organization. The app helps users track important documents, contacts, and daily necessities.\n\nKey Features:\n• Document expiration tracking and notifications\n• Contact management system\n• Interactive grocery list functionality\n• Smart reminder system\n• Intuitive user interface",
      "Technologies_Used": ["JAVA", "Android Studio", "API", "Mobile App","Git"],
      "github": ["https://github.com/Amith-Jagannath/Homify"],
      "live": [""],
      "pic": [Homify],
      "type": "mobile",
      "technologies_color": ["#5ED4F3", "#fcca3f", "#5ED4F3", "#5ED4F3", "#539E43"]
    },
    {
      "key": 11,
      "title": "LipRead Machine Learning",
      "description": "Implemented a sophisticated machine learning model for lip reading using deep learning techniques. The system processes video input to predict spoken words with high accuracy.\n\nKey Features:\n• Video processing pipeline for face detection\n• Deep learning model using TensorFlow and Keras\n• Sequential model architecture with ReLU/Softmax\n• Interactive demo using Streamlit\n• Real-time prediction capabilities",
      "Technologies_Used": ["Python", "Tensorflow", "Keras", "Machine Learning","Git"],
      "github": ["https://github.com/jevil25/Lip-Read-ML-Model"],
      "live": ["https://lipnet.streamlit.app/"],
      "pic": [lipread],
      "type": "Machine Learning",
      "technologies_color": ["#5ED4F3", "#fcca3f", "#5ED4F3", "#5ED4F3", "#539E43"]
    },
    {
      "Key": 10,
      "title": "Letter Recognition",
      "description": "Designed and implemented a machine learning system for letter recognition using multiple algorithms. The system processes 16 distinct features to accurately classify letters.\n\nKey Features:\n• Multiple algorithm implementation (KNN, SVM, Random Forest)\n• Feature extraction and preprocessing pipeline\n• Comparative analysis of algorithm performance\n• Optimized model parameters\n• Robust testing framework",
      "Technologies_Used": ["Python", "Sciket-learn", "Machine Learning", "Data Preprocssing","Git"],
      "github": ["https://github.com/jevil25/letter-recognition-using-ml"],
      "live": [""],
      "pic": [letter],
      "type": "Machine Learning",
      "technologies_color": ["#5ED4F3", "#fcca3f", "#5ED4F3", "#5ED4F3", "#539E43"]
    },
    {
      "Key": 9,
      "title": "Vinland Island",
      "description": "Created an immersive 2D island environment using OpenGL, featuring dynamic scenes and interactive elements.\n\nKey Features:\n• Multiple view perspectives of the island\n• Animated character movements\n• Interactive shop interfaces\n• Dynamic scenery elements\n• Custom animation system",
      "Technologies_Used": ["C/C++", "OpenGL", "freeGlut", "Designing","Animation"],
      "github": ["https://github.com/jevil25/The-Island-OpenGL"],
      "live": [""],
      "pic": [Vinland],
      "type": "Graphics",
      "technologies_color": ["#5ED4F3", "#fcca3f", "#5ED4F3", "#5ED4F3", "#539E43"]
    },
    {
      "Key": 12,
      "title": "Cloud Compiler",
      "description": "Developed a cloud-based compilation system using Java CloudSim framework. The platform supports multiple programming languages and provides real-time compilation services.\n\nKey Features:\n• Multi-language compilation support\n• Real-time error handling and output generation\n• Interactive input capability\n• Efficient resource scheduling\n• Scalable cloud architecture",
      "Technologies_Used": ["JAVA", "Cloud Sim", "C/C++", "Scheduling Algorithms","Git"],
      "github": ["https://github.com/jevil25/cloud_Compiler"],
      "live": [""],
      "pic": [compiler],
      "type": "Cloud Computing",
      "technologies_color": ["#5ED4F3", "#fcca3f", "#5ED4F3", "#5ED4F3", "#539E43"]
    },
  ]
  

export default Projectdata;
