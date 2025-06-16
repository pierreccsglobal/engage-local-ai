
declare global {
  interface Window {
    Calendly: {
      initInlineWidget: (options: {
        url: string;
        parentElement: Element | null;
        prefill?: any;
        utm?: any;
      }) => void;
    };
  }
}

export {};
