# Personal Portfolio Website

A modern, responsive personal portfolio website built with React and Vite. Features a clean design with smooth animations and mobile-responsive layout.

## Features

- 🎨 Modern, clean design with gradient backgrounds
- 📱 Fully responsive layout for all devices
- ⚡ Fast loading with Vite
- 🎯 Smooth scrolling navigation
- 📝 Contact form with validation
- 🛠️ Skills showcase with icons
- 📂 Project portfolio with tech stack tags
- 🌟 Hover animations and transitions

## Sections Included

1. **Header** - Hero section with navigation
2. **About** - Personal introduction and stats
3. **Projects** - Portfolio showcase (6 sample projects)
4. **Skills** - Technical skills organized by category
5. **Contact** - Contact form and social links
6. **Footer** - Copyright and additional links

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Navigate to the portfolio directory:
   ```bash
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

## Customization Guide

### Personal Information

#### 1. Update Header Information
In `src/App.jsx`, find and replace:
- `"Your Name"` with your actual name
- `"Full Stack Developer & Creative Problem Solver"` with your tagline
- Update the hero title and subtitle

#### 2. About Section
Replace the placeholder text in the About section with:
- Your personal introduction
- Your background and experience
- Update the stats (years of experience, projects completed, etc.)
- Add your professional photo (replace the placeholder)

#### 3. Projects Section
Update each project card with:
- **Project Title**: Your actual project name
- **Description**: Brief description of what the project does
- **Tech Stack**: Technologies used (update the tech tags)
- **Links**: Replace `#` with actual GitHub and live demo URLs

#### 4. Skills Section
The skills are organized into categories:
- **Frontend**: React, JavaScript, CSS3, HTML5, Vite
- **Backend**: Node.js, Express, Python, REST APIs, Authentication
- **Database**: MongoDB, PostgreSQL, Redis, Data Modeling
- **Tools & Others**: Docker, Git, AWS, CI/CD

Add or remove skills as needed, and update the emoji icons.

#### 5. Contact Information
Update the contact section with:
- Your actual email address
- Your LinkedIn profile URL
- Your GitHub profile URL
- Any other social media links

### Styling Customization

#### Colors
The main color scheme uses:
- Primary: `#646cff` (blue)
- Secondary: `#535bf2` (darker blue)
- Background gradients: Purple to blue
- Text: `#1a1a1a` (dark gray)

To change colors, update the CSS variables in `src/App.css`.

#### Fonts
The website uses the Inter font family. To change fonts:
1. Update the Google Fonts import in `src/index.css`
2. Change the `font-family` properties in the CSS

### Adding Your Photo

1. Place your professional photo in the `src/assets/` directory
2. Update the About section in `src/App.jsx`:
   ```jsx
   <div className="about-image">
     <img src="/path/to/your/photo.jpg" alt="Your Name" />
   </div>
   ```

### Adding Project Screenshots

1. Add project screenshots to the `src/assets/` directory
2. Update each project card's image section:
   ```jsx
   <div className="project-image">
     <img src="/path/to/project-screenshot.jpg" alt="Project Name" />
   </div>
   ```

### Form Submission

The contact form currently logs to the console. To make it functional:

1. **Email Service**: Use services like EmailJS, Formspree, or Netlify Forms
2. **Backend API**: Create a simple backend to handle form submissions
3. **Update the `handleSubmit` function** in `src/App.jsx`

Example with EmailJS:
```javascript
import emailjs from 'emailjs-com';

const handleSubmit = (e) => {
  e.preventDefault();
  
  emailjs.sendForm(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    e.target,
    'YOUR_USER_ID'
  )
  .then((result) => {
    console.log('Email sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  }, (error) => {
    console.log('Email failed to send:', error);
  });
};
```

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Deploy: `npm run deploy`

## File Structure

```
portfolio/
├── src/
│   ├── App.jsx          # Main component with all sections
│   ├── App.css          # Component-specific styles
│   ├── index.css        # Global styles
│   └── main.jsx         # App entry point
├── public/              # Static assets
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
└── vite.config.js       # Vite configuration
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Feel free to fork this project and customize it for your own portfolio. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Credits

- Built with [React](https://reactjs.org/)
- Bundled with [Vite](https://vitejs.dev/)
- Styled with modern CSS
- Icons from emoji and Unicode characters
- Fonts from [Google Fonts](https://fonts.google.com/)

---

**Happy coding! 🚀**
