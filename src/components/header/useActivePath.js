import { usePathname } from 'next/navigation';

export function useActivePath() {
    const pathname = usePathname();
  
    return (path) => {
      if (!pathname) return false;
      if (path === '/' && pathname !== path) {
        return false;
      }
      return pathname.startsWith(path);
    };
  }