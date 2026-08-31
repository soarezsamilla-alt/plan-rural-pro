import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { CheckCircle2, User } from "lucide-react";

interface Notification {
  id: number;
  name: string;
  time: string;
}

const NOTIFICATIONS: Notification[] = [
  { id: 1, name: "Carlos Méndez", time: "hace 2 minutos" },
  { id: 2, name: "María González", time: "hace 4 minutos" },
  { id: 3, name: "Juan Pérez", time: "hace 6 minutos" },
  { id: 4, name: "Ana Rodríguez", time: "hace 8 minutos" },
  { id: 5, name: "Luis Hernández", time: "hace 11 minutos" },
  { id: 6, name: "Carmen Silva", time: "hace 13 minutos" },
  { id: 7, name: "Pedro Vargas", time: "hace 15 minutos" },
  { id: 8, name: "Laura Torres", time: "hace 18 minutos" },
  { id: 9, name: "Diego Ramírez", time: "hace 20 minutos" },
  { id: 10, name: "Sofía Morales", time: "hace 22 minutos" },
];

export function SocialProofToast() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const startDelay = setTimeout(() => {
      setHasStarted(true);
      setIsVisible(true);
    }, 6000);

    return () => clearTimeout(startDelay);
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    const interval = setInterval(() => {
      setIsVisible(false);

      const hideDelay = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % NOTIFICATIONS.length);
        setIsVisible(true);
      }, 500);

      return () => clearTimeout(hideDelay);
    }, 6000);

    return () => clearInterval(interval);
  }, [hasStarted]);

  const notification = NOTIFICATIONS[currentIndex];
  if (!notification) return null;

  return (
    <div
      className={cn(
        "fixed bottom-4 left-4 z-40 max-w-[260px] transition-all duration-500 ease-out sm:bottom-5 sm:left-5",
        isVisible
          ? "translate-x-0 opacity-100"
          : "-translate-x-full opacity-0",
      )}
      aria-live="polite"
      aria-atomic="true"
    >
      <div className="flex items-center gap-2.5 rounded-xl border border-border bg-card/95 p-2.5 shadow-lift backdrop-blur-xl">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
          <User className="h-4 w-4 text-primary" aria-hidden="true" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-xs font-semibold text-card-foreground">
            {notification.name}
          </p>
          <p className="mt-0.5 flex items-center gap-1 text-[10px] font-medium text-primary">
            <CheckCircle2 className="h-3 w-3" aria-hidden="true" />
            Acceso Completo
          </p>
          <p className="text-[9px] text-muted-foreground/80">
            {notification.time}
          </p>
        </div>
      </div>
    </div>
  );
}
