import { create } from 'zustand'

const initialNodes = {
    "1": {
        id: "1",
        text: "Welcome to SupportFlow AI! How can we help you today?",
        x: 80,
        y: 220,
        options: [
            { text: "Billing & Invoices", targetId: "2" },
            { text: "Technical Support", targetId: "3" }
        ]
    },
    "2": {
        id: "2",
        text: "Are you looking to pay an outstanding bill or update your credit card details?",
        x: 480,
        y: 100,
        options: [
            { text: "Pay Bill", targetId: "4" },
            { text: "Update Card", targetId: "5" }
        ]
    },
    "3": {
        id: "3",
        text: "Is your support issue related to cloud software installation or hardware terminal failures?",
        x: 480,
        y: 380,
        options: [
            { text: "Software Patching", targetId: "6" },
            { text: "Hardware Terminal", targetId: "7" }
        ]
    },
    "4": { id: "4", text: "To pay your bill, navigate to your Account Center -> Billing Management Tab.", x: 920, y: 40, options: [] },
    "5": { id: "5", text: "Card modifications can be securely uploaded under Settings -> Payment Methods.", x: 920, y: 180, options: [] },
    "6": { id: "6", text: "Please download our enterprise software patch executable at support.flow.ai/downloads.", x: 920, y: 320, options: [] },
    "7": { id: "7", text: "Hardware drops require an active RMA log. Please call line 1-800-555-FLOW.", x: 920, y: 460, options: [] }
}

export const useFlowStore = create((set) => ({
    mode: 'editor', // 'editor' | 'preview'
    nodes: initialNodes,
    selectedNodeId: null,
    currentNodeId: "1", // Preview runtime tracker

    setMode: (mode) => set({ mode }),
    setSelectedNodeId: (id) => set({ selectedNodeId: id }),
    setCurrentNodeId: (id) => set({ currentNodeId: id }),

    updateNodeText: (id, text) => set((state) => ({
        nodes: {
            ...state.nodes,
            [id]: { ...state.nodes[id], text }
        }
    })),

    // Wildcard Feature: Auto-Layout Generator Tree Walk
    triggerAutoLayout: () => set((state) => {
        const arrangedNodes = { ...state.nodes }
        const seen = new Set()

        function processLayout(nodeId, depth = 0, siblingOffset = 0) {
            if (!nodeId || !arrangedNodes[nodeId] || seen.has(nodeId)) return
            seen.add(nodeId)

            arrangedNodes[nodeId].x = 100 + depth * 400
            arrangedNodes[nodeId].y = 80 + siblingOffset * 150

            arrangedNodes[nodeId].options.forEach((opt, idx) => {
                processLayout(opt.targetId, depth + 1, siblingOffset + idx)
            })
        }

        processLayout("1")
        return { nodes: arrangedNodes }
    })
}))