import { Injectable } from '@angular/core';
import { Project } from '../shared/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projects: Project[] = [
    {
      "id": "free-lunch-app",
      "name": "Free Lunch",
      "description": "Free Lunch is not just a food-sharing app; it's a gesture of kindness and camaraderie. This app allows users to surprise their team members with a free lunch, turning ordinary workdays into delightful experiences. Spread positivity, build team spirit, and share the joy of a good meal, one Free Lunch at a time.",
      "github": "https://github.com/hngx-org/Eagles-food-mobile",
      "projectImage": "assets/freelunch/freelunch.png",
      "coverImage": "assets/freelunch/freelunchcover.png",
      "mobileImage": "assets/freelunch/free1.png",
      "baseColor": "#04764E",
      "type": "Mobile App",
      "language": "Flutter and Dart",
      "client": "HNGx Internship Programme",
      "shortIntro": "Surprise your team with the gift of a delicious lunch, delivered with a touch of kindness.",
      "challenge": "The primary challenge in developing Free Lunch was navigating the complexities of working in a team for the first time. Coordinating tasks, ensuring effective communication, and harmonizing different perspectives required a learning curve, emphasizing the importance of teamwork and collaboration.",
      "homeImage": "assets/freelunch/freelunch.png",
      "landscapeImage": "assets/freelunch/freeland.png",
      "scopeAndContribution": "In this project, I played a pivotal role in developing the app's sophisticated navigation system, ensuring a seamless and enjoyable user experience. From conceptualization to implementation, my focus was on crafting an intuitive navigation flow that enhances user engagement and satisfaction.",
      "DesignRationale": "The design for Free Lunch was skillfully crafted by Devine Akubo. His exceptional work brings a vibrant and cheerful aesthetic to the app, perfectly reflecting the positive and uplifting nature of the Free Lunch experience.",
      "featureImages": [
        { "feature": "Authentication Screen", "image": "assets/freelunch/free11.png" },
        { "feature": "Creating an account", "image": "assets/freelunch/free10.png" },
        { "feature": "Navigation system", "image": "assets/freelunch/free1.png" },
        { "feature": "Home Screen", "image": "assets/freelunch/free2.png" },
        { "feature": "User Profile", "image": "assets/freelunch/free9.png" },
        { "feature": "Send a Lunch", "image": "assets/freelunch/free4.png" },
        { "feature": "Search for team member", "image": "assets/freelunch/free3.png" },
        { "feature": "Send team invite", "image": "assets/freelunch/free5.png" },
        { "feature": "Invite History", "image": "assets/freelunch/free6.png" },
        { "feature": "Accept an Invite", "image": "assets/freelunch/free7.png" },
        { "feature": "Invitation Successful", "image": "assets/freelunch/free8.png" },
      ]
    },
    {
      "id": "exp-planner",
      "name": "Expense Planner",
      "description": "The Expense Planner App is a comprehensive solution designed to empower users in efficiently managing their financial activities. Whether it's keeping track of daily expenses or income, this app offers a user-friendly interface and robust functionality. With seamless synchronization across devices, users can access their financial data anytime, anywhere.",
      "github": "https://github.com/AdahGodwin/Expense_planner",
      "projectImage": "assets/epx/epx.png",
      "coverImage": "assets/epx/epxcover.png",
      "mobileImage": "assets/epx/px2.png",
      "baseColor": "#008080",
      "type": "Mobile App",
      "language": "Flutter and Dart",
      "client": "Personal Project",
      "shortIntro": "Track and manage your expenses on the go with our user-friendly app.",
      "challenge": "The primary challenge in developing the Expense Planner was designing an intuitive user interface for expense categorization. Additionally, creating the logic for keeping track of the transactions and also implementing filtering options based on the day or month posed significant challenges.",
      "homeImage": "assets/epx/epx.png",
      "landscapeImage": "assets/epx/epxland.png",
      "scopeAndContribution": "My scope and contribution for this project encompassed the development of the entire frontend using Flutter. I also implemented on-device storage capabilities to enable users to view their financial information without requiring an internet connection.",
      "DesignRationale": "For the design, I chose an interesting and engaging visual style to challenge my frontend development skills while maintaining a high level of usability and aesthetic appeal.",
      "featureImages": [
        { "feature": "Sign up Screen", "image": "assets/epx/px9.png" },
        { "feature": "Summary Screen", "image": "assets/epx/px2.png" },
        { "feature": "Side Navigation", "image": "assets/epx/px3.png" },
        { "feature": "Charts", "image": "assets/epx/px8.png" },
        { "feature": "Transaction Details", "image": "assets/epx/px4.png" },
        { "feature": "Settings Screen", "image": "assets/epx/px5.png" },
        { "feature": "Add new Transaction", "image": "assets/epx/px6.png" },
        { "feature": "Theme Changer", "image": "assets/epx/px11.png" },
        { "feature": "Dark Theme", "image": "assets/epx/px13.png" },
        { "feature": "Green Theme", "image": "assets/epx/px7.png" },
        { "feature": "Teal Theme", "image": "assets/epx/px10.png" },
      ]
    },
    {
      "id": "e-commerce-app",
      "name": "Luxe Haven",
      "description": "Luxe is a comprehensive online shopping platform that brings a wide array of products to users' fingertips. With an elegant user interface and efficient search capabilities, customers can seamlessly browse and explore the product catalog. Secure checkout processes and multiple payment gateways ensure a smooth shopping experience.",
      "github": "https://github.com/AdahGodwin/E-Commerce-App",
      "projectImage": "assets/lux/luxhaven.png",
      "coverImage": "assets/lux/luxcover.png",
      "baseColor": "#800080",
      "type": "Mobile App",
      "language": "Flutter and Dart",
      "client": "Personal Project",
      "shortIntro": "Shop for your favorite products from the comfort of your home.",
      "challenge": "One of the primary challenges in developing Luxe Haven was creating a UI with a bottom tab navigation structure to provide users with easy access to various sections of the app. Additionally, implementing user authentication and ensuring its security were significant challenges.",
      "homeImage": "assets/lux/luxhaven.png",
      "mobileImage": "assets/lux/lux2.png",
      "landscapeImage": "assets/lux/luxland.png",
      "scopeAndContribution": "My scope and contribution for this project encompassed the entire app development process using Flutter. I also integrated the app with Firebase backend services to enable secure user authentication and data management.",
      "DesignRationale": "In terms of design, I employed a visually appealing and user-friendly approach to showcase products effectively and provide a delightful shopping experience for users.",
      "featureImages": [
        { "feature": "Products Screen with filters", "image": "assets/lux/lux2.png" },
        { "feature": "Users Cart Items", "image": "assets/lux/lux4.png" },
        { "feature": "Search Filter", "image": "assets/lux/lux12.png" },
        { "feature": "App Drawer", "image": "assets/lux/lux5.png" },
        { "feature": "Product details", "image": "assets/lux/lux3.png" },

      ]
    },
    {
      "id": "chat-app",
      "name": "Tech Chat",
      "description": "The Chat App is a dynamic platform that facilitates real-time communication between users. It offers a seamless and responsive interface for individuals and groups to interact, and stay connected. With robust features and secure protocols, users can exchange messages in a fluid environment, enhancing their connectivity.",
      "github": "https://github.com/AdahGodwin/Chat_app",
      "projectImage": "assets/techchat/techchat.png",
      "coverImage": "assets/techchat/techchatcover.png",
      "baseColor": "#FFC0CB",
      "type": "Mobile App",
      "language": "Flutter and Dart",
      "client": "Personal Project",
      "mobileImage": "assets/techchat/tech2.png",
      "shortIntro": "Stay connected with your friends and colleagues through instant messaging.",
      "challenge": "The main challenge in developing the Tech Chat app was the implementation of real-time updates while ensuring message consistency throughout the application.",
      "homeImage": "assets/techchat/techchat.png",
      "landscapeImage": "assets/techchat/techland.png",
      "scopeAndContribution": "My scope and contribution to this project involved the complete development of the frontend using Flutter. I also integrated the app with Firebase backend services for data storage and real-time messaging functionality.",
      "DesignRationale": "In terms of design, I opted for a clean and modern aesthetic to enhance the user experience by providing a clutter-free and visually appealing environment for communication.",
      "featureImages": [
        { "feature": "Real-time Messaging", "image": "assets/techchat/tech2.png" },
        { "feature": "Chat History", "image": "assets/techchat/tech1.png" },
        { "feature": "Chats with Unread Messages", "image": "assets/techchat/tech4.png" },
        { "feature": "User List", "image": "assets/techchat/tech5.png" }
      ]
    },
  ];

  constructor() { }

  getProjects(): Project[] {
    return this.projects;
  }
  getProject(id: string): Project {

    var project = this.projects.find((project: Project) => project.id == id);
    return project!;
  }

  getNextProject(currentProjectId: string) {
    var currentIndex: number = this.projects.findIndex((project) => project.id == currentProjectId);
    if (currentIndex === this.projects.length - 1) {
      return {
        id: "",
        name: "None",
      }
    }
    return {
      id: this.projects[currentIndex + 1].id,
      name: this.projects[currentIndex + 1].name,
    }
  }
  getPrevProject(currentProjectId: string) {
    var currentIndex: number = this.projects.findIndex((project) => project.id == currentProjectId);
    if (currentIndex === 0) {
      return {
        id: "",
        name: "",
      };
    }
    return {
      id: this.projects[currentIndex - 1].id,
      name: this.projects[currentIndex - 1].name,
    }
  }
}
