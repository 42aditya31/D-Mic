
# 📘 D\_MIC 

> **Tagline:** *Engineers tweet here—not influencers.*
> **Tech Stack:** React + Strapi | JWT Auth | Modern REST APIs

---

## 🚀 Introduction

**D\_MIC** is a microblogging platform for engineers who value ideas over influence. It delivers a focused space where developers share thoughts, code snippets, insights, and discussions—one concise post at a time.

---![image](https://github.com/user-attachments/assets/aad1eaf6-3e42-4c01-bcef-7d18ae062fa8)


## 🧩 Core Features

### 🔐 Authentication

A robust authentication system ensures only real engineers contribute.

* **Register/Login** using email and password.
* **Secure sessions** using JWT tokens issued by Strapi.
* **Token storage**: Handled client-side via HTTP-only cookies or localStorage.

### 🗨️ Post Engine

Users can:

* Publish concise, idea-focused posts (think tweets, not threads).
* Edit or delete their own content.
* View all posts in reverse chronological order or filtered by user.

### 💬 Comments

Engage in thoughtful discussions:

* Add comments to any post.
* Manage your own comments.
* View contextual comment threads under each post.

### ❤️ Like System

Show appreciation, not clout.

* One-click like/unlike toggle.
* Real-time like counts per post.
* Prevent duplicate likes per user/post.

### 👤 User Profiles

Each user has a space to call their own:

* Profile includes name, bio, and a stream of authored posts.
* Public access allows others to explore contributors.
* Future-ready for enhancements like follow systems.

---

## ⚙️ System Design

### Frontend (React)

A responsive SPA using React and Axios/Fetch to consume Strapi APIs.

* Componentized UI: PostCard, CommentBox, LikeButton, ProfileHeader.
* Context/Redux manages auth and global state.
* Route protection based on JWT presence and role.

### Backend (Strapi)

Headless CMS for fast content modeling and secure API provisioning.

* Content Types: `Post`, `Comment`, `Like`, `User`.
* Auto-generated RESTful APIs.
* Role-based access control for public/authenticated users.

---

## 🔧 Environment Configuration

### Frontend (.env)

```
REACT_APP_API_URL=https://localhost:1337/
```

### Backend (Strapi)

Use environment-specific settings for production/staging.

* Database: SQLite for development, PostgreSQL for production.
* Email: Configure for password resets or notifications.

---

## 🔗 API Overview

| Resource  | Method   | Endpoint               | Auth |
| --------- | -------- | ---------------------- | ---- |
| Auth      | POST     | `/auth/local`          | ❌    |
| Auth      | POST     | `/auth/local/register` | ❌    |
| User Info | GET      | `/users/me`            | ✅    |
| Posts     | GET/POST | `/posts`, `/posts/:id` | ✅    |
| Comments  | GET/POST | `/comments`            | ✅    |
| Likes     | POST     | `/likes` (toggle)      | ✅    |
| Profiles  | GET      | `/users/:id`           | ❌    |

---

## 📈 Growth-Ready Roadmap

Planned enhancements for a scalable, developer-first experience:

* 🔁 Follow/Unfollow between users
* 🔔 Notification System
* 🌙 Dark Mode UI
* 🧵 Threaded replies
* 🔍 Search & Tagging

---

## 📤 Deployment Recommendations

* **Frontend**: Vercel or Netlify
* **Backend**: Render, DigitalOcean, or Heroku
* **Domains**: Use subdomain routing (e.g., `api.dmic.dev`, `app.dmic.dev`)

---

## 🧠 Best Practices

* Keep post content meaningful and brief.
* Moderate with Strapi's admin panel for content integrity.
* Use Strapi lifecycle hooks for automation (e.g., auto-assign user to post/comment).

---

## 🧪 Developer Tips

* Use Postman or Insomnia to explore Strapi endpoints.
* Create mock users for test environments.
* Customize Strapi roles to fit specific content privileges.

