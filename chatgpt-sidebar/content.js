function createSidebar() {
  // If already there a sidebar panel on the page, do nothing (prevents duplicates  on re-renders/ navigation)
  if (document.getElementById("mySidebar")) return;

  // Making the <div> that will hold the panel UI
  const sidebar = document.createElement("div");

  // Giving an id to the <div>
  sidebar.id = "mySidebar";

  // putting cotents in the <div>
  sidebar.innerHTML = `
  <div style = "display: flex; justify-content: space-between; align-items: center;">
    <h2
    style="margin: 0;
    font-size: 18px;">🗯️ My Chats </h2>

    <div>

     <button id ="toggleTheme" style = "margin-right:6px;" title="Toggle Dark/Light Mode"> 🌓 </button>
     <button id ="collapseSidebar" title="Collapse Sidebar" > ⏩ </button>


    </div>
  </div>
  
  <ul id="questionList" style="list-style: none; padding: 0; margin-top: 15px;"></ul>
   
  <div id="dragHandle"></div>`; // For Dragging the Sidebar in the Y-axis

  // syling the sidebar dynamically
  const style = document.createElement("style");
  style.textContent = `
    #mySidebar {
      font-family: "Segoe UI" , Roboto, sans-serif;
      position: fixed;
      top: 0;
      right: 0;
      width: 260px;
      height: 100vh;
      background: var(--sidebar-bg) !important;
      color: var(--sidebar-text);
      border-left: 1px solid var(--border);
      box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
      padding: 12px;
      display: flex;
      flex-direction: column;
      transition: transform 0.3s ease;
      z-index: 10000;
      border-radius: 10px;
      overflow-y: auto;
}
  #questionList li {
    font-size: 14px;
    font-weight: 500px;
    padding: 8px 10px;
    margin: 4px 0;
    border-radius: 6px;
    cursor: pointer;
    transition: background 0.2s;
    color: var(--sidebar-text);
    background: transparent;
}

#questionList li:hover{
    background: var(--hover-bg);
}

#mySidebar.collapsed{
    transform: translateX(100%);
}

#mySidebar button{
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 16px;
}

 body {
    --sidebar-bg: #f7f7f8;
    --sidebar-text: #222;
    --border: #ddd;
    --hover-bg: #e4e4e7;
    --body-bg: #f7f7f8;
    --chat-text: #202123;
 }

body.dark{
    --sidebar-bg: #202123;
    --sidebar-text: #e6e6e6;
    --border: #444;
    /* --hover-bg: #555654ff; */
    --hover-bg: #2a2b26;
    /* --hover-bg: #2a2b26;  */
    --body-bg: #202123;
    --chat-text: #e6e6e6;
}

body{
    margin-right: 260px !important;
    background: var(--body-bg);
    color: var(--chat-text);
    transition: background 0.3s ease, color 0.3s ease;
}
 #dragHandle{
 position: absolute;
 left: -5px;
 top: 0;
 width: 8px;
 height: 100%;
 cursor: ew-resize;
 background: transparent;
 color: #444;
 }   
  
#dragHandle:hover{
    background: rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px){
    #mySidebar {
        width: 180px !important;
        font-size: 14px;
    }

    body{
        margin-right: 180px !important;
    }
}

@media (max-width: 500px){
    #mySidebar {
        transform: translateX(100%);
    }
    #mySidebar.show {
        transform: translateX(0);
    }
    body{
        margin-right: 0 !important;
    }
}

    #mobileToggle {
    display: none;
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: var(--sidebar-bg);
    border: 1px solid var(--border);
    border-radius: 50%;
    padding: 10px;
    font-size: 18px;
    cursor: pointer;
    z-index: 10001;
}

@media (max-width: 500px){
    #mobileToggle {
        display: block;
    }
}

@media (max-width: 500px) {
    #questionList li {
        padding: 12px 14px;
        font-size: 15px;
    }
}

@media (max-width: 500px){
    #mySidebar {
        -webkit-overflow-scrolling: touch;
        overflow-y: auto;
    }
}

@media (max-width: 500px){
    #dragHandle {
        display: none;
    }
}

@media (max-width: 500px){
    #mySidebar {
        position: fixed;
        top: 0;
        right: 0;
        height: 100%;
        margin-right: 0 !important;
        box-shadow: -2px 0 8px rgba(0, 0, 0, 0.3);
    }

    body{
        margin-right: 0 !important;
    }
}

`;

  // Adding this content to the page so it becomes visible through (body.appendChild)
  document.body.appendChild(style);
  document.body.appendChild(sidebar);

  // collapse button

  document.getElementById("collapseSidebar").addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
  });

  // Theme toggle

  document.getElementById("toggleTheme").addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
}


// Creating the toggle button separately
const mobileToggle = document.createElement("button");
mobileToggle.id = "mobileToggle";
mobileToggle.title = "Open Sidebar";
mobileToggle.textContent = "◀️";
document.body.appendChild(mobileToggle);

// Adding the event listener
mobileToggle.addEventListener("click", () => {
  const sidebar = document.getElementById("mySidebar");
  sidebar.classList.toggle("show");
});


// Now putting messages in the sidebar list
function updateSidebar() {
  const questionList = document.getElementById("questionList");
  if (!questionList) return;

  questionList.innerHTML = "";

  // Find all your messages
  const userMessages = document.querySelectorAll(
    "[data-message-author-role='user']"
  );

  userMessages.forEach((msg) => {
    // Get the visible text, trim whitespace
    const text = msg.innerText.trim().split("\n")[0]; // first line
    const li = document.createElement("li");
    li.textContent = text.length > 50 ? text.slice(0, 60) + "..." : text;

    li.addEventListener("click", () => {
      msg.scrollIntoView({ behavior: "smooth", block: "center" });
    });

    // Adding the List item to the sidebar
    questionList.appendChild(li);
  });
}

// Listen for new messages

function watchForNewMessages() {
  const chatContainer = document.querySelector("main");
  if (!chatContainer) return;

  // MutationObserver -  provides ability to watch for changes being made to the DOM
  const observer = new MutationObserver(updateSidebar);
  observer.observe(chatContainer, { childList: true, subtree: true });
}

// Resizable sidebar logic
(function enableSidebarResize() {
  const checkExist = setInterval(() => {
    const sidebar = document.getElementById("mySidebar");
    const handle = document.getElementById("dragHandle");

    if (sidebar && handle) {
      clearInterval(checkExist); // stop checking once found

      let isResizing = false;

      handle.addEventListener("mousedown", (e) => {
        isResizing = true;
        document.body.style.userSelect = "none"; // disable text selection
      });

      document.addEventListener("mousemove", (e) => {
        if (!isResizing) return;

        let newWidth = window.innerWidth - e.clientX;
        newWidth = Math.max(180, Math.min(newWidth, 500));

        sidebar.style.width = newWidth + "px";
        document.body.style.marginRight = newWidth + "px";
      });

      document.addEventListener("mouseup", () => {
        isResizing = false;
        document.body.style.userSelect = ""; // enable text selection
      });
    }
  }, 300); // check every 300ms until sidebar is ready
})();
// Put the panel on the page (once)
createSidebar();
// Fill it with the current messages
updateSidebar();
// Keep it in the sync as new messages appear
watchForNewMessages();
