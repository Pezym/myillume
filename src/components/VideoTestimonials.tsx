import { useState, useRef, useCallback, useEffect } from 'react';
import { Play, Volume2, VolumeX, ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

const testimonials = [
  { src: '/videos/testimonial-1.mp4', name: 'Real Customer Review' },
  { src: '/videos/testimonial-2.mp4', name: 'Real Customer Review' },
  { src: '/videos/testimonial-3.mov', name: 'Real Customer Review' },
  { src: '/videos/testimonial-4.mov', name: 'Real Customer Review' },
  { src: '/videos/testimonial-5.mov', name: 'Real Customer Review' },
  { src: '/videos/testimonial-6.mov', name: 'Real Customer Review' },
  { src: '/videos/testimonial-7.mov', name: 'Real Customer Review' },
];

const VideoCard = ({ src, name }: { src: string; name: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (playing) { v.pause(); } else { v.play(); }
    setPlaying(!playing);
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    v.muted = !muted;
    setMuted(!muted);
  };

  return (
    <div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-muted group cursor-pointer" onClick={togglePlay}>
      <video
        ref={videoRef}
        src={src}
        muted={muted}
        loop
        playsInline
        preload="metadata"
        className="w-full h-full object-cover"
        onEnded={() => setPlaying(false)}
      />
      {!playing && (
        <div className="absolute inset-0 flex items-center justify-center bg-foreground/10">
          <div className="w-14 h-14 rounded-full bg-background/90 flex items-center justify-center shadow-lg">
            <Play size={22} className="text-foreground ml-1" />
          </div>
        </div>
      )}
      {playing && (
        <button
          onClick={toggleMute}
          className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-background/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
        >
          {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>
      )}
      <div className="absolute bottom-4 left-4">
        <p className="font-body text-xs text-white/90 bg-foreground/40 backdrop-blur-sm px-3 py-1 rounded-full">{name}</p>
      </div>
    </div>
  );
};

const VideoTestimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
    slidesToScroll: 1,
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => { emblaApi.off('select', onSelect); };
  }, [emblaApi, onSelect]);

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center mb-10">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-sand mb-2">REAL RESULTS</p>
        <h2 className="font-display text-3xl md:text-4xl">What Our Customers Are Saying</h2>
      </div>
      <div className="relative">
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex -ml-4">
            {testimonials.map((t, i) => (
              <div key={i} className="min-w-0 shrink-0 grow-0 basis-1/2 md:basis-1/4 pl-4">
                <VideoCard src={t.src} name={t.name} />
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={() => emblaApi?.scrollPrev()}
          disabled={!canScrollPrev}
          className="absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background border border-border shadow-md flex items-center justify-center disabled:opacity-30 transition-opacity hover:bg-muted z-10"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={() => emblaApi?.scrollNext()}
          disabled={!canScrollNext}
          className="absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background border border-border shadow-md flex items-center justify-center disabled:opacity-30 transition-opacity hover:bg-muted z-10"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
};

export default VideoTestimonials;
