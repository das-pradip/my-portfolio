# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# 💼 Pradip Das - Developer Portfolio

Welcome to my personal developer portfolio website built with **React.js**!  
This site showcases my skills, projects, and ways to contact me. It is fully responsive and designed with modern UI/UX practices for both desktop and mobile users.

---

## 🚀 Features

- 💡 Clean Hero Section
- 👨‍💻 About Me Section
- 🛠️ Skills Section with modern tech stack
- 📁 Projects Showcase with links
- 📫 Contact Section with Lottie animation
- 📱 Responsive Navbar with dropdown for mobile view
- 🎨 Smooth hover effects and transitions
- 📦 Reusable components and modular CSS styling
- 🦶 Sticky footer with social/contact information

---

## 🛠️ Tech Stack

- **React.js** (with hooks and reusable components)
- **HTML5 + CSS3**
- **JavaScript (ES6+)**
- **Lottie-web** for animations
- **Responsive design** using media queries

---

## 📁 Folder Structure

portfolio/
│
├── public/
│   └── assets/               # Images, animations
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   └── Contact.jsx
│   ├── App.js
│   ├── index.js
│   └── styles/
│       ├── Navbar.css
│       ├── Footer.css
│       └── ...other CSS
│
├── .gitignore
├── README.md
└── package.json


## 📦 Installation & Running Locally

Follow these steps to run the project locally on your machine:

```bash
# Clone the repository
git clone https://github.com/das-pradip/my-portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm start
