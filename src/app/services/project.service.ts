import { Injectable } from '@angular/core';
import { Project } from '../shared/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projects: Project[] = [
    {
      "id": "exp-planner",
      "name": "Expense Planner",
      "description": "The Expense Planner App is a comprehensive solution designed to empower users in efficiently managing their financial activities. Whether it's keeping track of daily expenses, setting budgets, or analyzing spending patterns, this app offers a user-friendly interface and robust functionality. With seamless synchronization across devices, users can access their financial data anytime, anywhere.",
      "github": "https://github.com/AdahGodwin/Expense_planner",
      "projectImage": "assets/epx/epx.png",
      "coverImage": "assets/epx/epxcover.png",
      "baseColor": "#008080",
      "type": "Mobile Application",
      "language": "Flutter and Dart",
      "client": "Personal Project",
      "shortIntro": "Track and manage your expenses on the go with our user-friendly app.",
      "challenge": "Designing an intuitive user interface for expense categorization.",
      "homeImage": "assets/epx/px1.jpg",
      "landscapeImages": ["assets/epx/px2.jpg", "assets/epx/px3.jpg"],
      "scopeAndContribution": "Developed the entire frontend using Flutter and implemented backend APIs.",
      "DesignRationale": "Chose a minimalist design to keep the focus on important financial information.",
      "featureImages": [
        { "feature": "Expense Tracking", "image": "https://example.com/exp-planner/feature1.png" },
        { "feature": "Budget Planning", "image": "https://example.com/exp-planner/feature2.png" }
      ]
    },
    {
      "id": "chat-app",
      "name": "Tech Chat",
      "description": "The Chat App is a dynamic platform that facilitates real-time communication between users. It offers a seamless and responsive interface for individuals and groups to interact, share media, and stay connected. With robust features and secure protocols, users can exchange messages in a fluid environment, enhancing their connectivity.",
      "github": "https://github.com/AdahGodwin/Chat_app",
      "projectImage": "assets/techchat/techchat.png",
      "coverImage": "assets/techchat/techchatcover.png",
      "baseColor": "#FFC0CB",
      "type": "Mobile App",
      "language": "Flutter and Dart",
      "client": "Startup Inc.",
      "shortIntro": "Stay connected with your friends and colleagues through instant messaging.",
      "challenge": "Implementing real-time updates while maintaining message consistency.",
      "homeImage": "assets/techchat/tech2.png",
      "landscapeImages": ["assets/techchat/tech1.png", "assets/techchat/tech3.png"],
      "scopeAndContribution": "Led frontend development using React and integrated with the Node.js backend.",
      "DesignRationale": "Opted for a clean and modern design to enhance user experience.",
      "featureImages": [
        { "feature": "Real-time Messaging", "image": "https://example.com/chat-app/feature1.png" },
        { "feature": "User Profiles", "image": "https://example.com/chat-app/feature2.png" }
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
      "type": "Mobile Application",
      "language": "Flutter and Dart",
      "client": "E-commerce Enterprises",
      "shortIntro": "Shop for your favorite products from the comfort of your home.",
      "challenge": "Integrating multiple payment gateways and managing product inventory.",
      "homeImage": "assets/lux/lux2.png",
      "landscapeImages": ["assets/lux/lux1.png", "assets/lux/lux3.png"],
      "scopeAndContribution": "Contributed to frontend development using React Native and collaborated on API design.",
      "DesignRationale": "Employed a visually appealing design to showcase products effectively.",
      "featureImages": [
        { "feature": "Product Catalog", "image": "https://example.com/e-commerce-app/feature1.png" },
        { "feature": "Secure Checkout", "image": "https://example.com/e-commerce-app/feature2.png" }
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
