/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type UserRole = 'worker' | 'manager' | 'maintenance' | 'quality' | 'procurement';

export interface MachineStatus {
  id: string;
  name: string;
  status: 'online' | 'offline' | 'warning' | 'maintenance';
  temperature: number;
  vibration: number;
  lastMaintained: string;
  currentTask: string;
  efficiency: number;
  oee: number;
  runtime: number; // in hours
  nextMaintenanceTasks: string[];
}

export interface ProductionMetric {
  timestamp: string;
  unitsProduced: number;
  target: number;
  defectRate: number;
}

export interface OptimizationInsight {
  title: string;
  description: string;
  severity: 'low' | 'medium' | 'high';
  impact: string;
  actionRequired: string;
}

export interface FactoryLayout {
  machines: {
    id: string;
    x: number;
    y: number;
    width: number;
    height: number;
    label: string;
  }[];
}
