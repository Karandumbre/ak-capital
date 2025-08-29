// Type definitions
export interface UseCountAnimationProps {
  end: number;
  duration?: number;
  startOnView?: boolean;
  threshold?: number;
}

export interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}
