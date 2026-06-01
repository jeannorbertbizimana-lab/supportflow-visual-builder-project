import React from 'react'
import { useFlowStore } from '../store/flowStore'

export default function EditPanel() {
    const { nodes, selectedNodeId, updateNodeText } = useFlowStore()
    const currentNode = nodes[selectedNodeId]

    return (
        <aside className="w-80 bg-slate-900 border-l border-slate-800 p-6 flex flex-col text-slate-200 shadow-xl z-10">
            {currentNode ? (
                <div className="space-y-6">
                    <div>
                        <h3 className="text-[11px] font-bold uppercase tracking-widest font-mono text-slate-500">Property Inspector</h3>
                        <h2 className="text-md font-bold text-white mt-1">Configure Node #{selectedNodeId}</h2>
                    </div>

                    <div className="space-y-2">
                        <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Bot Message Text</label>
                        <textarea
                            className="w-full bg-slate-950 border border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-xl p-3 text-xs leading-relaxed text-slate-200 font-normal outline-none transition-all resize-none"
                            rows={6}
                            value={currentNode.text}
                            onChange={(e) => updateNodeText(selectedNodeId, e.target.value)}
                        />
                    </div>

                    <div className="space-y-3">
                        <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Branch Connections Outbound</label>
                        {currentNode.options.length === 0 ? (
                            <div className="text-[11px] text-amber-400 bg-amber-950/20 border border-amber-900/40 p-3 rounded-xl italic font-normal">
                                This is an interactive dead-end/leaf node. No outbound navigation links depart this point.
                            </div>
                        ) : (
                            currentNode.options.map((opt, idx) => (
                                <div key={idx} className="bg-slate-950 border border-slate-800 p-3 rounded-xl space-y-1">
                                    <div className="text-xs font-semibold text-slate-300">{opt.text}</div>
                                    <div className="text-[10px] font-mono text-indigo-400">Target Address ID: {opt.targetId}</div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            ) : (
                <div className="h-full flex flex-col items-center justify-center text-center text-slate-500 text-xs border-2 border-dashed border-slate-800 rounded-2xl p-4 font-normal">
                    <span className="text-2xl mb-2">🖱️</span>
                    Click any conversational node element floating inside the canvas grid workspace to view or overwrite values.
                </div>
            )}
        </aside>
    )
}