"use client";

interface VideoCardProps {
  videoUrl: string;
  description: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ videoUrl, description }) => {
  return (
    <div className="w-full py-5 bg-gray-50">
        <div className="max-w-lg mx-10">
            <div className="bg-white shadow-lg overflow-hidden w-full">
            <video
                src={videoUrl}
                autoPlay
                muted
                loop
                playsInline
                controls
                preload="metadata"
                className="w-full h-[450px] object-cover"
            />
            <div className="bg-cyan-100 p-6 text-base leading-relaxed">
                <p className="text-gray-800 whitespace-pre-line font-semibold">
                {description}
                </p>
            </div>
            </div>
        </div>
    </div>
  );
};

export default VideoCard;
