import React, { useEffect, useState, useRef } from 'react'
import { useFlowStore } from '../store/flowStore'

export default function FlowCanvas() {
    const { nodes, selectedNodeId, setSelectedNodeId } = useFlowStore()
    const canvasRef = useRef(null)
    const [connections, setConnections] = useState([])

    const computeVectorLines = () => {
        if (!canvasRef.current) return
        const containerBounds = canvasRef.current.getBoundingClientRect()
        const layoutPaths = []

        Object.values(nodes).forEach((node) => {
            node.options.forEach((opt, idx) => {
                const portOut = document.getElementById(`port-out-${node.id}-${idx}`)
                const targetCard = document.getElementById(`node-card-${opt.targetId}`)

                if (portOut && targetCard) {
                    const outRect = portOut.getBoundingClientRect()
                    const tgtRect = targetCard.getBoundingClientRect()

                    const x1 = outRect.left - containerBounds.left + outRect.width / 2
                    const y1 = outRect.top - containerBounds.top + outRect.height / 2
                    const x2 = tgtRect.left - containerBounds.left - 4
                    const y2 = tgtRect.top - containerBounds.top + tgtRect.height / 2

                    const controlDistance = Math.abs(x2 - x1) * 0.5
                    const bezierString = `M ${x1} ${y1} C ${x1 + controlDistance} ${y1}, ${x2 - controlDistance} ${y2}, ${x2} ${y2}`

                    layoutPaths.push({ id: `${node.id}-${opt.targetId}-${idx}`, pathString: bezierString })
                }
            })
        })
        setConnections(layoutPaths)
    }

    useEffect(() => {
        computeVectorLines()
        window.addEventListener('resize', computeVectorLines)
        return () => window.removeEventListener('resize', computeVectorLines)
    }, [nodes])

    return (
        <div
            ref={canvasRef}
            onClick={() => setSelectedNodeId(null)}
            className="flex-1 relative overflow-auto bg-slate-950 p-12 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:20px_20px]"
        >
            <svg className="absolute inset-0 pointer-events-none w-full h-full min-w-[3000px] min-h-[3000px]">
                <defs>
                    <marker id="arrowhead" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 1 L 10 5 L 0 9 z" fill="#475569" />
                    </marker>
                </defs>
                {connections.map((c) => (
                    <path key={c.id} d={c.pathString} fill="none" stroke="#475569" strokeWidth="2" markerEnd="url(#arrowhead)" />
                ))}
            </svg>

            {Object.values(nodes).map((node) => {
                const active = selectedNodeId === node.id
                const terminal = node.options.length === 0

                return (
                    <div
                        key={node.id}
                        id={`node-card-${node.id}`}
                        onClick={(e) => { e.stopPropagation(); setSelectedNodeId(node.id); }}
                        style={{ left: `${node.x}px`, top: `${node.y}px` }}
                        className={`absolute w-72 bg-slate-900 border rounded-xl shadow-2xl transition-all select-none ${active ? 'border-indigo-500 ring-2 ring-indigo-500/20 shadow-indigo-500/10' : 'border-slate-800 hover:border-slate-700'
                            }`}
                    >
                        <div className={`px-4 py-2 border-b border-slate-800 text-[10px] font-mono font-bold tracking-wider rounded-t-xl flex justify-between ${node.id === "1" ? 'bg-emerald-950/40 text-emerald-400' : terminal ? 'bg-amber-950/40 text-amber-400' : 'bg-slate-850 text-slate-400'
                            }`}>
                            <span>{node.id === "1" ? '🎬 INITIAL CONVERSATION' : terminal ? '🏁 CONCLUDING NODE' : '❓ OPTION PROMPT'}</span>
                            <span>#{node.id}</span>
                        </div>
                        <p className="p-4 text-xs font-normal text-slate-300 leading-relaxed line-clamp-3">{node.text}</p>
                        {node.options.map((opt, idx) => (
                            <div
                                key={idx}
                                id={`port-out-${node.id}-${idx}`}
                                className="mx-3 mb-2.5 p-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-400 flex justify-between items-center"
                            >
                                <span className="truncate pr-2 font-medium">{opt.text}</span>
                                <span className="text-[10px] text-indigo-400 font-bold bg-indigo-950/60 px-1.5 py-0.5 rounded border border-indigo-900/40">➔ {opt.targetId}</span>
                            </div>
                        ))}
                    </div>
                )
            })}
        </div>
    )
}