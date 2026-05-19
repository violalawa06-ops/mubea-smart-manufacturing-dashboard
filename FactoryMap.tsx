/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { MOCK_MACHINES } from '../../data/mockData';
import { cn } from '../../lib/utils';
import { MachineStatus } from '../../types/dashboard';

interface FactoryMapProps {
  onMachineClick?: (machine: MachineStatus) => void;
  selectedMachineId?: string | null;
}

export default function FactoryMap({ onMachineClick, selectedMachineId }: FactoryMapProps) {
  // Simplified SVG Layout representing a section of the Taicang plant
  return (
    <div className="relative w-full aspect-[16/9] bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden group">
      <div className="absolute inset-0 p-8">
        <svg viewBox="0 0 800 450" className="w-full h-full">
          {/* Walls/Floor */}
          <rect x="10" y="10" width="780" height="430" rx="12" fill="white" stroke="#E5E7EB" strokeWidth="2" />
          
          {/* Production Line Paths */}
          <path d="M100 100 H 700" stroke="#F3F4F6" strokeWidth="40" strokeLinecap="round" />
          <path d="M100 350 H 700" stroke="#F3F4F6" strokeWidth="40" strokeLinecap="round" />

          {/* Machines */}
          {MOCK_MACHINES.map((machine, index) => {
            const x = 100 + (index * 180);
            const y = index % 2 === 0 ? 100 : 350;
            const isSelected = selectedMachineId === machine.id;

            return (
              <g 
                key={machine.id} 
                onClick={() => onMachineClick?.(machine)}
                className="cursor-pointer group/machine"
              >
                <motion.rect
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ delay: index * 0.1 }}
                  x={x - 40}
                  y={y - 40}
                  width="80"
                  height="80"
                  rx="12"
                  fill={isSelected ? '#E21F26' : 'white'}
                  stroke={isSelected ? '#E21F26' : getStatusColor(machine.status)}
                  strokeWidth="3"
                  className="shadow-sm transition-colors duration-200"
                />
                <circle 
                  cx={x + 25} 
                  cy={y - 25} 
                  r="6" 
                  fill={getStatusColor(machine.status)}
                  className={cn(machine.status === 'online' ? 'animate-pulse' : '')}
                />
                <text 
                  x={x} 
                  y={y + 60} 
                  textAnchor="middle" 
                  className={cn(
                    "text-[10px] font-bold uppercase tracking-wider select-none",
                    isSelected ? "fill-[#E21F26]" : "fill-gray-400"
                  )}
                >
                  {machine.id}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
      
      {/* Legend */}
      <div className="absolute bottom-6 left-6 flex items-center gap-4 bg-white/80 backdrop-blur p-2 rounded-lg border border-gray-100 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
        <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-green-500" /> Online</div>
        <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-orange-500" /> Warning</div>
        <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-gray-400" /> Idle</div>
        <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-blue-500" /> Maint.</div>
      </div>
    </div>
  );
}

function getStatusColor(status: MachineStatus['status']) {
  switch (status) {
    case 'online': return '#10B981';
    case 'warning': return '#F59E0B';
    case 'maintenance': return '#3B82F6';
    default: return '#9CA3AF';
  }
}
