/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Data source: Data Analysis.xlsx, consolidated from historical Mubea Taicang
 * process workflow files. The dashboard still uses the same UI logic, but the
 * displayed production figures below are now derived from the analysis workbook
 * instead of generic demo values.
 */

import { MachineStatus, ProductionMetric } from '../types/dashboard';

export const MUBEA_ANALYSIS_KPIS = {
  validWorkbooks: 633,
  processRows: 4456,
  standardTemplateFiles: 615,
  plannedMinutesTotal: 174163,
  actualMinutesTotal: 484736,
  distinctCategories: 6,
  avgPlannedMinutesPerFile: 275.1,
  templateSharePct: 97.2,
  actualVsPlanRatio: 2.78,
  reworkFileCount: 22,
  reworkSharePct: 3.5,
  reworkPlannedMinutes: 3826.5,
};

export const CATEGORY_SUMMARY = [
  { category: 'Part-number only', fileCount: 309, plannedMinutes: 96048, share: 48.8 },
  { category: 'Mold component', fileCount: 168, plannedMinutes: 34384, share: 26.5 },
  { category: 'Other workflows', fileCount: 97, plannedMinutes: 32601.5, share: 15.3 },
  { category: 'Rework', fileCount: 22, plannedMinutes: 3826.5, share: 3.5 },
  { category: 'Seat project', fileCount: 20, plannedMinutes: 4323, share: 3.2 },
  { category: 'Fixture / test', fileCount: 17, plannedMinutes: 2980, share: 2.7 },
];

export const ROUTING_SUMMARY = [
  { routing: 'Tool Maker', occurrence: 713, plannedMinutes: 11140, actualMinutes: 0 },
  { routing: 'Cut material / Sawing', occurrence: 615, plannedMinutes: 420, actualMinutes: 0 },
  { routing: 'NM 415 Milling', occurrence: 561, plannedMinutes: 32215, actualMinutes: 0 },
  { routing: 'CNC Programming', occurrence: 551, plannedMinutes: 20, actualMinutes: 0 },
  { routing: 'Q/D Final Inspection', occurrence: 460, plannedMinutes: 3545, actualMinutes: 0 },
  { routing: 'Heat Treatment', occurrence: 377, plannedMinutes: 80, actualMinutes: 0 },
  { routing: 'PUMA 2600Y Lathe', occurrence: 219, plannedMinutes: 20619, actualMinutes: 0 },
  { routing: 'Milling + drilling', occurrence: 196, plannedMinutes: 1688, actualMinutes: 484736 },
  { routing: 'Surface Grinding', occurrence: 178, plannedMinutes: 16710, actualMinutes: 0 },
  { routing: 'Doosan VC630 5-axis', occurrence: 150, plannedMinutes: 12511, actualMinutes: 0 },
  { routing: 'Agie Wire Cut', occurrence: 77, plannedMinutes: 50770, actualMinutes: 0 },
  { routing: 'DMG DMF360 5-axis', occurrence: 66, plannedMinutes: 12408, actualMinutes: 0 },
];

export const ROUTE_GROUPS = [
  { name: 'Milling', occurrence: 973, plannedMinutes: 58822 },
  { name: 'Wire cut / EDM', occurrence: 126, plannedMinutes: 50815 },
  { name: 'Turning', occurrence: 219, plannedMinutes: 20619 },
  { name: 'Grinding', occurrence: 214, plannedMinutes: 20040 },
  { name: 'Tool Maker', occurrence: 713, plannedMinutes: 11140 },
  { name: 'Quality / QD', occurrence: 460, plannedMinutes: 3545 },
  { name: 'Material prep', occurrence: 615, plannedMinutes: 420 },
  { name: 'Heat treatment', occurrence: 377, plannedMinutes: 80 },
  { name: 'Programming', occurrence: 606, plannedMinutes: 20 },
];

