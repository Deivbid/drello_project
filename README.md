# 🚀 Drello: Your Project Management Hero 🚀

![image](https://i.imgur.com/dcgSalA.png)

Welcome to the hub for Drello, a dynamic full-stack application that’s your go-to for managing projects like a pro! It’s crafted using Next.js 14, React, Prisma, Stripe, Tailwind CSS, and MySQL.

🌟 **Cool Features You’ll Love:**

- 🔐 Easy account auth (Using Clerk)

- 🏢 Create and manage organizations/workspaces

- 📋 Effortlessly create, rename, and delete boards

- 🖼️ Stunning random cover images via Unsplash API

- 📊 Activity logs to keep track of all actions

- 🛠️ Super flexible lists and cards with drag & drop

- 💳 Stripe integration for premium features

- 🌐 Stylish landing page to welcome users

- 📚 Robust MySQL database with Prisma ORM

- 💨 Quick UI adjustments with shadcnUI & TailwindCSS

### Getting Started

Make sure you have **Node version 18.x.x** installed to run smoothly!

### 🛠 Cloning the repository

```shell

git  clone  https://github.com/AntonioErdeljac/next13-trello.git

```

### 📦 Install packages

```shell

npm i
// or
bun

```

### 🔧 Setup .env file

```shell
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=
DATABASE_URL=
NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=
STRIPE_API_KEY=
NEXT_PUBLIC_APP_URL=
STRIPE_WEBHOOK_SECRET=
```

### 💽 Setup Prisma with MySQL Database (I used Neon)

```shell
npx prisma generate
npx prisma db push
// or
bunx prisma generate
bunx prisma db push
```

### 🚀 Start the app

```shell
npm run dev
// or
bun dev
```
