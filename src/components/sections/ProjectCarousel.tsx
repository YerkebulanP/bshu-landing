"use client";

import { useRef } from "react";
import { UserIcon, ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";
import type { Project } from "./Projects";

function statusTone(status: string) {
  return status === "реализовано" ? "text-navy-800" : "text-ink-soft";
}

export function ProjectCarousel({ projects }: { projects: Project[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  function scrollByCard(direction: 1 | -1) {
    const track = trackRef.current;
    const firstCard = track?.firstElementChild as HTMLElement | null;
    if (!track || !firstCard) return;

    // Шаг = реальная ширина карточки (она у нас процентная, не фиксированный
    // px), чтобы кнопки всегда докручивали ровно на одну карточку и не
    // оставляли "недокрученный" хвост ни слева, ни справа.
    const gap = parseFloat(getComputedStyle(track).columnGap || "0");
    track.scrollBy({ left: direction * (firstCard.offsetWidth + gap), behavior: "smooth" });
  }

  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={() => scrollByCard(-1)}
        aria-label="Предыдущие проекты"
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-50 text-navy-800 transition-colors hover:bg-navy-800 hover:text-white"
      >
        <ChevronLeftIcon className="h-5 w-5" />
      </button>

      <div
        ref={trackRef}
        className="flex flex-1 snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((project) => (
          <article
            key={project.title}
            className="basis-[85%] shrink-0 snap-start overflow-hidden rounded-2xl bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)] sm:basis-[calc((100%-20px)/2)] lg:basis-[calc((100%-40px)/3)]"
          >
            <div className="aspect-video bg-gradient-to-br from-blue-50 via-white to-green-50" />

            <div className="p-5">
              <h3 className="font-bold text-ink">{project.title}</h3>
              <p className="mt-1.5 flex items-center gap-1.5 text-xs text-ink-soft">
                <UserIcon className="h-3.5 w-3.5" />
                {project.author}
                <span aria-hidden>·</span>
                {project.date}
              </p>

              <div className="mt-4 space-y-1.5 border-t border-line pt-4 text-sm">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-navy-800">Голосов:</span>
                  <span className="font-semibold text-ink">{project.votes}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-ink-soft">Статус реализации:</span>
                  <span className={`font-semibold ${statusTone(project.status)}`}>
                    {project.status}
                  </span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <button
        type="button"
        onClick={() => scrollByCard(1)}
        aria-label="Следующие проекты"
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-50 text-navy-800 transition-colors hover:bg-navy-800 hover:text-white"
      >
        <ChevronRightIcon className="h-5 w-5" />
      </button>
    </div>
  );
}
