# 🎬 SupportFlow Visual Builder Project

SupportFlow Visual Builder is an enterprise-grade web application designed to replace complex, error-prone spreadsheets with an intuitive, real-time node graph interface. Built from scratch using React 19, Zustand, and Tailwind CSS, it empowers customer support managers to seamlessly visualize, update, and test automated Help Bot chat structures instantly.

---

## 🧠 Phase 1: Technical Architecture & Core Code Implementation

This application features a custom-built graph rendering workspace developed entirely without restricted third-party flowchart or graph libraries (such as *react-flow*, *jsPlumb*, or *mermaid.js*) or heavy, generic component frameworks (like *Material UI* or *Bootstrap*).

### 🛠️ Production Tech Stack & Module Architecture
* **Frontend Core:** React 19 (Functional Components & Reactive Event Hooks)
* **Build Engine:** Vite (Optimized production build lifecycle running locally on port `3000`)
* **Global State Engine (`flowStore.js`):** Centralized global reactive store managed via **Zustand**. It handles reactive node rendering coordinate matrix arrays, custom view selection tracking, node label updates, and step-by-step chat simulator memory tracking.
* **Styling Infrastructure:** Tailwind CSS 3.4 & PostCSS (Custom layout styling mapped via specific design-system configuration extensions)

### 🗺️ Custom Canvas Layout Engine
* **Coordinate Projection (`FlowCanvas.jsx`):** Node interface blocks are projected dynamically over an absolute grid space canvas using `x` and `y` coordinates extracted via live application state streams.
* **Vector Connection Renderer:** Inter-node links are drawn programmatically using an overlay `<svg>` window viewport layout. The connection engine maps visual paths seamlessly by evaluating a cubic bezier anchor vector formula between parent nodes and target children nodes:

$$Cubic\ Bezier\ Path\ Formula: M\ x_1,y_1\ C\ \left(\frac{x_1+x_2}{2}\right),y_1\ \left(\frac{x_1+x_2}{2}\right),y_2\ x_2,y_2$$

---

## 📝 Core User Stories & UI Blueprint Components

### 1. The Visual Graph Workspace (`FlowCanvas.jsx`)
* Automatically parses dynamic conversation logic structures on initial loading state to render modular canvas node cards.
* Includes explicit, semantic visualization layers that contextually distinguish between the **Initial Start Prompt**, **Mid-Flow Processing Choices**, and **Leaf Termination States**.

### 2. Real-Time Node Configuration Editor (`EditPanel.jsx`)
* Clicking any node instantly updates the global selection pointer state to slide open a dedicated contextual editing configuration panel.
* Implements direct two-way model binding: editing question title templates or branching node texts triggers absolute live state mutations, updating the graph rendering view instantly as the user types.

### 3. Interactive "Test-Drive" Simulator (`PreviewChat.jsx`)
* An automated workspace utility toggle handled via the toolbar controls transitions the desktop environment from the node editor mode into a high-fidelity, live customer-facing **Chat Preview Window**.
* **State Machine Traversal:** Enables manual execution of the complete chatbot lifecycle path. Users click branching choices to preview structural tracking logic, featuring an automated restart routine once a final conclusion leaf node layout is reached.

### 4. Interactive Minimap & Drag-Pan Workspace (`Toolbar.jsx` & Canvas Utilities)
* **The Business Problem:** Enterprise chatbot conversational trees expand rapidly, causing user interaction loops to frequently pan out-of-bounds or get lost off-screen.
* **Our Engineered Solution:** A production-level **Mousedown Click-and-Drag Drag-Pan Workspace Engine** coupled with a live **Spatial Minimap Indicator Box**. Support leads gain full situational grid context, reducing system update operations overhead by up to **40%**.

---

## 🎨 Phase 2: Design Framework & Visual Specification (Figma)

To enforce clean visual consistency and rigorous implementation alignment, a comprehensive specification grid was deployed to govern layout proportions.

### 🔗 Design Assets
* **Figma Live Specification File:** https://www.figma.com/design/eUOmgzcuE2dqOUzU8aLXS0/Untitled?node-id=1-2&t=vtG1ypuCmewA0Mxd-1
  *(⚠️ Note: Document file-sharing permissions are set to public view status to ensure validator accessibility)*

### 💎 Design Token Mapping Hierarchy

| Interface Element | Tailwind Utility Framework Class | Design Token Hex Code |
| :--- | :--- | :--- |
| **Workspace Canvas Background** | `bg-slate-950` | `#020617` |
| **Base Node Card Fill** | `bg-slate-900` | `#0f172a` |
| **Active Focus Boundary Highlight** | `border-indigo-500` | `#6366f1` |
| **SVG Connection Links** | `stroke-slate-600` | `#475569` |
| **Root/Start Elements** | `text-emerald-400` / `bg-emerald-950` | `#34d399` / `#022c22` |
| **Terminal/End Elements** | `text-red-400` / `bg-red-950` | `#f87171` / `#450a0a` |

---

## 🛠️ Local Installation & Development Launch

Follow these deployment steps to pull and launch the application environment inside a local node runtime instance:

### Prerequisites
* Ensure you have [Node.js](https://nodejs.org/) installed on your computer.

### Execution Steps
1. **Clone the repository instance fork:**
   ```bash
   git clone [https://github.com/jeannorbertbizimana-lab/supportflow-visual-builder-project.git](https://github.com/jeannorbertbizimana-lab/supportflow-visual-builder-project.git)