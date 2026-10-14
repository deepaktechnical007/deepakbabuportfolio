const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("siteNav");
const filterButtons = document.querySelectorAll("[data-filter]");
const projectCards = document.querySelectorAll("[data-category]");
const copyEmailButton = document.getElementById("copyEmail");
const toast = document.getElementById("toast");
const projectModal = document.getElementById("projectModal");
const projectModalPanel = projectModal?.querySelector(".project-modal__panel");
const projectModalContent = document.getElementById("projectModalContent");
const email = "todeepakbabu@gmail.com";

const projectDetails = {
  "E-Wallet System": {
    category: "Java backend project",
    summary: "A secure wallet backend concept for user authentication, wallet balance, transfer PIN verification, money transfers and transaction history.",
    stack: ["Java", "Spring Boot", "JDBC", "MySQL", "REST API"],
    features: [
      "User registration and login flow with account validation.",
      "Wallet balance management with transfer PIN checks.",
      "Transaction records for successful, failed and pending transfers.",
      "Database-backed account and payment history modules."
    ],
    testing: [
      "Positive and negative transfer scenarios.",
      "Invalid PIN, insufficient balance and missing account checks.",
      "Database validation for transaction status and wallet balance updates."
    ],
    note: "Best suited for backend developer and QA discussions because it shows both business logic and validation scenarios."
  },
  "Messaging Application": {
    category: "Real-time Java project",
    summary: "A one-to-one messaging backend focused on real-time communication, contact handling and persistent chat history.",
    stack: ["Java", "Spring Boot", "WebSocket", "MySQL", "REST API"],
    features: [
      "WebSocket message flow for real-time chat.",
      "Contact and conversation list management.",
      "Stored chat history for returning users.",
      "Backend checks for user and message data."
    ],
    testing: [
      "Verify sent and received message behavior.",
      "Check chat history persistence in the database.",
      "Test invalid user, empty message and disconnected session cases."
    ],
    note: "This project is useful for showing real-time backend understanding and practical database thinking."
  },
  "Online Book Management": {
    category: "Database application",
    summary: "A book management application for CRUD operations, search, user records and issue/return style tracking.",
    stack: ["Java", "JDBC", "MySQL", "SQL"],
    features: [
      "Create, read, update and delete book records.",
      "Search books by title, author or category.",
      "Manage user records and book issue/return details.",
      "Handle invalid inputs and database exceptions."
    ],
    testing: [
      "CRUD validation for book and user records.",
      "SQL verification after create, update and delete actions.",
      "Boundary checks for empty fields and duplicate records."
    ],
    note: "This is a strong entry-level project because it clearly demonstrates Java plus database fundamentals."
  },
  "E-Commerce Web Testing": {
    category: "Manual and API QA project",
    summary: "A QA portfolio project covering major e-commerce flows such as login, product search, cart, checkout, API validation and SQL verification.",
    stack: ["Manual Testing", "Postman", "SQL", "Jira", "Zephyr"],
    features: [
      "Test scenarios for login, search, cart and checkout.",
      "Functional, smoke, sanity and regression test coverage.",
      "Defect reporting with clear reproduction steps.",
      "API response checks and database validation."
    ],
    testing: [
      "120+ sample test cases across key user journeys.",
      "Positive and negative scenarios for checkout and authentication.",
      "Status code, payload and required-field validation in Postman."
    ],
    note: "This is the main QA showcase project. Add your real test sheet or Jira screenshots later if you want stronger evidence."
  },
  "OrangeHRM Automation": {
    category: "Selenium automation project",
    summary: "An automation suite for common OrangeHRM workflows using Selenium WebDriver, Java, TestNG and Maven.",
    stack: ["Selenium WebDriver", "Java", "TestNG", "Maven", "Page Object Model"],
    features: [
      "Automated login and dashboard validation.",
      "PIM, Leave and Recruitment module scenarios.",
      "Page Object Model structure for maintainable tests.",
      "Reusable setup, waits and assertions."
    ],
    testing: [
      "Valid and invalid login automation.",
      "Regression scenarios for HR modules.",
      "TestNG reporting for passed and failed test runs."
    ],
    note: "This project helps recruiters see that you can move from manual testing to repeatable automation."
  },
  "Travel Website": {
    category: "Java web project",
    summary: "A travel website practice project combining backend form handling, database persistence and responsive browser pages.",
    stack: ["Spring Boot", "Hibernate", "JSP", "Bootstrap", "MySQL"],
    features: [
      "Travel package and enquiry-style page flows.",
      "Backend form handling with database storage.",
      "Responsive pages built with JSP, Bootstrap and JavaScript.",
      "Hibernate-based data interaction practice."
    ],
    testing: [
      "Form validation for required fields.",
      "Responsive page checks across desktop and mobile.",
      "Database verification after user submissions."
    ],
    note: "Use this project to talk about full-stack basics and how frontend forms connect to backend data."
  },
  "Digital Wallet API": {
    category: "Python API project",
    summary: "A Python wallet API concept for account authentication, wallet balance, transfer operations and transaction records.",
    stack: ["Python", "Flask", "MySQL", "REST API"],
    features: [
      "API routes for wallet balance and transfer actions.",
      "PIN verification and invalid request handling.",
      "Transaction history records in MySQL.",
      "Clear response format for success and failure cases."
    ],
    testing: [
      "Postman checks for success and error responses.",
      "Negative cases for wrong PIN and insufficient balance.",
      "SQL checks for transaction records."
    ],
    note: "This shows that you can apply backend and QA thinking outside Java as well."
  },
  "Messaging Backend": {
    category: "Python real-time backend",
    summary: "A Python backend concept for chat messaging with authentication, contact handling, WebSocket events and stored message history.",
    stack: ["Python", "FastAPI", "WebSocket", "MySQL", "REST API"],
    features: [
      "Authentication and contact management flow.",
      "WebSocket-based message delivery concept.",
      "Persistent message history in a database.",
      "Notification-style flow for new messages."
    ],
    testing: [
      "Verify message send and receive scenarios.",
      "Check chat history records after conversations.",
      "Test invalid contacts, missing users and empty messages."
    ],
    note: "This is a good companion to the Java messaging project because it shows the same idea in a Python API stack."
  },
  "Book Management CLI": {
    category: "Python command-line project",
    summary: "A command-line book management project for practicing CRUD operations, SQLite persistence and reusable Python functions.",
    stack: ["Python", "SQLite", "CLI", "Functions"],
    features: [
      "Add, view, update and delete book records.",
      "Store records locally using SQLite.",
      "Validate user input before database actions.",
      "Separate functions for readable command handling."
    ],
    testing: [
      "CRUD checks for every command option.",
      "Invalid input and empty field validation.",
      "Database verification after each operation."
    ],
    note: "This project is simple, but it clearly shows fundamentals: input, logic, storage and validation."
  },
  "Personalized Daily Planner": {
    category: "Full stack learning project",
    summary: "A daily planner concept for creating tasks, organizing schedules and tracking progress through dashboard-style views.",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    features: [
      "Task creation, update and completion status.",
      "Daily schedule organization and priority tagging.",
      "Dashboard idea for progress and pending work.",
      "MERN stack learning direction."
    ],
    testing: [
      "Task create, edit, delete and complete flow checks.",
      "Input validation for empty task names and dates.",
      "Basic API validation for task endpoints."
    ],
    note: "Keep this marked as a learning/concept project until you add the real implemented screens or repository."
  },
  "Full Stack Digital Library": {
    category: "Java library application",
    summary: "A digital library concept for browsing books, managing catalogue information and connecting user-facing flows to backend data.",
    stack: ["Java", "Spring Boot", "SQL", "REST API"],
    features: [
      "Book catalogue and record management.",
      "User-facing browse and search flow concept.",
      "Backend service layer for library data.",
      "Database structure for books and users."
    ],
    testing: [
      "Catalogue search and filter scenario checks.",
      "Create, update and delete validation for book data.",
      "Database checks for saved records."
    ],
    note: "Add a GitHub link or screenshots later when the implementation is ready to show publicly."
  },
  "Investor-Business Bridge": {
    category: "Java web app concept",
    summary: "A platform concept for connecting investors and business owners through profiles, opportunity listings and discovery flows.",
    stack: ["Java", "Database Design", "Web App", "SQL"],
    features: [
      "Investor and business owner profile concept.",
      "Business opportunity listing flow.",
      "Discovery and matching data model.",
      "Role-based feature planning."
    ],
    testing: [
      "Profile create and update scenario planning.",
      "Listing validation for required business fields.",
      "Role-based access and negative test cases."
    ],
    note: "Keep this as a concept entry until actual screens, API routes or code are ready."
  },
  "CashSim": {
    category: "Research project",
    summary: "A research-oriented project entry for presenting a problem statement, project approach, findings and future implementation ideas.",
    stack: ["Research", "Documentation", "Analysis"],
    features: [
      "Problem statement and project abstract.",
      "Research notes and report structure.",
      "Analysis of the selected cash simulation idea.",
      "Future scope and implementation direction."
    ],
    testing: [
      "Review assumptions and documented scope.",
      "Validate research flow against the stated problem.",
      "Add implementation test cases if this becomes a software project."
    ],
    note: "This entry should be updated with your real paper abstract, contribution and report link before publishing."
  }
};

