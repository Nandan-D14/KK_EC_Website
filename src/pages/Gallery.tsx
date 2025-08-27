import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { X, ArrowLeft, ArrowRight, Download, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import BlogHeroSection from "@/components/BlogHeroSection";
import Noisebg from "@/components/ui/noise-bg";

type ImageItem = {
  id: number;
  src: string;
  title: string;
  date: string;
  category: string;
  description?: string;
};

const Gallery: React.FC = () => {
  const initialCount = 16;
  const cats = ["Memories", "Events", "Workshops", "Performances"];

  const makeItem = (i: number): ImageItem => ({
    id: i + 1,
    src: `https://picsum.photos/seed/kannada-${i + 1}/1200/800`,
    title: `Kannada Moment ${i + 1}`,
    date: new Date(2025, (i % 12), (i % 28) + 1).toLocaleDateString(),
    category: cats[i % cats.length],
    description: `A memorable moment from our club activity #${i + 1}.`,
  });

  const [items, setItems] = useState<ImageItem[]>(() => Array.from({ length: initialCount }).map((_, i) => makeItem(i)));

  // --- UI state ---
  const [filter, setFilter] = useState<string>("All");
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const lightboxRef = useRef<HTMLDivElement | null>(null);

  const categories = useMemo(() => ["All", ...Array.from(new Set(items.map((i) => i.category)))], [items]);

  const filtered = useMemo(() => {
    return items.filter((img) => {
      const matchCat = filter === "All" || img.category === filter;
      const matchQuery = query.trim() === "" || `${img.title} ${img.description}`.toLowerCase().includes(query.toLowerCase());
      return matchCat && matchQuery;
    });
  }, [items, filter, query]);

  // Load more (client-side generate more placeholder images)
  const loadMore = () => {
    setItems((prev) => {
      const next = Array.from({ length: 12 }).map((_, i) => makeItem(prev.length + i));
      return [...prev, ...next];
    });
  };

  // --- Lightbox controls ---
  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  const showPrev = () => setSelectedIndex((s) => (s === null ? null : (s - 1 + filtered.length) % filtered.length));
  const showNext = () => setSelectedIndex((s) => (s === null ? null : (s + 1) % filtered.length));

  const handleKey = useCallback((e: KeyboardEvent) => {
    if (selectedIndex === null) return;
    if (e.key === "ArrowLeft") showPrev();
    if (e.key === "ArrowRight") showNext();
    if (e.key === "Escape") closeLightbox();
  }, [selectedIndex, filtered.length]);

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  useEffect(() => {
    // trap focus in lightbox when open (basic)
    if (selectedIndex !== null) {
      lightboxRef.current?.focus();
    }
  }, [selectedIndex]);

  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      
      {/* <BlogHeroSection /> */}
      <main className="container mx-auto px-4 py-12">
        <Noisebg 
        width="w-auto"
        height="h-auto"
        className="shadow-none rounded-3xl flex flex-col my-10"
        animated={false}
        noiseOpacity={0.3}
        grainSize={1}
        bgColor="bg-blue-500"
        >

        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-200 mb-2">Gallery</h1>
          <p className="text-lg text-green-100 max-w-2xl mx-auto">
            A curated collection of memories, events, performances and workshops. Click an image to view details and navigate the gallery.
          </p>
        </header>
        </Noisebg >
        {/* Filters / Search */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
          <div className="flex items-center flex-wrap gap-2">
            {categories.map((c) => (
              <Button
                key={c}
                className={`text-sm ${filter === c ? "bg-yellow-400 text-black" : "bg-white text-gray-700"}`}
                onClick={() => setFilter(c)}
              >
                {c}
              </Button>
            ))}
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto">
            <div className="relative w-full md:w-64">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search photos, titles or descriptions..."
                className="w-full pl-10 pr-3 py-2 rounded-lg border shadow-sm focus:outline-none"
                aria-label="Search gallery"
              />
              <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-500" />
            </div>
            <Badge>{filtered.length}</Badge>
          </div>
        </div>

        <section aria-label="Gallery" className="mb-12">
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {filtered.map((img, idx) => (
              <article
                key={img.id}
                className="break-inside-avoid rounded-lg overflow-hidden bg-white shadow hover:shadow-lg transition-shadow duration-200 cursor-pointer"
                onClick={() => openLightbox(idx)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === "Enter") openLightbox(idx); }}
              >
                <div className="relative">
                  <img
                    src={img.src}
                    alt={img.title}
                    loading="lazy"
                    className="w-full h-auto object-cover block"
                    style={{ display: "block" }}
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 mb-1">{img.title}</h3>
                    <p className="text-sm text-gray-500">{img.date} • <span className="font-medium">{img.category}</span></p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Pagination / Load more (simple) */}
        {filtered.length === 0 && (
          <div className="text-center py-12 text-gray-500">No images found for your filters.</div>
        )}

        <div className="text-center mt-6">
          <Button onClick={loadMore} className="bg-yellow-400 text-black">
            Load more photos
          </Button>
        </div>

        {/* Lightbox Modal */}
        {selectedIndex !== null && (
          <div
            ref={lightboxRef}
            tabIndex={-1}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4"
            aria-modal
            role="dialog"
            onClick={closeLightbox}
          >
            <div className="relative max-w-4xl w-full mx-auto" onClick={(e) => e.stopPropagation()}>
              <button
                className="absolute top-3 right-3 bg-white rounded-full p-2 shadow"
                onClick={closeLightbox}
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="bg-white rounded-lg overflow-hidden">
                <div className="relative flex items-center justify-center bg-black">
                  <img
                    src={filtered[selectedIndex].src}
                    alt={filtered[selectedIndex].title}
                    className="w-full max-h-[70vh] object-contain bg-black"
                  />
                  {/* Prev / Next */}
                  <button
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-2 shadow"
                    onClick={showPrev}
                    aria-label="Previous"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  <button
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-2 shadow"
                    onClick={showNext}
                    aria-label="Next"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>

                <div className="p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{filtered[selectedIndex].title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{filtered[selectedIndex].date} • {filtered[selectedIndex].category}</p>
                    <p className="text-sm text-gray-700 mt-2">{filtered[selectedIndex].description}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <a href={filtered[selectedIndex].src} download className="">
                      <Button className="bg-yellow-400 text-black">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </a>
                    <Button onClick={showPrev} className="hidden md:inline-flex">
                      Prev
                    </Button>
                    <Button onClick={showNext} className="hidden md:inline-flex">
                      Next
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Gallery;