import { AcheivementsInterface, ProjectInterface, SkillsInterface } from '../Interface/Interface';

export const skillsData: SkillsInterface[] = [
  {
    SkillName: 'Angular',
    ImgPath: 'assets/skills/angular.png',
    RedirectionUrl: 'https://angular.io/',
  },
  {
    SkillName: 'React',
    ImgPath: 'assets/skills/react.png',
    RedirectionUrl: 'https://angular.io/',
  },
  {
    SkillName: 'Dot Net',
    ImgPath: 'assets/skills/dotnet.png',
    RedirectionUrl: 'https://angular.io/',
  },
  {
    SkillName: 'Flutter',
    ImgPath: 'assets/skills/flutter.png',
    RedirectionUrl: 'https://angular.io/',
  },
  {
    SkillName: 'Firebase',
    ImgPath: 'assets/skills/firebase.webp',
    RedirectionUrl: 'https://angular.io/',
  },
  {
    SkillName: 'Azure',
    ImgPath: 'assets/skills/azure.png',
    RedirectionUrl: 'https://angular.io/',
  },
  {
    SkillName: 'Power BI',
    ImgPath: 'assets/skills/pbi.png',
    RedirectionUrl: 'https://angular.io/',
  },
  {
    SkillName: 'C#',
    ImgPath: 'assets/skills/csharp.png',
    RedirectionUrl: 'https://angular.io/',
  },
  {
    SkillName: 'Python 3',
    ImgPath: 'assets/skills/python.png',
    RedirectionUrl: 'https://angular.io/',
  },

  {
    SkillName: 'Mongo DB',
    ImgPath: 'assets/skills/mongodb.png',
    RedirectionUrl: 'https://angular.io/',
  },
  {
    SkillName: 'HTML',
    ImgPath: 'assets/skills/html.png',
    RedirectionUrl: 'https://angular.io/',
  },
  {
    SkillName: 'CSS',
    ImgPath: 'assets/skills/css.png',
    RedirectionUrl: 'https://angular.io/',
  },
  {
    SkillName: 'Java Script',
    ImgPath: 'assets/skills/js.png',
    RedirectionUrl: 'https://angular.io/',
  },
  {
    SkillName: 'Type Script',
    ImgPath: 'assets/skills/ts.png',
    RedirectionUrl: 'https://angular.io/',
  },
  {
    SkillName: 'Redis',
    ImgPath: 'assets/skills/redis.png',
    RedirectionUrl: 'https://angular.io/',
  },
];


export const acheivementsData : AcheivementsInterface[]=[
  {
    Title:"Cube root by long division method",
    Desc:"In my 11th grade (2016), I independently discovered the cube root of a number using the long division method which featured in my college magazine.",
    ReadMoreLink:""
  },
  {
    Title:"A flutter package for community",
    Desc:"Created a package for flutter community, where people can use the package for their projects to acheive bouncing In and out animation.",
    ReadMoreLink:"https://pub.dev/packages/tdk_bouncingwidget"
  },
  {
    Title:"Github Repo for DSA & Algorithms",
    Desc:"Maintaining a GitHub repository for Data structures and algorithms, with detailed explanation for the people's interview preparation.",
    ReadMoreLink:"https://github.com/ThiruDev50/DataStructuresAndAlgorithms"
  },
  {
    Title:"Private Nugget package",
    Desc:"Created a Nugget package which will handle all the sensitive data like connecting strings and private key by custom algorithms.",
    ReadMoreLink:""
  },
  {
    Title:"Actively explore various packages",
    Desc:"Will explore different packages for a project and suggest the improvements to the package author and even contributing for it.",
    ReadMoreLink:""
  }
]

