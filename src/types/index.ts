export type EventType = {
    year: string;
    title: string;
    description: string;
  };
  
  export type Period = {
    start: string;
    end: string;
    category: string;
    events: EventType[];
  };
  
  export type PeriodsType = Period[];