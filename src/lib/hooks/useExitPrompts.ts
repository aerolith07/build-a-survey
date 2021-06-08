import { useState, useEffect } from 'react';

const initBeforeUnLoad = (showExitPrompt: boolean) => {
  window.onbeforeunload = (event: Event) => {
    if (showExitPrompt) {
      const e = event || window.event;
      e.preventDefault();
      if (e) {
        e.returnValue = false;
      }
      return '';
    }
    return false;
  };
};

export default function useExitPrompt(bool: boolean) {
  const [showExitPrompt, setShowExitPrompt] = useState(bool);

  if (global.window) {
    window.onload = () => {
      initBeforeUnLoad(showExitPrompt);
    };

    useEffect(() => {
      initBeforeUnLoad(showExitPrompt);
    }, [showExitPrompt]);
  }

  return [showExitPrompt, setShowExitPrompt];
}
