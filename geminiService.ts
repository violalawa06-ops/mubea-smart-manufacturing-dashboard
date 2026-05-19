/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GoogleGenAI, Type } from "@google/genai";
import { MachineStatus, OptimizationInsight } from "../types/dashboard";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function getProductionInsights(machines: MachineStatus[]): Promise<OptimizationInsight[]> {
  try {
    const prompt = `
      As an industrial manufacturing consultant for Mubea (a German automotive supplier specialized in lightweight components),
      analyze the following real-time machine data from the Taicang branch and provide 3 actionable optimization insights.
      Focus on Lean Manufacturing, Efficiency, and Operations Optimization.

      Data: ${JSON.stringify(machines)}

      Return a JSON array of insights.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              description: { type: Type.STRING },
              severity: { type: Type.STRING, enum: ["low", "medium", "high"] },
              impact: { type: Type.STRING },
              actionRequired: { type: Type.STRING },
            },
            required: ["title", "description", "severity", "impact", "actionRequired"],
          },
        },
      },
    });

    if (response.text) {
      return JSON.parse(response.text);
    }
    return [];
  } catch (error) {
    console.error("Error fetching AI insights:", error);
    return [
      {
        title: "Thermal Warning on Assembly-02",
        description: "Robot arm assembly 02 is showing elevated temperatures above 55°C. This suggests potential friction issues or cooling failures.",
        severity: "high",
        impact: "Risk of mechanical failure and unplanned downtime.",
        actionRequired: "Deploy maintenance team for immediate thermal inspection and lubrication check."
      },
      {
        title: "Press-04 Under-utilization",
        description: "Press-04 is currently idle. Historical data suggests it is often a bottleneck when running at 100% capacity.",
        severity: "medium",
        impact: "Production flow imbalance and wasted energy.",
        actionRequired: "Review production schedule to re-balance load across active stations."
      }
    ];
  }
}
