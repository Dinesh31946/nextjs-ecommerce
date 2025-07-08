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
    <div className="py-10 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10">Benefits</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40">
        {videoCards.map((card) => (
          <div
            key={card._id}
            className="bg-[#A7F3F0] rounded-md shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 w-full max-w-[400px] mx-auto"
          >
            <video
              src={card.videoUrl}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-[300px] object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">{card.title}</h3>
              <p className="text-sm text-gray-800 whitespace-pre-line">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
