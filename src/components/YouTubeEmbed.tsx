import { useState } from "react";

interface Props {
  youtubeId: string;
  label: string;
}

function extractId(raw: string): string {
  const value = raw.trim();

  const patterns = [
    /(?:youtube\.com\/watch\?(?:.*&)?v=)([\w-]{11})/,
    /(?:youtu\.be\/)([\w-]{11})/,
    /(?:youtube\.com\/embed\/)([\w-]{11})/,
    /(?:youtube\.com\/shorts\/)([\w-]{11})/,
  ];

  for (const pattern of patterns) {
    const match = value.match(pattern);
    if (match) return match[1];
  }

  const bare = value.match(/^[\w-]{11}/);
  return bare ? bare[0] : value;
}

export default function YouTubeEmbed({ youtubeId, label }: Props) {
  const [playing, setPlaying] = useState(false);
  const id = extractId(youtubeId);

  return (
    <figure className="m-0">
      <div className="relative aspect-video w-full overflow-hidden border border-edge bg-surface">
        {playing ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
            title={label}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play ${label}`}
            className="group absolute inset-0 h-full w-full cursor-pointer"
          >
            <img
              src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`}
              alt=""
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget;
                if (!img.dataset.fallback) {
                  img.dataset.fallback = "1";
                  img.src = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
                }
              }}
              className="h-full w-full object-cover opacity-70 transition-opacity duration-300 group-hover:opacity-100"
            />
            <span className="absolute inset-0 grid place-items-center">
              <span className="flex h-14 w-14 items-center justify-center border border-signal bg-void/80 transition-colors duration-300 group-hover:bg-signal">
                <svg
                  viewBox="0 0 24 24"
                  className="ml-0.5 h-5 w-5 fill-signal transition-colors duration-300 group-hover:fill-void"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </span>
          </button>
        )}
      </div>
      <figcaption className="mt-2 font-mono text-[0.72rem] text-dim">{label}</figcaption>
    </figure>
  );
}
