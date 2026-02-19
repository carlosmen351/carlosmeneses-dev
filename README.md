# Carlos Meneses - Personal Website & Blog

This is the source code for my personal website, portfolio, and blog, built with React, Vite, and Tailwind CSS.

## Project Overview

This is a modern, responsive, and animated single-page application that showcases my projects and hosts my personal blog. The design has been recently updated for a cleaner, more professional look and feel.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) (or [yarn](https://yarnpkg.com/)) installed.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/your-username/your-repo-name.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

### Available Scripts

In the project directory, you can run:

- `npm run dev`: Runs the app in development mode. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.
- `npm run build`: Builds the app for production to the `dist` folder. It correctly bundles React in production mode and optimizes the build for the best performance.
- `npm run preview`: Serves the production build locally to preview it before deploying.

## Customizing the Theme

The theme is configured using CSS variables in `src/index.css`. You can modify the colors for both the light and dark themes by changing the values of the CSS variables.

### Light Theme

```css
:root {
  --color-text: #0D1117;
  --color-background: #F6F8FA;
  --color-primary: #2F81F7;
  --color-secondary: #D9DEE4;
  --color-accent: #2DBA8D;
  --color-border: #D9DEE4;
}
```

### Dark Theme

```css
.dark {
  --color-text: #E6EDF3;
  --color-background: #0D1117;
  --color-primary: #58A6FF;
  --color-secondary: #30363D;
  --color-accent: #39D39F;
  --color-border: #30363D;
}
```

## Blog Post API

This project includes a simple, static API for fetching blog posts.

During the `npm run build` process, a script automatically generates a `posts.json` file inside the `public` directory. This file contains all the metadata for the blog posts.

**Endpoint:** `/posts.json`

Once the site is deployed, you can access the posts data at `https://your-domain.com/posts.json`.

**Example Usage:**
```javascript
fetch('/posts.json')
  .then(response => response.json())
  .then(posts => {
    console.log(posts);
    // Do something with the posts data
  });
```

## Future Development: Content Ingestion

A future goal for this project is to be able to create new blog posts from external applications, such as WhatsApp or Telegram.

This would require moving beyond a static site generation approach and implementing a backend service. Here is a possible high-level approach:

1.  **Choose a Backend:** This could be a traditional Node.js server (like Express or Fastify), a serverless function (e.g., Vercel/Netlify Functions, AWS Lambda), or a Headless CMS with an API (like Strapi, Sanity, or Contentful).
2.  **Create a Secure Endpoint:** The backend would expose a secure API endpoint for creating new posts. This endpoint would need to be protected with an API key or another authentication method.
3.  **Set up a Bot/Webhook:** A bot for WhatsApp or Telegram would be needed. When you send a message to the bot, it would format the content and send it to the secure API endpoint on your backend.
4.  **Store the Content:** The backend would then save the new post content, either to a database or by creating a new markdown file and triggering a rebuild of the site.

This is a significant undertaking but would provide a powerful way to manage content.