import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { CheckCircle2, MapPin, User } from "lucide-react";

interface Notification {
  id: number;
  name: string;
  location: string;
  time: string;
}

const NOTIFICATIONS: Notification[] = [
  { id: 1, name: "Carlos Méndez", location: "Mendoza, Argentina", time: "hace 2 minutos" },
  { id: 2, name: "María González", location: "Querétaro, México", time: "hace 4 minutos" },
  { id: 3, name: "Juan Pérez", location: "Cali, Colombia", time: "hace 6 minutos" },
  { id: 4, name: "Ana Rodríguez", location: "Santiago, Chile", time: "hace 8 minutos" },
  { id: 5, name: "Luis Hernández", location: "Lima, Perú", time: "hace 11 minutos" },
  { id: 6, name: "Carmen Silva", location: "São Paulo, Brasil", time: "hace 13 minutos" },
  { id: 7, name: "Pedro Vargas", location: "Bogotá, Colombia", time: "hace 15 minutos" },
  { id: 8, name: "Laura Torres", location: "Guadalajara, México", time: "hace 18 minutos" },
  { id: 9, name: "Diego Ramírez", location: "Montevideo, Uruguay", time: "hace 20 minutos" },
  { id: 10, name: "Sofía Morales", location: "Caracas, Venezuela", time: "hace 22 minutos" },
];

export function SocialProofToast() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const startDelay = setTimeout(() => {
      setHasStarted(true);
      setIsVisible(true);
    }, 5000);

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
    }, 5000);

    return () => clearInterval(interval);
  }, [hasStarted]);

  const notification = NOTIFICATIONS[currentIndex];
  if (!notification) return null;

  return (
    <div
      className={cn(
        "fixed bottom-5 left-5 z-40 max-w-[320px] transition-all duration-500 ease-out sm:bottom-6 sm:left-6",
        isVisible
          ? "translate-x-0 opacity-100"
          : "-translate-x-full opacity-0",
      )}
      aria-live="polite"
      aria-atomic="true"
    >
      <div className="flex items-start gap-3 rounded-2xl border border-border bg-card/95 p-4 shadow-lift backdrop-blur-xl">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
          <User className="h-5 w-5 text-primary" aria-hidden="true" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-card-foreground">
            {notification.name}
          </p>
          <p className="mt-0.5 flex items-center gap-1 text-xs text-muted-foreground">
            <MapPin className="h-3 w-3" aria-hidden="true" />
            <span className="truncate">{notification.location}</span>
          </p>
          <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-primary">
            <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
            Acaba de comprar el Acceso Completo
          </p>
          <p className="mt-0.5 text-[10px] text-muted-foreground/80">
            {notification.time}
          </p>
        </div>
      </div>
    </div>
  );
}
