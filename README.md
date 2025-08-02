# Archios - Architectural Website

A modern, responsive architectural website built with React, Vite, and Tailwind CSS.

## Features

- 🏗️ Modern architectural design showcase
- 📱 Fully responsive design
- 🎥 Interactive video modal
- 📊 Project statistics with year filtering
- 🖼️ Beautiful image galleries
- ⚡ Fast development with Vite
- 🎨 Styled with Tailwind CSS

## Sections

1. **Header** - Navigation with mobile menu
2. **Hero** - Main landing section with image gallery
3. **Project Stats** - Statistics with video modal
4. **Dream Building** - Features showcase with split image effect
5. **Projects** - Year-filtered project gallery
6. **CTA** - Call-to-action section

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone or download this project
2. Open terminal in the project directory
3. Install dependencies:

```bash
npm install
```

### Running the Development Server

```bash
npm run dev
```

The website will open automatically in your browser at `http://localhost:3000`

### Building for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── ProjectStats.jsx
│   │   ├── DreamBuildingSection.jsx
│   │   ├── ProjectsSection.jsx
│   │   └── CTASection.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Technologies Used

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## Customization

- Update images by replacing the Unsplash URLs in the components
- Modify colors by editing the Tailwind classes
- Add new sections by creating new components and importing them in `App.jsx`
- Update the YouTube video ID in `ProjectStats.jsx` for the video modal

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this project for your own purposes. 