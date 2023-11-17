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
      "projectImage": "https://res.cloudinary.com/dlw8yinzy/image/upload/v1700218765/portfolio/l26svofaoekyo1fkb8rs.png",
      "coverImage": "assets/freelunch/freelunchcover.png",
      "mobileImage": "https://res.cloudinary.com/dlw8yinzy/image/upload/v1700218757/portfolio/ydixbp6vdqilvugxx8xq.png",
      "baseColor": "#04764E",
      "type": "Mobile App",
      "language": "Flutter and Dart",
      "client": "HNGx Internship Programme",
      "shortIntro": "Surprise your team with the gift of a delicious lunch, delivered with a touch of kindness.",
      "challenge": "The primary challenge in developing Free Lunch was navigating the complexities of working in a team for the first time. Coordinating tasks, ensuring effective communication, and harmonizing different perspectives required a learning curve, emphasizing the importance of teamwork and collaboration.",
      "homeImage": "https://res.cloudinary.com/dlw8yinzy/image/upload/v1700218765/portfolio/l26svofaoekyo1fkb8rs.png",
      "landscapeImage": "https://res.cloudinary.com/dlw8yinzy/image/upload/v1700218764/portfolio/kdbodqwvhouv2xpq2smu.png",
      "scopeAndContribution": "In this project, I played a pivotal role in developing the app's sophisticated navigation system, ensuring a seamless and enjoyable user experience. From conceptualization to implementation, my focus was on crafting an intuitive navigation flow that enhances user engagement and satisfaction.",
      "DesignRationale": "The design for Free Lunch was skillfully crafted by Devine Akubo. His exceptional work brings a vibrant and cheerful aesthetic to the app, perfectly reflecting the positive and uplifting nature of the Free Lunch experience.",
      "featureImages": [
        { "feature": "Authentication Screen", "image": "https://res.cloudinary.com/dlw8yinzy/image/upload/v1700218766/portfolio/der0ggcvkw9bao2ktjgx.png" },
        { "feature": "Creating an account", "image": "https://res.cloudinary.com/dlw8yinzy/image/upload/v1700218765/portfolio/txfovt8moja2zkz3nsz2.png" },
        { "feature": "Navigation system", "image": "https://res.cloudinary.com/dlw8yinzy/image/upload/v1700218757/portfolio/ydixbp6vdqilvugxx8xq.png" },
        { "feature": "Home Screen", "image": "https://res.cloudinary.com/dlw8yinzy/image/upload/v1700218759/portfolio/wydprkekfdwoocaqzxcw.png" },
        { "feature": "User Profile", "image": "https://res.cloudinary.com/dlw8yinzy/image/upload/v1700218769/portfolio/xgdgxihbinyc9fdj4ise.png" },
        { "feature": "Send a Lunch", "image": "https://res.cloudinary.com/dlw8yinzy/image/upload/v1700218764/portfolio/bnmelttskd6irjcvhy7h.png" },
        { "feature": "Search for team member", "image": "https://res.cloudinary.com/dlw8yinzy/image/upload/v1700218761/portfolio/bghusjjxkwfzya3zohda.png" },
        { "feature": "Send team invite", "image": "https://res.cloudinary.com/dlw8yinzy/image/upload/v1700218764/portfolio/qac5dhbkzlg28fg1kd1s.png" },
        { "feature": "Invite History", "image": "https://res.cloudinary.com/dlw8yinzy/image/upload/v1700218768/portfolio/t4cmy26avmqshvgcg8dy.png" },
        { "feature": "Accept an Invite", "image": "https://res.cloudinary.com/dlw8yinzy/image/upload/v1700218767/portfolio/wqim5t6a7bzls3vy3k3c.png" },
        { "feature": "Invitation Successful", "image": "https://res.cloudinary.com/dlw8yinzy/image/upload/v1700218769/portfolio/iatzb4dklvrrnfxw8hnu.png" },
      ]
    },
    {
      "id": "exp-planner",
      "name": "Expense Planner",
      "description": "The Expense Planner App is a comprehensive solution designed to empower users in efficiently managing their financial activities. Whether it's keeping track of daily expenses or income, this app offers a user-friendly interface and robust functionality. With seamless synchronization across devices, users can access their financial data anytime, anywhere.",
      "github": "https://github.com/AdahGodwin/Expense_planner",
      "projectImage": "https://res.cloudinary.com/dlw8yinzy/image/upload/v1700218658/portfolio/eezfn3og3efxoicrvtfp.png",
      "coverImage": "https://res.cloudinary.com/dlw8yinzy/image/upload/v1700218658/portfolio/oqhzjbvvlq9komzueitb.png",
      "mobileImage": "https://res.cloudinary.com/dlw8yinzy/image/upload/v1700218656/portfolio/xpzmrq228an2nchzfpsb.png",
      "baseColor": "#008080",
      "type": "Mobile App",
      "language": "Flutter and Dart",
      "client": "Personal Project",
      "shortIntro": "Track and manage your expenses on the go with our user-friendly app.",
      "challenge": "The primary challenge in developing the Expense Planner was designing an intuitive user interface for expense categorization. Additionally, creating the logic for keeping track of the transactions and also implementing filtering options based on the day or month posed significant challenges.",
      "homeImage": "https://res.cloudinary.com/dlw8yinzy/image/upload/v1700218658/portfolio/eezfn3og3efxoicrvtfp.png",
      "landscapeImage": "https://res.cloudinary.com/dlw8yinzy/image/upload/v1700218665/portfolio/olupfrj1e6g5xsrrnope.png",
      "scopeAndContribution": "My scope and contribution for this project encompassed the development of the entire frontend using Flutter. I also implemented on-device storage capabilities to enable users to view their financial information without requiring an internet connection.",
      "DesignRationale": "For the design, I chose an interesting and engaging visual style to challenge my frontend development skills while maintaining a high level of usability and aesthetic appeal.",
      "featureImages": [
        { "feature": "Sign up Screen", "image": "https://res.cloudinary.com/dlw8yinzy/image/upload/v1700218659/portfolio/eqaokf7x01jqhvzjwa3q.png" },
        { "feature": "Summary Screen", "image": "https://res.cloudinary.com/dlw8yinzy/image/upload/v1700218653/portfolio/lxixdfiabocm9md5xisz.png" },
        { "feature": "Side Navigation", "image": "https://res.cloudinary.com/dlw8yinzy/image/upload/v1700218656/portfolio/xpzmrq228an2nchzfpsb.png" },
        { "feature": "Charts", "image": "https://res.cloudinary.com/dlw8yinzy/image/upload/v1700218655/portfolio/p0tmuqgpfro3icmbcndh.png" },
        { "feature": "Transaction Details", "image": "https://res.cloudinary.com/dlw8yinzy/image/upload/v1700218653/portfolio/s713ekw5yu7cbqjjpv8m.png" },
        { "feature": "Settings Screen", "image": "https://res.cloudinary.com/dlw8yinzy/image/upload/v1700218652/portfolio/ijn2jobkizmdlrbryp5t.png" },
        { "feature": "Add new Transaction", "image": "https://res.cloudinary.com/dlw8yinzy/image/upload/v1700218654/portfolio/u751moltey7g4h4kqpc1.png" },
        { "feature": "Theme Changer", "image": "https://res.cloudinary.com/dlw8yinzy/image/upload/v1700218658/portfolio/c7o54jc9tdalvmmvczsv.png" },
        { "feature": "Dark Theme", "image": "https://res.cloudinary.com/dlw8yinzy/image/upload/v1700218659/portfolio/xnxuwo4orbiehnrp5jmh.png" },
        { "feature": "Green Theme", "image": "https://res.cloudinary.com/dlw8yinzy/image/upload/v1700218654/portfolio/effehyvum3vthnivyhcu.png" },
        { "feature": "Teal Theme", "image": "https://res.cloudinary.com/dlw8yinzy/image/upload/v1700218656/portfolio/wb8ozqrbnvdcw7dlyrr9.png" },
      ]
    },
    {
      "id": "e-commerce-app",
      "name": "Luxe Haven",
      "description": "Luxe is a comprehensive online shopping platform that brings a wide array of products to users' fingertips. With an elegant user interface and efficient search capabilities, customers can seamlessly browse and explore the product catalog. Secure checkout processes and multiple payment gateways ensure a smooth shopping experience.",
      "github": "https://github.com/AdahGodwin/E-Commerce-App",
      "projectImage": "https://res.cloudinary.com/dlw8yinzy/image/upload/v1700218787/portfolio/eqnqj7alit5fna6xph7g.png",
      "coverImage": "https://res.cloudinary.com/dlw8yinzy/image/upload/v1700218779/portfolio/z24vs0intahy53ecgd1z.png",
      "baseColor": "#800080",
      "type": "Mobile App",
      "language": "Flutter and Dart",
      "client": "Personal Project",
      "shortIntro": "Shop for your favorite products from the comfort of your home.",
      "challenge": "One of the primary challenges in developing Luxe Haven was creating a UI with a bottom tab navigation structure to provide users with easy access to various sections of the app. Additionally, implementing user authentication and ensuring its security were significant challenges.",
      "homeImage": "https://res.cloudinary.com/dlw8yinzy/image/upload/v1700218787/portfolio/eqnqj7alit5fna6xph7g.png",
      "mobileImage": "https://res.cloudinary.com/dlw8yinzy/image/upload/v1700218782/portfolio/hfhykeh6e7mh5uhy2m01.png",
      "landscapeImage": "https://res.cloudinary.com/dlw8yinzy/image/upload/v1700218783/portfolio/ybiiafwed9npwyace51l.png",
      "scopeAndContribution": "My scope and contribution for this project encompassed the entire app development process using Flutter. I also integrated the app with Firebase backend services to enable secure user authentication and data management.",
      "DesignRationale": "In terms of design, I employed a visually appealing and user-friendly approach to showcase products effectively and provide a delightful shopping experience for users.",
      "featureImages": [
        { "feature": "Products Screen with filters", "image": "https://res.cloudinary.com/dlw8yinzy/image/upload/v1700218784/portfolio/etvwrl79vn0tfrtbhma4.png" },
        { "feature": "Users Cart Items", "image": "https://res.cloudinary.com/dlw8yinzy/image/upload/v1700218786/portfolio/clagmwgrb70vnnqboz1o.png" },
        { "feature": "Search Filter", "image": "https://res.cloudinary.com/dlw8yinzy/image/upload/v1700218786/portfolio/o0grn1epjzojz8raftus.png" },
        { "feature": "App Drawer", "image": "https://res.cloudinary.com/dlw8yinzy/image/upload/v1700218781/portfolio/izszxu40imzpnse0j2c5.png" },
        { "feature": "Product details", "image": "https://res.cloudinary.com/dlw8yinzy/image/upload/v1700218781/portfolio/zj5zzpkbaewgmxwb5wo2.png" },

      ]
    },
    {
      "id": "chat-app",
      "name": "Tech Chat",
      "description": "The Chat App is a dynamic platform that facilitates real-time communication between users. It offers a seamless and responsive interface for individuals and groups to interact, and stay connected. With robust features and secure protocols, users can exchange messages in a fluid environment, enhancing their connectivity.",
      "github": "https://github.com/AdahGodwin/Chat_app",
      "projectImage": "https://res.cloudinary.com/dlw8yinzy/image/upload/v1700218797/portfolio/pcdtkbipz8qsscpsakd8.png",
      "coverImage": "https://res.cloudinary.com/dlw8yinzy/image/upload/v1700218792/portfolio/rpbo9dmbjoq5o7w40vsz.png",
      "baseColor": "#FFC0CB",
      "type": "Mobile App",
      "language": "Flutter and Dart",
      "client": "Personal Project",
      "mobileImage": "https://res.cloudinary.com/dlw8yinzy/image/upload/v1700218798/portfolio/fhrww1ewyacsbhys43kh.png",
      "shortIntro": "Stay connected with your friends and colleagues through instant messaging.",
      "challenge": "The main challenge in developing the Tech Chat app was the implementation of real-time updates while ensuring message consistency throughout the application.",
      "homeImage": "https://res.cloudinary.com/dlw8yinzy/image/upload/v1700218797/portfolio/pcdtkbipz8qsscpsakd8.png",
      "landscapeImage": "https://res.cloudinary.com/dlw8yinzy/image/upload/v1700218799/portfolio/techland.png",
      "scopeAndContribution": "My scope and contribution to this project involved the complete development of the frontend using Flutter. I also integrated the app with Firebase backend services for data storage and real-time messaging functionality.",
      "DesignRationale": "In terms of design, I opted for a clean and modern aesthetic to enhance the user experience by providing a clutter-free and visually appealing environment for communication.",
      "featureImages": [
        { "feature": "Real-time Messaging", "image": "https://res.cloudinary.com/dlw8yinzy/image/upload/v1700218798/portfolio/fhrww1ewyacsbhys43kh.png" },
        { "feature": "Chat History", "image": "https://res.cloudinary.com/dlw8yinzy/image/upload/v1700218794/portfolio/l5y5a3gsesxfos4sspit.png" },
        { "feature": "Chats with Unread Messages", "image": "https://res.cloudinary.com/dlw8yinzy/image/upload/v1700218795/portfolio/fqppmixf4hvlb8ehxx3i.png" },
        { "feature": "User List", "image": "https://res.cloudinary.com/dlw8yinzy/image/upload/v1700218796/portfolio/a26y4civegaa8vpvxxhs.png" }
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
