export const storyData = {
  // CHAPTER 1: Zero Day
  start: {
    text: "ALERT: Intrusi tidak sah terdeteksi pada Node Utama Curzy Cloud. Waktu respons kritis. Apa tindakanmu?",
    options: [
      { text: "Isolasi Firewall (Cepat, Risiko Tinggi)", target: "firewall_active", impact: { security: 10, techDebt: 10, resources: -5 } },
      { text: "Audit Log & Refactor (Lambat, Aman)", target: "audit_process", impact: { security: 20, techDebt: -15, resources: -10 } }
    ]
  },
  firewall_active: {
    text: "Firewall diaktifkan. Serangan tertahan, tapi akses klien ke database melambat drastis. Klien mulai komplain. Tindakan selanjutnya?",
    options: [
      { text: "Optimasi Query Database", target: "db_scaling_start", impact: { security: 0, techDebt: -10, resources: -5 } },
      { text: "Ignore & Keep Monitor", target: "failure_end", impact: { security: -30, techDebt: 20, resources: 0 } }
    ]
  },
  audit_process: {
    text: "Audit selesai. Kamu menemukan *backdoor* di legacy code. Memperbaikinya membutuhkan waktu, tapi sistem jauh lebih kuat.",
    options: [
      { text: "Deploy Patch ke Production", target: "db_scaling_start", impact: { security: 20, techDebt: -20, resources: -5 } }
    ]
  },

  // CHAPTER 2: Database Meltdown
  db_scaling_start: {
    text: "CHAPTER 2: Database load spike! High latency detected on the storage layer. The intrusion attempted to flood the SQL pool. What's your move?",
    options: [
      { text: "Scale Vertically (Costly)", target: "auth_security_start", impact: { resources: -30, techDebt: -5 } },
      { text: "Optimize Indexing (Technical Risk)", target: "auth_security_start", impact: { techDebt: 15, security: -5 } }
    ]
  },

  // CHAPTER 3: The Auth Lockout
  auth_security_start: {
    text: "CHAPTER 3: Repeated failed login attempts detected on the Curzy Cloud Portal. A brute force attack is targeting admin accounts.",
    options: [
      { text: "Force Global Account Lockout", target: "ch4_start", impact: { security: 40, resources: -20 } },
      { text: "Implement Dynamic Rate Limiting", target: "ch4_start", impact: { security: 15, techDebt: 5 } }
    ]
  },

  // CHAPTER 4: Supply Chain Attack
  ch4_start: {
    text: "CHAPTER 4: A critical vulnerability was found in a 3rd-party library used by Curzy Cloud. It's a Supply Chain Attack!",
    options: [
      { text: "Freeze Dependencies & Audit", target: "ch5_start", impact: { security: 25, techDebt: 5, resources: -10 } },
      { text: "Hot-patch & Keep Running", target: "ch5_start", impact: { security: 10, techDebt: 20, resources: -5 } }
    ]
  },

  // CHAPTER 5: Edge Computing Migration
  ch5_start: {
    text: "CHAPTER 5: To reduce latency, we need to migrate heavy logic to the Edge. But the budget is tight.",
    options: [
      { text: "Full Edge Migration", target: "ch6_start", impact: { resources: -40, techDebt: -10, security: 5 } },
      { text: "Partial Cloudfront Caching", target: "ch6_start", impact: { resources: -10, techDebt: 15, security: 0 } }
    ]
  },

  // CHAPTER 6: AI Overload
  ch6_start: {
    text: "CHAPTER 6: The Curzy AI assistant is consuming massive GPU tokens. The bill is skyrocketing.",
    options: [
      { text: "Prune Model Logic", target: "ch7_start", impact: { resources: 20, techDebt: 10 } },
      { text: "Upgrade to H100 Clusters", target: "ch7_start", impact: { resources: -50, security: 10 } }
    ]
  },

  // CHAPTER 7: Financial Crisis
  ch7_start: {
    text: "CHAPTER 7: Market downturn! Investors are demanding immediate ROI. We need to cut costs.",
    options: [
      { text: "Aggressive R&D Cuts", target: "ch8_start", impact: { resources: 40, techDebt: 30, security: -10 } },
      { text: "Sustainable Refactoring", target: "ch8_start", impact: { resources: -10, techDebt: -20, security: 10 } }
    ]
  },

  // CHAPTER 8: Team Management
  ch8_start: {
    text: "CHAPTER 8: Team morale is low due to the crunch. Devs are leaving for competitors.",
    options: [
      { text: "Implement 4-Day Work Week", target: "ch9_start", impact: { techDebt: 10, resources: -10, security: 0 } },
      { text: "Hire Elite Freelancers", target: "ch9_start", impact: { resources: -30, techDebt: -20, security: 5 } }
    ]
  },

  // CHAPTER 9: Global Latency
  ch9_start: {
    text: "CHAPTER 9: Users in Southeast Asia report 500ms latency. The current US-central cluster is too far.",
    options: [
      { text: "Deploy Multi-Region Cluster", target: "ch10_start", impact: { resources: -40, security: 20, techDebt: 10 } },
      { text: "Optimize Data Serialization", target: "ch10_start", impact: { techDebt: 15, resources: -5 } }
    ]
  },

  // CHAPTER 10: The Masterpiece
  ch10_start: {
    text: "CHAPTER 10: The initialization is complete. Curzy Cloud has evolved into its final form. A masterpiece of engineering.",
    options: [
      { text: "Initiate Final Protocol", target: "grand_finale_success", impact: { security: 100, techDebt: 0 } }
    ]
  },

  // ENDINGS
  grand_finale_success: {
    text: "VICTORY: The Curzy Cloud Saga is complete. You have built a resilient, high-performance ecosystem. [Campaign Completed]",
    options: [{ text: "Restart Campaign", target: "start" }]
  },
  failure_end: {
    text: "CRITICAL FAILURE: Server crash. You have lost control of the infrastructure. [Game Over]",
    options: [{ text: "Restart Protocol", target: "start" }]
  }
};