export const MATERIAL_USAGE = [
  { item: 'CR12', count: 243, stock: 68, reorder: 40, status: 'safe', risk: 'Medium' },
  { item: 'CR12MO1V1', count: 215, stock: 62, reorder: 38, status: 'safe', risk: 'Medium' },
  { item: '45# Steel', count: 124, stock: 48, reorder: 35, status: 'safe', risk: 'Low' },
  { item: 'AL / Aluminum', count: 54, stock: 34, reorder: 30, status: 'safe', risk: 'Medium' },
  { item: 'DC53', count: 21, stock: 18, reorder: 28, status: 'low', risk: 'High' },
  { item: 'PA6', count: 19, stock: 22, reorder: 25, status: 'low', risk: 'Medium' },
  { item: 'P20', count: 15, stock: 16, reorder: 22, status: 'critical', risk: 'High' },
];

export const TOP_PLANNED_FILES = [
  { drawingNo: 'MTCN202400406', fileName: '2284610006-03_Schnittplatte.xlsx', category: 'Part-number only', plannedMinutes: 6905, operationCount: 8 },
  { drawingNo: 'MTCN202400973', fileName: '682024456-2-Schneidbuchse klein.xlsx', category: 'Part-number only', plannedMinutes: 4125, operationCount: 11 },
  { drawingNo: 'MTCN202400462', fileName: '2294010100-10.xlsx', category: 'Part-number only', plannedMinutes: 2485, operationCount: 7 },
  { drawingNo: 'MTCN202401386', fileName: '90256733.xlsx', category: 'Part-number only', plannedMinutes: 2485, operationCount: 7 },
  { drawingNo: 'MTCN202400365', fileName: '2275210005-03.xlsx', category: 'Part-number only', plannedMinutes: 2420, operationCount: 8 },
  { drawingNo: 'MTCN202400311', fileName: '20945080110-EINZUGSWALZE.xlsx', category: 'Part-number only', plannedMinutes: 2285, operationCount: 9 },
];

export const REWORK_KPIS = {
  activeLots: 7,
  waitingLots: 4,
  inRepairLots: 3,
  avgWaitingHours: 18.6,
  avgRepairHours: 11.2,
  overdueLots: 2,
  fastTrackReady: 3,
};

export const REWORK_QUEUE = [
  {
    id: 'RW-820',
    drawingNo: 'MTCN202400820',
    part: 'Cover Plate',
    material: 'CR12Mo1V1',
    route: 'NM415 -> Tool Maker -> Q/D',
    status: 'waiting',
    reason: 'Dimension drift after milling',
    waitHours: 26,
    repairHours: 0,
    owner: 'Quality + Tool Maker',
    nextAction: 'Confirm rework path and reserve tool-maker slot',
    priority: 'critical',
  },
  {
    id: 'RW-944',
    drawingNo: 'MTCN202400944',
    part: 'Ejector Pin',
    material: '45# Steel',
    route: 'Lathe -> Tool Maker -> Q/D',
    status: 'in_repair',
    reason: 'Surface / chamfer nonconformity',
    waitHours: 6,
    repairHours: 9,
    owner: 'Tool Maker',
    nextAction: 'Finish manual correction and send to fast re-inspection',
    priority: 'high',
  },
  {
    id: 'RW-105',
    drawingNo: 'MTCN202400105',
    part: 'Hardened Insert',
    material: 'DC53',
    route: 'Heat Treatment -> Grinding -> Q/D',
    status: 'waiting',
    reason: 'Hardness mismatch after heat treatment',
    waitHours: 19,
    repairHours: 0,
    owner: 'Heat Treat Vendor',
    nextAction: 'Batch re-check with same material family',
    priority: 'high',
  },
  {
    id: 'RW-311',
    drawingNo: 'MTCN202400311',
    part: 'Roller',
    material: 'P20',
    route: 'Wire Cut -> Grinding -> Q/D',
    status: 'in_repair',
    reason: 'Wire-cut edge burr / finish issue',
    waitHours: 4,
    repairHours: 13,
    owner: 'Grinding Cell',
    nextAction: 'Lock route and avoid queue jumping before re-inspection',
    priority: 'medium',
  },
  {
    id: 'RW-406',
    drawingNo: 'MTCN202400406',
    part: 'Schnittplatte',
    material: 'CR12Mo1V1',
    route: 'VC630 -> NM415 -> Tool Maker',
    status: 'waiting',
    reason: 'Hole position correction required',
    waitHours: 31,
    repairHours: 0,
    owner: 'Planner',
    nextAction: 'Assign dedicated rework slot on milling cluster',
    priority: 'critical',
  },
];

