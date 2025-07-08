"use client";

interface VideoCard {
  _id: string;
  title: string;
  description: string;
  videoUrl: string;
}

export default function VideoCardList({ videoCards }: { videoCards: VideoCard[] }) {
  if (!videoCards.length) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 bg-white">
      {videoCards.map((card) => (
        <div key={card._id} className="bg-cyan-100 rounded shadow-md overflow-hidden">
          <video
            src={card.videoUrl}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-auto object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">{card.title}</h3>
            <p>{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}