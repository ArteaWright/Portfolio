/* eslint-disable @typescript-eslint/no-explicit-any */
export {};

declare global {
  interface Window {
    AgentInitializer?: {
      init: (config: any) => void; // Bypasses the error
    };
  }
}
/* eslint-enable @typescript-eslint/no-explicit-any */
