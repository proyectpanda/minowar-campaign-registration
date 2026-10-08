import { useEffect, useState } from "react";

const galleryPhotos = [
  { id: "1lRzDsT7o2-tZMIaxSyg7AOzAYVFR5NzT", name: "game (1).jpg" },
  { id: "1nIAle8yDayqnbQdqhkD58nTBca9kfXvV", name: "game (17).jpg" },
  { id: "1gG4I4yzEU_QJRUqrdcnhzqaZ3tbBgVlw", name: "game (18).jpg" },
  { id: "1q8glgv2-1bYgRADBaglLOtAqxxHoTWVR", name: "game (19).jpg" },
  { id: "1OKCYR2JYrwKVp3x29t2Y8yaK_Fvvgwbt", name: "game (20).jpg" },
  { id: "1INbxnszehsq8exw0uTINbMsQQXGZoXd9", name: "game (21).jpg" },
  { id: "1-toZgUBJLfiiy7aFaP_fOIttwR3RXq-6", name: "game (22).jpg" },
  { id: "12X17zx0EvHw5vcIz4QyyOLX3nHNutuuQ", name: "game (23).jpg" },
  { id: "1zPe3EwzEr_v5yImvoY_uG3TRvwm1Vjpn", name: "game (24).jpg" },
  { id: "1WO4Q8NvFlR44ySilM0GAVwQZ_Yh3iWRB", name: "game (25).jpg" },
  { id: "14U1_0zT6B-7KqTmXJ7ZeSoFT8imImIPI", name: "game (26).jpg" },
  { id: "1ypOknOgwIA7qAAJtMc4H1vIkH20QqAS-", name: "game (27).jpg" },
  { id: "1mdiJl1ZQkr0Ovw8SlHGvKPu_JP_x0O-G", name: "game (28).jpg" },
  { id: "18OdwI-ZJKLTgY0hp0AXQ9EOu3u1F-Xak", name: "game (29).jpg" },
  { id: "1nIW2ERMk4pcPAGYaNlg12hrj5Bhsu_NT", name: "game (30).jpg" },
  { id: "15dp8_Dd6xisEC5322o-0O67KsK0-I5KZ", name: "game (31).jpg" },
  { id: "15IFYWXz6QlHOoe7Jcu_M_BkAOn9SJ-Q4", name: "game (32).jpg" },
  { id: "1UosoApGk9-ApeYBvLBB1RR4NxdR4NOkj", name: "game (33).jpg" },
  { id: "1_iC4Dh7BxpkpEQOWg7oWVsl1wdVvWICV", name: "game (34).jpg" },
  { id: "1ANYs3i9bLgmJbjLT1GrKqrzpYKQtIQzx", name: "game (35).jpg" },
  { id: "16N8z2K0wsNdPmDDwZdXClZIse4t9yo_V", name: "game (36).jpg" },
  { id: "1_xnibWXt66rQ3PWATP1AWh0LAADiof4w", name: "game (37).jpg" },
  { id: "1D_Y9Pv0nDbSDZlxSHX6t8biXscxYFpOl", name: "game (38).jpg" },
  { id: "18zcPNeoi4M-JJh7auXUmYz3yuXB8Jios", name: "game (39).jpg" },
  { id: "16X8vRbzsrh34vI7H-sa5yZarTcVjxxih", name: "game (40).jpg" },
  { id: "10cpuoyGEq5QX4hrxE8JV4iUzGzx3Eh3P", name: "game (41).jpg" },
  { id: "1nCxZWp8lua43LRb0rl75L1o886e3Af6u", name: "game (42).jpg" },
  { id: "1_WdTbhedY0w_uXhkMM7Xd38ecJ9kM05u", name: "game (43).jpg" },
  { id: "1gyPawsVYGWy9TFmOirx78FNhBZcoHXqo", name: "game (44).jpg" },
  { id: "16tQVoKwUvcq1Sdn2ZCWkVp5Ejmd6k7Sj", name: "game (45).jpg" },
  { id: "1BpftX6v-KPC7kDNrkG-213aIbUgJsRQ1", name: "game (46).jpg" },
  { id: "1BVlOARgFt0ePKKmjqmwPwhILxeUwFe6m", name: "game (47).jpg" },
  { id: "1FkvJIwRJWFOQJNsW7dMSiPTCRT_xEdPe", name: "game (48).jpg" },
  { id: "1DQ2EFIL7-LBhKGNKI9mDbMYPGwXSdqwc", name: "game (49).jpg" },
  { id: "1uC7TkqmzmKLXgSXvs9FKBgsjykWejF-_", name: "game (50).jpg" },
  { id: "10px4CiBQ9oXfsHcpH3KZwfKZS6I9xYXR", name: "game (51).jpg" },
  { id: "1BYzOX7Ww1i3Rxxm1-TfYnO2a3P_aOZmI", name: "game (52).jpg" },
  { id: "1QNl6rAlOODURwFBkD317Mt8FMbz29xfh", name: "game (53).jpg" },
  { id: "1ekGqKXuhZG9ATegZ7s5D25e9rLE2_wq2", name: "game (54).jpg" },
  { id: "1p_EhyWFjVXKqFi35E-wYv5cYUQCHH8QU", name: "game (55).jpg" },
  { id: "1rdXIO7srVVLLmB0Ibkw2758Nfz6Ht_BU", name: "game (56).jpg" },
  { id: "12v7EStsGtsiI5-PIFLnmrS85EAR9oSb5", name: "game (57).jpg" },
  { id: "1E5TsmxcMTjD9oAPsZgBo-23_wyFGGUuY", name: "game (58).jpg" },
  { id: "1dee4RMJPJaIwZev1OrTqWusqDNC59iCa", name: "game (59).jpg" },
  { id: "1WxplCLOX2XxDVGrJwQFV9SKny7pwoqlA", name: "game (60).jpg" },
  { id: "17wooTlqHXdn7TsYpwZ57B9wd-I-enr7E", name: "game (61).jpg" },
  { id: "1I1HpHudbMA32JjG65GA68knbBp-N_7TN", name: "game (62).jpg" },
  { id: "1WehpiQAkHzEtIoTfvWRmXQL6iBVdcXVA", name: "game (63).jpg" },
  { id: "17hxCZhjBcfi-wjsqBdIAYa-q8OFkPa2S", name: "game (64).jpg" },
  { id: "1uF_JOmzGyxuBAKCtrpnBVEY893MJvxy4", name: "game (65).jpg" },
  { id: "1lKU1MEtzYGr_EJjJds_CBYl8guHSr9DQ", name: "game (66).jpg" },
  { id: "1USbrm4YNuWX_IkSw61m9O25lNjugy0YS", name: "game (67).jpg" },
  { id: "1Fkciw79UrORmqoOzjhgKpX4Qt50dN7ZL", name: "game (68).jpg" },
  { id: "1KP2m4C7hP_BinrWMirSZW7QlXl0X7IG3", name: "game (69).jpg" },
  { id: "1DrKMEikCi96LZucCl_kDh037SsJy5gYD", name: "game (70).jpg" },
  { id: "1qSjmJjmeH3bvi6NNAu-218KdAq4iGFwc", name: "game (71).jpg" },
] as const;