function showToast(message) {
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2400);
}

function closeMenu() {
  if (!nav || !menuToggle) return;

  nav.classList.remove("open");
  document.body.classList.remove("menu-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderList(items) {
  return items.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
}

function renderStack(items) {
  return items.map((item) => `<span>${escapeHtml(item)}</span>`).join("");
}

function openProject(projectTitle) {
  const project = projectDetails[projectTitle];

  if (!project || !projectModal || !projectModalContent || !projectModalPanel) return;

  projectModalContent.innerHTML = `
    <article class="project-detail">
      <p class="project-detail__kicker">${escapeHtml(project.category)}</p>
      <h2 id="projectModalTitle">${escapeHtml(projectTitle)}</h2>
      <p class="project-detail__summary">${escapeHtml(project.summary)}</p>
      <div class="project-detail__stack">${renderStack(project.stack)}</div>
      <div class="project-detail__grid">
        <section class="project-detail__block">
          <h3>What this project shows</h3>
          <ul>${renderList(project.features)}</ul>
        </section>
        <section class="project-detail__block">
          <h3>Testing focus</h3>
          <ul>${renderList(project.testing)}</ul>
        </section>
      </div>
      <p class="project-detail__note">${escapeHtml(project.note)}</p>
    </article>
  `;

  projectModal.classList.add("open");
  projectModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("menu-open");
  projectModalPanel.focus();
}

function closeProject() {
  if (!projectModal) return;

  projectModal.classList.remove("open");
  projectModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("menu-open");
}

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    document.body.classList.toggle("menu-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    projectCards.forEach((card) => {
      card.hidden = filter !== "all" && card.dataset.category !== filter;
    });
  });
});

projectCards.forEach((card) => {
  const title = card.querySelector("h3")?.textContent?.trim();

  card.setAttribute("role", "button");
  card.setAttribute("tabindex", "0");
  card.setAttribute("aria-label", `Open ${title} project details`);

  card.addEventListener("click", () => openProject(title));
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openProject(title);
    }
  });
});

document.querySelectorAll("[data-close-project]").forEach((button) => {
  button.addEventListener("click", closeProject);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
    closeProject();
  }
});

if (copyEmailButton) {
  copyEmailButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(email);
      showToast("Email copied to clipboard.");
    } catch {
      window.location.href = `mailto:${email}`;
    }
  });
}

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("visible"));
}
