import { useCallback } from 'react';

export type ToastType = 'success' | 'error' | 'info' | 'warning';

export function useToast() {
  const showToast = useCallback(
    (message: string, type: ToastType = 'info', duration?: number) => {
      const event = new CustomEvent('toast', {
        detail: { message, type, duration },
      });
      window.dispatchEvent(event);
    },
    []
  );

  return { showToast };
}
