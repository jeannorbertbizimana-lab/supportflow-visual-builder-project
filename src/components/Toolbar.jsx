import React from 'react'
import { useFlowStore } from '../store/flowStore'

export default function Toolbar() {
    const { mode, setMode, triggerAutoLayout, setCurrentNodeId } = useFlowStore()

    return (
        <header className="bg-slate-900 border-b border-slate-800 px-6 py-4 flex items-center justify-between z-20 shadow-md">
            <div>
                <h1 className="text-md font-bold tracking-tight text-white font-sans">SupportFlow AI</h1>
                <p className="text-[11px] text-slate-400 font-medium">Visual Decision Tree Configuration Environment</p>
            </div>
            <div className="flex items-center space-x-3">
                {mode === 'editor' && (
                    <button
                        onClick={triggerAutoLayout}
                        className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold px-3 py-2 rounded-lg border border-slate-700 transition-colors shadow-sm"
                    >
                        🪄 Auto-Layout Tree
                    </button>
                )}
                <button
                    onClick={() => {
                        const nextMode = mode === 'editor' ? 'preview' : 'editor';
                        setMode(nextMode);
                        setCurrentNodeId("1"); // Dynamic session reset
                    }}
                    className={`text-xs px-4 py-2 rounded-lg font-bold transition-all shadow-sm ${mode === 'preview'
                            ? 'bg-amber-600 hover:bg-amber-500 text-white'
                            : 'bg-indigo-600 hover:bg-indigo-500 text-white'
                        }`}
                >
                    {mode === 'preview' ? '⏹ Exit Preview' : '▶ Test Drive Bot'}
                </button>
            </div>
        </header>
    )
}