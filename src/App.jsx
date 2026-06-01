import React from 'react'
import FlowCanvas from './components/FlowCanvas'
import EditPanel from './components/EditPanel'
import PreviewChat from './components/PreviewChat'
import Toolbar from './components/Toolbar'
import { useFlowStore } from './store/flowStore'

export default function App() {
    const mode = useFlowStore((state) => state.mode)

    return (
        <div className="w-screen h-screen flex flex-col overflow-hidden bg-slate-950 select-none">
            <Toolbar />
            {mode === 'editor' ? (
                <div className="flex flex-1 overflow-hidden">
                    <FlowCanvas />
                    <EditPanel />
                </div>
            ) : (
                <PreviewChat />
            )}
        </div>
    )
}