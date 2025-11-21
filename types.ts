export interface MetricCardProps {
  title: string;
  value: string | number;
  subValue?: string;
  isPositive?: boolean;
  percentage?: number;
}

export interface TruckData {
  id: string;
  driver: string;
  status: 'In Transit' | 'Loading' | 'Delivered' | 'Idle';
  capacity: number;
  location: string;
  destination: string;
  eta: string;
}

export interface ChatMessage {
  id: string;
  sender: string;
  text: string;
  timestamp: string;
  isMe: boolean;
}