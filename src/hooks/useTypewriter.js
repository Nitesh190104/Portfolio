import { useState, useEffect } from 'react';

/**
 * useTypewriter — types out a string character by character
 * @param {string} text - The full text to type out
 * @param {number} speed - Ms per character (default 80)
 * @param {number} delay - Ms to wait before starting (default 400)
 * @returns {{ displayed: string, done: boolean }}
 */
export function useTypewriter(text, speed = 80, delay = 400) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed('');
    setDone(false);
    let index = 0;

    const startTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        index++;
        setDisplayed(text.slice(0, index));
        if (index >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [text, speed, delay]);

  return { displayed, done };
}
