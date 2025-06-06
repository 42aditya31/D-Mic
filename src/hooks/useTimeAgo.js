import { useMemo } from "react";


export function getTimeAgo(date) {
  if (!date) return "some time ago";
  const diff = Date.now() - new Date(date).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  return `${days}d ago`;
}


export default function useTimeAgo(date) {
  return useMemo(() => getTimeAgo(date), [date]);
}
