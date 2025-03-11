export {};

declare global {
  interface Window {
    AgentInitializer?: {
      init: (config: Record<string, any>) => void;
    };
  }
}
