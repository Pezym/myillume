import { useState, useRef } from 'react';
import { Play, Volume2, VolumeX } from 'lucide-react';

const testimonials = [
  { src: '/videos/testimonial-1.mp4', name: 'Real Customer Review' },
  { src: '/videos/testimonial-2.mp4', name: 'Real Customer Review' },
  { src: '/videos/testimonial-3.mov', name: 'Real Customer Review' },
  { src: '/videos/testimonial-4.mov', name: 'Real Customer Review' },
];

const VideoCard = ({ src, name }: { src: string; name: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (playing) {
      v.pause();
    } else {
      v.play();
    }
    setPlaying(!playing);
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !muted;
    setMuted(!muted);
  };

  return (
    <div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-foreground/5 group cursor-pointer" onClick={togglePlay}>
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
          onClick={(e) => { e.stopPropagation(); toggleMute(); }}
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

const VideoTestimonials = () => (
  <section className="max-w-7xl mx-auto px-6 py-12">
    <div className="text-center mb-10">
      <p className="font-body text-xs tracking-[0.3em] uppercase text-sand mb-2">REAL RESULTS</p>
      <h2 className="font-display text-3xl md:text-4xl">What Our Customers Are Saying</h2>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {testimonials.map((t, i) => (
        <VideoCard key={i} src={t.src} name={t.name} />
      ))}
    </div>
  </section>
);

export default VideoTestimonials;
