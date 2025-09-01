# 🗯️ ChatGPT Question Sidebar

A Local lightweight Chrome extension that adds a **right-side panel** in ChatGPT, showing a list of your questions/messages.  
Quickly jump to any conversation message without endless scrolling. Boosts productivity and makes ChatGPT navigation much easier.  

*✨Now works on Desktop (Chrome) & Mobile (Kiwi Browser)! 📱💻*
---

## ✨ Features
- 📌 Sidebar panel listing all your questions in the current chat  
- 🎨 Dark / Light mode toggle  
- ⏩ Collapse/expand sidebar  
- 📏 Resizable panel with drag handle  
- 🔍 One-click navigation to any message  
- ⚡ Auto-updates as you chat (using MutationObserver)  

---

## 📸 Screenshots
<img width="1918" height="1078" alt="sidebar" src="https://github.com/user-attachments/assets/add81b6c-75a4-48c9-8ac8-98ac6e599d43" />


---

## 🚀 Installation (Developer Mode)

1. Clone or download this repository
   ```bash
   git clone https://github.com/Sami21234/Chatgpt-Sidebar.git
   cd Chatgpt-Sidebar
   ```
2. Open **Google Chrome** and go to:
   ```bash
   chrome://extensions/
   ```
3. Enable **Developer mode** (toggle in the top-right)  
4. Click **"Load unpacked"**  
5. Select the folder containing this project  
6. Open ChatGPT – the sidebar should appear on the right ✅  

---
## 📱 Mobile Support (Kiwi Browser)
*Now works on mobile Devices too!🎉*
1. Install Kiwi Browser(https://kiwibrowser.com/)
2. Open Kiwi and go to:
   ```
   chrome://extensions/
   ```
3. Enable the Developer Mode
4. *Tap "Load Unpacked" and Select the folder (ChatGPT-Sidebar)*
5. Open ChatGPT in Kiwi Browser - the sidebar will appear on the right✅
---

## 🛠️ How It Works
- Injects a sidebar (`content.js`) when ChatGPT loads  
- Captures all user messages (`[data-message-author-role='user']`)  
- Populates them into a list inside the sidebar  
- Clicking an item scrolls to that chat message  
- Provides extra controls for theme, collapsing, and resizing  

---
## ⭐ If you find this extension useful, don’t forget to star the repo!
