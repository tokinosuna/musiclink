# 🎵 MusicLink - Motivational Companion App

> 🚨 **IMPORTANT: Please read the following licensing terms carefully.**
> This is a personal, non-commercial project created for the Panda Hacks 2025 hackathon. Its primary purpose is for educational review and to serve as a portfolio piece.

---

## 📜 License & Usage Guidelines

This project is governed by a dual-license structure to protect both the original work and the rights of third-party IP holders.

### 1. For My Original Work (Code & Creative Writing)

All original source code, as well as all original creative writing (including character dialogue, diary entries, and quotes) created by the author for this project, are licensed under the **Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License**.

A simple summary of this license means you are free to share and adapt my work, as long as you follow three rules:
*   **Attribution (BY):** You must give appropriate credit to me (the original author), provide a link back to this repository, and indicate if you made changes.
*   **Non-Commercial (NC):** You may **not** use the material for any commercial purpose. It cannot be sold or used to generate revenue.
*   **Share-Alike (SA):** If you remix, transform, or build upon my work, you must distribute your new version under the exact same CC BY-NC-SA 4.0 license.

To view a copy of the full license, visit: [http://creativecommons.org/licenses/by-nc-sa/4.0/](http://creativecommons.org/licenses/by-nc-sa/4.0/)

### 2. For Third-Party Characters, Art & Names

The CC BY-NC-SA 4.0 license **DOES NOT** apply to any third-party copyrighted materials used within this project. This includes, but is not limited to:
*   Character names (e.g., Keigo Atobe, Kamui, etc.)
*   Character likenesses, images, and artwork
*   Series names (e.g., The Prince of Tennis, Gintama, etc.)
*   Song titles and artist names

These materials belong to their respective copyright holders. Their use here is for non-commercial, illustrative, and transformative fan-work purposes only, under the principles of fair use.


### 🎵 MusicLink - Motivational Companion App - About the project

MusicLink is a front-end web application built in React for the **Panda Hacks 2025** hackathon. It's designed to help students stay motivated by connecting them with encouraging "companions" through the shared language of music.

## Inspiration

I was inspired by the engaging mechanics of modern social apps but wanted to create a more positive and productive experience. MusicLink was born from the idea of combining a love for music with the need for daily motivation. Instead of seeking dates, users connect with companions who encourage them through AI-powered chat and shared musical tastes, helping to combat procrastination and build positive habits.

## What it Does

MusicLink is a web app where users discover and connect with motivational companions. The core user journey is:

1.  **Discover & Sync:** Users browse character profiles and "sync" with them using a simple button interface.
2.  **Collect Music:** Syncing with a companion instantly adds their top songs to the user's personal playlist, accessible in the app's music player.
3.  **Vibe Check & Chat:** After syncing, the user sends a first message to unlock a persistent chat. The companions, powered by a keyword-based dialogue system, offer encouragement and motivation.
4.  **Customize:** The entire app experience can be personalized with four distinct visual themes and full English/Japanese language support. All preferences and progress are saved locally.

---

## How It's Built / Technical Details

MusicLink is a front-end web application built in React, designed to be a complete and polished prototype for the **Panda Hacks 2025** hackathon.

-   **Component-Based Architecture:** Built with React and functional components, leveraging `useState` and `useEffect` hooks for state management.
-   **Gamified Discovery:** Tinder-style swipe interface (re-imagined with buttons) to discover and "sync" with new companions.
-   **Dynamic Theming Engine:** Four hand-crafted themes (Minimal Light/Dark, Y2K Light/Dark) powered by CSS Variables for instant, seamless switching.
-   **Full Internationalization (I18N):** The ability to switch between English and Japanese across the entire UI and all character content.
-   **State Persistence:** User data (connections, chats, preferences, etc.) is saved to `localStorage`, ensuring a consistent experience across sessions.
-   **Data Hydration:** Includes logic to safely update outdated `localStorage` data structures to new ones, preventing errors for returning users.
-   **Fully Responsive:** A fluid desktop layout that transforms into a mobile-friendly experience with slide-out menus and a bottom navigation bar.
-   **Polished UI/UX:** Complete with custom components, smooth animations, and Feather Icons for a clean look.

---

## 🛠️ Tech Stack

-   **Framework:** React 18
-   **Language:** JSX (JavaScript), HTML5, CSS3
-   **Tooling:** Babel (in-browser transpilation for this prototype)
-   **Icons:** Feather Icons
-   **Persistence:** Browser `localStorage` API

---

## 🧠 What I Learned

Building MusicLink was a fantastic learning experience, particularly in these areas:

-   **Complex State Management:** Juggling multiple, interconnected pieces of state (e.g., how adding a connection affects the discover queue and the journal simultaneously) was a great challenge. It reinforced the importance of a single source of truth and careful state design.
-   **Robust Theming:** Implementing the theme switcher taught me the power and flexibility of CSS Custom Properties (Variables). It's a much cleaner and more scalable approach than managing multiple CSS files or using classes for every property.
-   **Defensive Programming:** Writing the `rehydrateItems` function was a key insight. It forced me to think not just about the current state of the app, but how to gracefully handle data from *past versions* of the app to prevent breaking changes for users.
-   **Responsive Design Logic:** Thinking through how to transform a 3-column desktop layout into a functional mobile view with a bottom bar and sliding sidebars was a great exercise in CSS, media queries, and React state for controlling UI visibility.

---

## 🔮 Team
╮ೃ⁀➷Me

---

## 🔮 Future Improvements

While I'm proud of this hackathon submission, there are many ways it could be scaled into a full production application:

-   ** Real Backend & Database:** Replace `localStorage` with a service like **Firebase** or **Supabase** to allow for user accounts, real-time chat, and data persistence across devices. (My long term goal.)
-   ** Integrate Music APIs:** Connect to the **Spotify** or **YouTube Music API** to allow for actual song playback and to fetch real, dynamic playlists for characters.
-   ** Smarter AI Chat:** Move from keyword-based responses to a real **Large Language Model (LLM)** via an API (like the ai API) for more natural, varied, and intelligent conversations.
-   ** Refactor to a Build System:** Migrate from the in-browser Babel setup to a proper build tool like **Vite** or **Create React App** for code splitting, optimization, and a better developer experience.
-   ** Onboarding Flow:** Add a simple tutorial or a "How-To" modal that appears automatically for first-time users.

**You do not have permission from me to download, reuse, or redistribute these third-party assets.** You are solely responsible for securing your own rights or using your own assets if you choose to adapt this work.

---
### Note
This `README.md` file contains the **overriding and governing terms** for the project, specifically the **non-commercial** clause.
So thanks for reading. 