export const visitTaleData: string[] = [
  "In the end, that doesn't even matter.",
 "Its not about the destination but the journey",
 "The selfish intent of wanting to preserve peace, initiates war. and hatred is born in order to protect love.",
  "Sometimes the greatest adventure is simply a conversation.",
  "In the dance of life, the pauses are just as important as the moves.",
  "A single step can start a journey, but it's the choices along the way that define it.",
  "Stars can't shine without darkness, and people can't find their true strength without facing challenges.",
  "The magic is not in the destination, but in the discovery of the unknown on the way.",
  "In the symphony of existence, every being plays a unique and irreplaceable note.",
  "The pen has the power to rewrite the story, just as much as the heart has the power to rewrite its feelings.",
  "To understand the present, one must first explore the chapters of the past.",
  "Courage is not the absence of fear, but the triumph over it. Dare to embrace the unknown.",
  "The road less traveled may be more challenging, but it often leads to the most beautiful destinations.",
  "In the garden of memories, every flower tells a story.",
  "Through the lens of time, every setback is a setup for a comeback.",
  "The map of life is drawn with the ink of experience and the colors of emotions.",
  "Not all who wander are lost; sometimes, they are finding their way home.",
  "The echo of laughter and the shadow of tears both contribute to the masterpiece of a well-lived life.",
  "Destiny is not a matter of chance, but a matter of choice. Choose your path wisely.",
  "Sunsets are proof that no matter what happens, every day can end beautifully.",
  "Embrace the storms of life, for they are the prelude to a rainbow of resilience.",
  "Footprints on the sand of time may fade, but the impact we leave on others' hearts lasts forever.",
  "Life's greatest stories are often written in the ink of love and the parchment of shared moments.",
];

export const visitTaleDataNew : string[]=[
  "In the end, that doesn't even matter.",
  "Its not about the destination but the journey",
  "The selfish intent of wanting to preserve peace, initiates war. and hatred is born in order to protect love.",
]

export const projectData : ProjectInterface[]=[
  {
    ImgPath:"assets/projects/connecting.jpg",
    ProjectDisplayName:"Student App",
    ProjectDesc:"Developed a revolutionary educational management system that serves as a single-point solution for students and administrators alike. Leveraging the power of Flutter for the Student App, ASP.NET for the backend, MongoDB for the database, and Microsoft Azure for cloud services, the application streamlines communication, assignment management, and result visualization, providing an all-encompassing educational experience. \n \n Where students can view assigned homeworks, exam results, provided study materials through student's mobile app where all these things manage by respective admins through the admin app. \n\n Admins can create a test in the admin app and assign to students. Once the test period is completed, The backend job will evaluate students test and create a report, which will give valuable info like on which topics students are lagging or in which topics students performed well and more data in both chart and table manner.",
    ProjectTitle:"Student Management App - OneVoid",
    TechStack:["Flutter","Dot net","Mongo DB","Azure","Firebase","Redis"]
  },
  {
    ImgPath:"assets/projects/ai.jpg",
    ProjectDisplayName:"Score Prediction AI",
    ProjectDesc:"Developed a machine learning model tailored to predict future academic scores of students based on their historical performance data. The model utilizes advanced algorithms and statistical analysis to provide accurate predictions for individual subjects, offering valuable insights into student's potential academic outcomes.",
    ProjectTitle:"Student's score prediction ML",
    TechStack:["Python 3"]
  },
  {
    ImgPath:"assets/projects/password.jpg",
    ProjectDisplayName:"Password Wallet",
    ProjectDesc:"Developing a robust Flutter application designed to securely store and retrieve passwords on the user's device. The primary focus is on implementing advanced security measures to safeguard sensitive information while providing a seamless user experience. Additionally, the app will feature a convenient export functionality, allowing users to export their stored passwords to an Excel file for backup and management purposes.",
    ProjectTitle:"Password wallet",
    TechStack:["Flutter"]
  },
  {
    ImgPath:"assets/projects/bank.jpg",
    ProjectDisplayName:"Bank Management",
    ProjectDesc:"Developed a robust bank management application that provides users with secure and seamless financial transactions, mirroring real-world banking experiences. Leveraging React.js for the frontend, ASP.NET for the backend, and SQL Server for the database, the application ensures a user-friendly interface, efficient data processing, and transactional integrity.",
    ProjectTitle:"Bank Management",
    TechStack:["React","Dot net","SQL"]
  },
 
  
]