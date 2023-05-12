let cadenzaPic = require('../Images/cadenza.png');
let foodismPic = require('../Images/foodism.png');
const amazonPic = require('../Images/amazon.png');
const portfolioPic = require("../Images/portfolio.png");
const incrideaClient = require("../Images/incridea-client.png");
const incrideaServer = require("../Images/incridea-server.png");

const Projectdata=[
    {
        Key:1,
        title:"Aaron Nazareth(Portfolio)",
        description:"This is my most favorite and the first page that I built using reactjs. This shows all my skills and projects. Do keep visiting it for my future projects. This helped me understand react hooks is much better manner. I would love to improve this project even more by constantly adding more features to it.",
        Technologies_Used:['ReactJS','Github','vercel','Javascript','React-hooks','Aos-Animation'],
        github:["https://github.com/jevil25/portfolio"],
        live:["https://aaronnazareth.vercel.app/"],
        pic:[portfolioPic]
    },
    {
        Key:2,
        title:"Incridea",
        description:"Icridea is 4 day college fest, this webpage was made for users to login in and register for the events. I was given the task to make the admin dashboard which had several features like adding events, deleting events, viewing the registered users, viewing the events and also updating the events. I also wrote many queries and mutations in the server side. Also made some changes in the authentication part of the webpage.",
        Technologies_Used:['NextJS','NodeJS','ExpressJS','MongoDB','GraphQL','Apollo-Client','JWT','Bcrypt','TailwindCSS',"Prisma-ORM","Pothos","Vercel","Github"],
        github:["https://github.com/incridea-23/incridea-client","https://github.com/incridea-23/incridea-server"],
        live:["https://incridea.in/","https://incridea.onrender.com/graphql"],
        pic:[incrideaClient]
    },
    {
    key:3,
    title:"Cadenza",
    description:"I had the most fun while developing this webpage its similar to spotify but with few lesser features. I developed this webpage using HTML,CSS,Javascript,handlebars,Nodejs and Sql. This webpage allows the admin to add and delete songs as well. Users can listen to songs get the lyrics based on top charts or artists available.",
    Technologies_Used:['HTML','CSS','Javascript','Handlebars','NodeJS','ExpressJS','SQL'],
    github:["https://github.com/jevil25/cadenza"],
    live:["https://cadenza.vercel.app/"],
    pic:[cadenzaPic]
},
{
    key:4,
    title:"Foodism.com",
    description:"Foodism.com is webpage which gives the user to upload his personal recipes on the page and also view others recipes too. It allows users to choose recipes based on their continents or you also choose to view all the recipes at once.",
    Technologies_Used:['HTML','CSS','Javascript','Handlebars','NodeJS','ExpressJS','MongoDB','API'],
    github:["https://github.com/jevil25/Foodism.com"],
    live:["https://foodism-com.vercel.app/"],
    pic:[foodismPic]
},
{
    Key:4,
    title:"Amazon Clone",
    description:"This is webpage which I had made as my initial reactJs project i basically did this to get my reactJS basic concepts strong. This is projects is just the replica of the amazon page it has payment feature as well I have implemented it using firebase authentication. It also uses firestore as it database and is deployed using firebase as well.",
    Technologies_Used:['ReactJS','Firebase','Firestore','NodeJS','ExpressJS'],
    github:["https://github.com/jevil25/Amazon-clone-using-react"],
    live:[""],
    pic:[amazonPic]
}
]

export default Projectdata;