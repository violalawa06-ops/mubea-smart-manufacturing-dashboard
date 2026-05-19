/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { Warehouse } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import WorkerDashboard from './components/Views/WorkerDashboard';
import ManagerDashboard from './components/Views/ManagerDashboard';
import QualityDashboard from './components/Views/QualityDashboard';
import ProcurementDashboard from './components/Views/ProcurementDashboard';
import { MUBEA_ANALYSIS_KPIS } from './data/mockData';
import { useLanguage } from './lib/language';
import { cn } from './lib/utils';
import { UserRole } from './types/dashboard';

export default function App() {
  const [role, setRole] = useState<UserRole>('worker');
  const [time, setTime] = useState(new Date());
  const [countdown, setCountdown] = useState('02:44:12');
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(now);

      const target = new Date(now);
      target.setHours(18, 0, 0, 0);
      let diff = target.getTime() - now.getTime();

      if (diff < 0) {
        target.setDate(target.getDate() + 1);
        target.setHours(8, 0, 0, 0);
        diff = target.getTime() - now.getTime();
      }

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setCountdown(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const renderDashboard = () => {
    switch (role) {
      case 'worker':
        return <WorkerDashboard />;
      case 'manager':
        return <ManagerDashboard />;
      case 'quality':
        return <QualityDashboard />;
      case 'procurement':
        return <ProcurementDashboard />;
      default:
        return <WorkerDashboard />;
    }
  };

  return (
    <div className="wallboard min-h-screen bg-[#0A0A0B] text-[#E4E4E7] font-mono selection:bg-red-500/30 overflow-x-hidden">
      <header className="bg-[#121214] border-b border-[#27272A] px-4 py-2.5 shadow-2xl relative z-50">
        <div className="flex items-center justify-between gap-3 min-w-0">
          <div className="flex items-center gap-4 min-w-0 flex-1">
            <div className="flex flex-col min-w-[214px] shrink-0">
              <div className="flex items-center gap-2 text-[#E21F26]">
                <Warehouse className="w-5 h-5 shrink-0" />
                <span className="font-black text-lg tracking-tight uppercase leading-none whitespace-nowrap">Mubea Taicang</span>
              </div>
              <span className="text-[8px] font-bold text-gray-500 uppercase tracking-[0.16em] mt-1 ml-1 leading-tight">
                {t('Smart Manufacturing Dashboard | Source: Data Analysis.xlsx', '智能制造看板 | 数据来源: Data Analysis.xlsx')}
              </span>
            </div>

            <div className="h-7 w-px bg-[#27272A] shrink-0" />

            <div className="flex gap-4 min-w-0">
              <div className="flex flex-col">
                <span className="text-[8px] font-black text-gray-600 uppercase tracking-widest">{t('Historical files', '历史文件')}</span>
                <span className="text-[10px] font-black text-white italic whitespace-nowrap">
                  {MUBEA_ANALYSIS_KPIS.validWorkbooks} {t('valid workbooks', '份有效工艺文件')}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[8px] font-black text-gray-600 uppercase tracking-widest">{t('Handover In', '换班倒计时')}</span>
                <span className="text-[10px] font-black text-[#E21F26] italic tabular-nums whitespace-nowrap">{countdown}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="flex items-center gap-1 rounded-xl border border-[#27272A] bg-black px-1 py-1">
              <button
                onClick={() => setLang('zh')}
                className={cn(
                  'px-2.5 py-1 rounded-lg text-[10px] font-black uppercase',
                  lang === 'zh' ? 'bg-[#E21F26] text-white' : 'text-gray-500 hover:text-white',
                )}
              >
                中文
              </button>
              <button
                onClick={() => setLang('en')}
                className={cn(
                  'px-2.5 py-1 rounded-lg text-[10px] font-black uppercase',
                  lang === 'en' ? 'bg-[#E21F26] text-white' : 'text-gray-500 hover:text-white',
                )}
              >
                EN
              </button>
            </div>

            <div className="flex bg-black rounded-2xl border border-[#27272A] p-1 shadow-inner gap-1">
              <RoleTab active={role === 'worker'} onClick={() => setRole('worker')} label={t('Floor', '现场')} sub={t('Routing', '工艺')} />
              <RoleTab active={role === 'manager'} onClick={() => setRole('manager')} label={t('Admin', '管理')} sub={t('KPI', '指标')} />
              <RoleTab active={role === 'quality'} onClick={() => setRole('quality')} label="QA" sub={t('Quality', '质检')} />
              <RoleTab active={role === 'procurement'} onClick={() => setRole('procurement')} label={t('Proc', '采购')} sub={t('Material', '物料')} />
            </div>

            <div className="flex items-center gap-3 border-l border-[#27272A] pl-3 shrink-0">
              <div className="flex flex-col items-end">
                <span className="text-[9px] font-black text-gray-600 uppercase tracking-widest">{t('System Clock', '系统时钟')}</span>
                <span className="text-xl font-black text-white italic tabular-nums leading-none whitespace-nowrap">
                  {time.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                </span>
              </div>
              <div className="flex flex-col items-center gap-1 px-2.5 py-1.5 bg-green-500/5 border border-green-500/20 rounded-xl">
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[8px] font-black text-green-500 uppercase">{t('Data Linked', '数据已连接')}</span>
                </div>
                <span className="text-[7px] font-bold text-gray-600 tabular-nums whitespace-nowrap">
                  {MUBEA_ANALYSIS_KPIS.processRows} {t('steps', '步')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="h-[calc(100vh-4.25rem)] w-full overflow-y-auto no-scrollbar p-3 relative">
        <div className="w-full max-w-none mx-auto min-h-full flex flex-col">
          <AnimatePresence mode="wait">
            <motion.div
              key={role}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex-1 h-full"
            >
              {renderDashboard()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,_rgba(0,0,0,0.25)_50%),_linear-gradient(90deg,_rgba(255,0,0,0.06),_rgba(0,255,0,0.02),_rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
    </div>
  );
}

function RoleTab({ active, onClick, label, sub }: { active: boolean; onClick: () => void; label: string; sub: string }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-tight transition-all flex flex-col items-center min-w-[72px]',
        active ? 'bg-[#E21F26] text-white shadow-lg shadow-red-900/20' : 'text-gray-600 hover:text-gray-300',
      )}
    >
      <span className="leading-none">{label}</span>
      <span className="text-[10px] opacity-70 leading-none mt-1">{sub}</span>
    </button>
  );
}