function thumbnailUrl(id: string, width: number) {
  return `https://drive.google.com/thumbnail?id=${encodeURIComponent(id)}&sz=w${width}`;
}

const headingStyle = { fontFamily: '"Barlow Condensed", sans-serif' };

export function CampaignGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const count = galleryPhotos.length;
  const selected = selectedIndex === null ? null : galleryPhotos[selectedIndex];

  const previous = () => {
    setSelectedIndex((index) => (index === null ? null : (index - 1 + count) % count));
  };
  const next = () => {
    setSelectedIndex((index) => (index === null ? null : (index + 1) % count));
  };

  useEffect(() => {
    if (selectedIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedIndex(null);
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setSelectedIndex((index) => (index === null ? null : (index - 1 + count) % count));
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        setSelectedIndex((index) => (index === null ? null : (index + 1) % count));
      }
    };

    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = oldOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedIndex, count]);

  return (
    <section aria-labelledby="campaign-gallery-heading" className="space-y-6 border-t border-[#bebdbc] pt-8">
      <h2 id="campaign-gallery-heading" className="text-[#1c3b56] text-[32px] font-semibold leading-[normal]" style={headingStyle}>
        Galeria kampanii
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-3">
        {galleryPhotos.map((photo, index) => (
          <button
            type="button"
            key={photo.id}
            className="relative block aspect-square w-full overflow-hidden bg-[#d9d3cf] cursor-zoom-in focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00378D] focus-visible:outline-offset-2 group"
            onClick={() => setSelectedIndex(index)}
            aria-label={`Powiększ zdjęcie ${index + 1} z ${count}`}
          >
            <img
              src={thumbnailUrl(photo.id, 500)}
              alt={`Zdjęcie ${index + 1} z kampanii Dominion`}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {selected && selectedIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Zdjęcie ${selectedIndex + 1} z ${count}`}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0d0d0e]/95 px-2 sm:px-6 py-8"
          onClick={() => setSelectedIndex(null)}
        >
          <button
            type="button"
            className="absolute right-4 top-3 sm:right-8 sm:top-5 z-10 text-white text-[34px] leading-none hover:opacity-70"
            aria-label="Zamknij galerię"
            onClick={(event) => { event.stopPropagation(); setSelectedIndex(null); }}
          >
            ×
          </button>
          <button
            type="button"
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-10 p-2 text-white text-[42px] leading-none hover:opacity-70"
            aria-label="Poprzednie zdjęcie"
            onClick={(event) => { event.stopPropagation(); previous(); }}
          >
            ‹
          </button>
          <img
            src={thumbnailUrl(selected.id, 2000)}
            alt={`Powiększone zdjęcie ${selectedIndex + 1} z kampanii`}
            className="max-h-[82vh] max-w-[calc(100vw-96px)] sm:max-w-[85vw] object-contain shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          />
          <button
            type="button"
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-10 p-2 text-white text-[42px] leading-none hover:opacity-70"
            aria-label="Następne zdjęcie"
            onClick={(event) => { event.stopPropagation(); next(); }}
          >
            ›
          </button>
          <p
            className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-[16px] font-medium"
            style={headingStyle}
          >
            {selectedIndex + 1} / {count}
          </p>
        </div>
      )}
    </section>
  );
}