export const REWORK_IMPROVEMENT_ACTIONS = [
  {
    title: 'Aging SLA for rework lots',
    description: 'Flag every lot waiting more than 12h and escalate again at 24h to avoid silent stagnation.',
    impact: 'Cuts waiting time hidden in the queue.',
  },
  {
    title: 'Fast re-inspection lane',
    description: 'After repair completion, route parts directly to Q/D instead of sending them back into the normal queue.',
    impact: 'Reduces secondary waiting before release.',
  },
  {
    title: 'Dedicated rework capacity windows',
    description: 'Reserve small daily machine / tool-maker slots for rework so urgent corrections do not compete blindly with normal orders.',
    impact: 'Shortens in-repair completion time.',
  },
  {
    title: 'Single owner per rework lot',
    description: 'Assign planner, tool-maker, or QA ownership so each lot always has a next responsible person.',
    impact: 'Improves handoff discipline and response speed.',
  },
];

export const MOCK_MACHINES: MachineStatus[] = [
  {
    id: 'NM415-MILL',
    name: 'NM 415 Milling Center',
    status: 'online',
    temperature: 46.8,
    vibration: 0.18,
    lastMaintained: '2024-04-10',
    currentTask: 'High-load routing group: Milling - 58,822 planned min',
    efficiency: 89,
    oee: 84,
    runtime: 980,
    nextMaintenanceTasks: ['Fixture check for long milling jobs', 'Tool wear review after 973 occurrences'],
  },
  {
    id: 'AGIE-WCUT',
    name: 'Agie Wire Cut / EDM',
    status: 'warning',
    temperature: 51.4,
    vibration: 0.32,
    lastMaintained: '2024-03-28',
    currentTask: 'Second-largest load: 50,815 planned min',
    efficiency: 76,
    oee: 73,
    runtime: 847,
    nextMaintenanceTasks: ['Wire path calibration', 'Queue split for long cutting plates'],
  },
  {
    id: 'PUMA-L2600',
    name: 'PUMA 2600Y Lathe',
    status: 'online',
    temperature: 44.2,
    vibration: 0.16,
    lastMaintained: '2024-04-02',
    currentTask: 'Turning workload: 20,619 planned min',
    efficiency: 85,
    oee: 82,
    runtime: 344,
    nextMaintenanceTasks: ['Chuck accuracy check', 'Lathe program library review'],
  },
  {
    id: 'GRIND-G01',
    name: 'Surface Grinding Cell',
    status: 'warning',
    temperature: 49.7,
    vibration: 0.27,
    lastMaintained: '2024-03-18',
    currentTask: 'Grinding workload: 20,040 planned min',
    efficiency: 81,
    oee: 79,
    runtime: 334,
    nextMaintenanceTasks: ['Wheel dressing schedule', 'Parallelism control check'],
  },
];

export const MOCK_PRODUCTION_DATA: ProductionMetric[] = ROUTE_GROUPS.slice(0, 8).map((group) => ({
  timestamp: group.name,
  unitsProduced: Math.round(group.plannedMinutes / 100),
  target: Math.round(MUBEA_ANALYSIS_KPIS.plannedMinutesTotal / ROUTE_GROUPS.length / 100),
  defectRate: MUBEA_ANALYSIS_KPIS.reworkSharePct,
}));

export const HISTORIC_OEE_DATA = CATEGORY_SUMMARY.map((row) => ({
  day: row.category.replace(' workflows', ''),
  oee: row.share,
  plannedMinutes: row.plannedMinutes,
  fileCount: row.fileCount,
}));
