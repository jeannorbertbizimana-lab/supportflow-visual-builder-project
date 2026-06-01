# 🎬 SupportFlow Visual Builder

SupportFlow Visual Builder is a high-performance web application designed to replace complex, error-prone spreadsheets with an intuitive, real-time node graph interface. Built from scratch using React, Zustand, and Tailwind CSS, it enables customer support managers to seamlessly visualize, update, and test automated Help Bot chat structures instantly.

---

## 🧠 Phase 1: Technical Architecture & Core Code Implementation

This application features a custom-built graph rendering workflow developed entirely without restricted third-party charting libraries (such as *react-flow*, *jsPlumb*, or *mermaid.js*) or heavy UI component frameworks (like *Material UI* or *Bootstrap*).

### 🛠️ Production Tech Stack
* **Frontend Core:** React 19 (Functional Components, Hooks)
* **Build Tooling:** Vite (configured on port `3000` with `strictPort: true`)
* **Global State Architecture:** Zustand (Manages interactive node configurations, active coordinate states, and simulator pathways)
* **Styling Infrastructure:** Tailwind CSS 3.4 & PostCSS (Custom utility layer layout)

### 🗺️ Custom Canvas Layout Engine
* **Coordinate Projection:** Node positioning operates dynamically on absolute canvas coordinate projections (`x` and `y`) managed via a centralized JSON configuration matrix.
* **Vector Connection Renderer:** Visual linking vectors are drawn programmatically using an absolute `<svg>` workspace wrapper. The application dynamically computes connection lines using a cubic bezier anchor path formula between option nodes and target nodes:

$$Cubic\ Bezier\ Path\ Formula: M\ x_1,y_1\ C\ \left(\frac{x_1+x_2}{2}\right),y_1\ \left(\frac{x_1+x_2}{2}\right),y_2\ x_2,y_2$$

---

## 📝 Core User Stories Fulfilled

### 1. The Visual Graph Workspace (Story 1)
* Dynamically parses conversation trees on initial load, rendering clear nodes directly on the user viewport.
* Provides functional semantic nodes distinguishing between the **Initial Start Prompt**, **Mid-Flow Node Options**, and **Leaf Termination States**.

### 2. Real-Time Node Configuration Editor (Story 2)
* Selecting any node instantly opens an active **Sidebar Settings Panel**.
* Built with absolute two-way data binding: modifications made to the node header or description input boxes are reflected on the canvas in real time as the user types.

### 3. Interactive "Test-Drive" Simulator (Story 3)
* Features a seamless control toggle to switch the main canvas environment into a live **Customer Chat Simulation Window**.
* Users can click through branching multiple-choice options to test out conversation paths. The simulator includes an automated reset engine when a final conclusion node is reached.

### 4. Interactive Minimap & Drag-Pan Workspace (Story 4 — Wildcard Selection)
* **The Problem:** Enterprise-grade chatbot tree layouts scale out rapidly, causing users to get lost off-screen.
* **Our Solution:** A custom **Mousedown Click-and-Drag Canvas Navigation Panning System** integrated with a live, visual **Spatial Minimap Preview Indicator**. This provides complete structural awareness, eliminating interface friction and making it easy to manage massive support conversation graphs.

---

## 🎨 Phase 2: Design Framework & Visual Specification (Figma)

To maintain consistent design-to-code alignment, a comprehensive layout scheme was documented inside Figma to establish strict visual token hierarchies.

### 🔗 Design Assets
* **Figma Live Specification File:** https://www.figma.com/design/eUOmgzcuE2dqOUzU8aLXS0/Untitled?node-id=1-2&t=vtG1ypuCmewA0Mxd-1
  *(⚠️ Note: File sharing permissions are set to public viewing so external grading validators can review the design specs)*

### 💎 Design Token Mapping Table

| Interface Element | Tailwind Utility Framework Class | Design Token Hex Code |
| :--- | :--- | :--- |
| **Workspace Canvas Background** | `bg-slate-950` | `#020617` |
| **Base Node Card Fill** | `bg-slate-900` | `#0f172a` |
| **Active Focus Boundary Highlight** | `border-indigo-500` | `#6366f1` |
| **SVG Connection Links** | `stroke-slate-600` | `#475569` |
| **Root/Start Elements** | `text-emerald-400` / `bg-emerald-950` | `#34d399` / `#022c22` |
| **Terminal/End Elements** | `text-red-400` / `bg-red-950` | `#f87171` / `#450a0a` |

---

## 🛠️ Local Installation & Setup

Follow these steps to run the development build environment locally:

### Prerequisites
* Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Execution Steps
1. **Clone the repository fork:**
```bash
   git clone [https://github.com/YOUR_USERNAME/SupportFlow-Visual-Builder.git](https://github.com/YOUR_USERNAME/SupportFlow-Visual-Builder.git)