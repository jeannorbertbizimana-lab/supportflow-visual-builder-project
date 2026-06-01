import React from 'react'
import { useFlowStore } from '../store/flowStore'

export default function PreviewChat() {
    const { nodes, currentNodeId, setCurrentNodeId } = useFlowStore()
    const activeNode = nodes[currentNodeId]

    return (
        <div className="flex-1 bg-slate-950 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[500px]">
                <div className="px-5 py-4 bg-slate-850 border-b border-slate-800 flex justify-between items-center text-xs font-bold tracking-wide text-white">
                    <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Interactive Bot Engine Preview</span>
                    </div>
                    <button
                        onClick={() => setCurrentNodeId("1")}
                        className="text-[11px] bg-slate-800 hover:bg-slate-700 px-2.5 py-1 rounded-md text-slate-300 font-semibold"
                    >
                        Restart Engine
                    </button>
                </div>

                <div className="flex-1 p-5 flex flex-col justify-end overflow-y-auto bg-slate-950/40">
                    {activeNode && (
                        <div className="bg-slate-800 text-slate-200 text-xs p-4 rounded-2xl rounded-tl-none max-w-[85%] self-start border border-slate-700/40 leading-relaxed shadow-sm">
                            {activeNode.text}
                        </div>
                    )}
                </div>

                <div className="p-5 bg-slate-900 border-t border-slate-850 space-y-2">
                    {activeNode?.options && activeNode.options.length > 0 ? (
                        activeNode.options.map((opt, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentNodeId(opt.targetId)}
                                className="w-full text-left bg-indigo-600/10 hover:bg-indigo-600 border border-indigo-500/20 hover:border-indigo-500 text-indigo-300 hover:text-white px-4 py-3 rounded-xl text-xs font-semibold transition-all flex justify-between items-center group"
                            >
                                <span>{opt.text}</span>
                                <span className="opacity-0 group-hover:opacity-100 transition-opacity font-bold">Choose ➔</span>
                            </button>
                        ))
                    ) : (
                        <button
                            onClick={() => setCurrentNodeId("1")}
                            className="w-full bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold py-3 rounded-xl border border-slate-700 transition-all"
                        >
                            Conversation End. Restart Flow
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}