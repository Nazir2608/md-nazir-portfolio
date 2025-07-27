# Md Nazir - Java Developer Portfolio Website

A professional portfolio website showcasing Java development skills and experience, built with the MERN stack (MongoDB, Express, React, Node.js).

## Features

- **Modern Responsive Design**: Mobile-first responsive design inspired by anuraghazra.dev
- **Dark/Light Theme Toggle**: User preference theme switching with localStorage persistence
- **Professional Sections**: 
  - Hero section with animated typing effect
  - About section with personal information
  - Skills showcase with categorized technologies
  - Experience timeline with detailed descriptions
  - Projects portfolio with GitHub links
  - Contact form with email integration
- **Smooth Animations**: Framer Motion animations and CSS transitions
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## Tech Stack

### Frontend
- **React 19**: Modern React with hooks and functional components
- **React Router DOM**: Client-side routing
- **Framer Motion**: Animation library
- **React Icons**: Icon component library
- **React Toastify**: Toast notifications
- **Custom CSS**: Modern CSS with variables and responsive design

### Backend
- **Node.js**: JavaScript runtime environment
- **Express.js**: Web application framework (or simple HTTP server)
- **CORS**: Cross-origin resource sharing
- **Portfolio API**: RESTful endpoints serving portfolio data

## Local Development Setup

   The server will start on `http://localhost:5000`

### Development Mode (Optional)

For development with hot reloading:

1. **Start the backend server**

   npm run server

2. **In a new terminal, start the React development server**

   npm run client

   This will start:
   - Backend server on `http://localhost:5000`
   - React development server on `http://localhost:3000`

## Project Structure

portfolio-website-md-nazir/
├── client/                 # React frontend application
│   ├── public/            # Public assets
│   ├── src/               # React source code
│   │   ├── components/    # React components
│   │   ├── App.js         # Main application component
│   │   ├── App.css        # Global styles
│   │   └── index.js       # React entry point
│   ├── package.json       # Frontend dependencies
│   └── build/             # Production build (generated)
├── server.js              # Backend server
├── package.json           # Backend dependencies
├── package-lock.json      # Dependency lock file
└── README.md              # This file

## Customization

### Personal Information
Edit the portfolio data in `server.js` to customize:
- Personal details (name, title, bio, contact information)
- Skills and technologies
- Work experience
- Projects
- Education
- Achievements

### Styling
- Main styles are in `client/src/App.css`
- Component-specific styles are in respective CSS files
- CSS variables for easy theme customization
- Responsive breakpoints for mobile optimization

### Content Sections
React components in `client/src/components/`:
- `Hero.js` - Landing section
- `About.js` - Personal information
- `Skills.js` - Technical skills
- `Experience.js` - Work experience
- `Projects.js` - Project portfolio
- `Contact.js` - Contact form
- `Footer.js` - Site footer

## Portfolio Owner Information

**Md Nazir**
- **Position**: Java Developer | Backend Engineer  
- **Experience**: 2+ years in backend development
- **Location**: New Delhi, India
- **Email**: mdnazir2608@gmail.com
- **Phone**: +91-9135621974
- **LinkedIn**: [mdnazir2608](https://linkedin.com/in/mdnazir2608)
- **GitHub**: [Nazir2608](https://github.com/Nazir2608)

### Key Expertise
- **Backend Technologies**: Java 8/17, Spring Boot, Spring MVC, Hibernate
- **Databases**: Oracle, MySQL, MongoDB
- **Enterprise Tools**: IBM WebSphere, IBM MQ, Kafka
- **Cloud & DevOps**: AWS, Docker, Kubernetes, Jenkins
- **Current Role**: Java Developer at Opalina Technologies (Banking Domain)