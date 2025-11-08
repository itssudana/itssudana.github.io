// utils/consoleUtils.ts

/**
 * Disable all console outputs in production
 * and show a styled gradient credit message once.
 */
export function setupProductionConsole() {
  if (!import.meta.env.PROD) return; // only run in production

  // 🔇 Matikan semua log kecuali credit
  console.log = () => {};
  console.warn = () => {};
  console.error = () => {};
  console.info = () => {};
  console.debug = () => {};

  // 💎 Tampilkan credit dengan gradient
  window.addEventListener("DOMContentLoaded", () => {
    const gradientText = `
%c Designed and Coded by Natha © 2025 
`;

    const style = `
background: linear-gradient(90deg, #1e40af, #7e22ce);
color: white;
padding: 6px 14px;
border-radius: 6px;
font-weight: 600;
font-family: 'Geist Sans', sans-serif;
font-size: 14px;
`;

    console.log(gradientText, style);
  });
}
