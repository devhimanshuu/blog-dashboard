# Blog Dashboard

This Blog Dashboard is a simple blogging application built with Next.js and styled using Tailwind CSS. It simulates functionalities like viewing posts, filtering by user, adding comments, and deleting comments. Data is fetched from a placeholder API to mimic a backend.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Routes](#routes)
  - [`/posts`](#posts)
  - [`/posts/[id]`](#postsid)
  - [`/api/posts`](#apiposts)
  - [`/api/users`](#apiusers)
- [Components](#components)
  - [PostCard](#postcard)
  - [CommentForm](#commentform)
  - [CommentList](#commentlist)
- [Deployment](#deployment)

## Installation
# Clone the Repository
git clone https://github.com/your-username/blog-dashboard.git
cd blog-dashboard

# Install Dependencies
npm install
or
yarn install
or
pnpm install
or
bun install
\```

# Run the development server
npm run dev
or
yarn dev

\```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

This project is structured with Next.js' `app/` directory to leverage file-based routing. Below are the main routes and their functionalities.

### Routes

- **`/posts`**: Displays a list of all posts with basic details. Users can click on a post to view details.
- **`/posts/[id]`**: Shows detailed information about a single post. Users can add and delete comments on this page.
- **`/api/posts`**: Mock API endpoint to fetch post data (simulated with JSONPlaceholder).
- **`/api/users`**: Mock API endpoint to fetch user data.

### Components

- **PostCard**: Displays summary information about each post (title, user info, etc.). Used on the `/posts` page.
- **CommentForm**: Allows users to add comments to a post.
- **CommentList**: Displays a list of comments for a post. Each comment includes an option to delete it.

## Deployment
Deployed link : [Blog DashBoard](https://blog-dashboard-blond.vercel.app)
