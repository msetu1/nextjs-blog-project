import Image from "next/image";
import { TeamMember } from "../types/page";

// Define prop types
type TeamCardProps = {
  team: TeamMember;
};

const TeamCard: React.FC<TeamCardProps> = ({ team }) => {
  return (
    <div>
      <div className="bg-white rounded-lg shadow-lg p-6 text-center">
        <Image
          src={team.image}
          alt={team.name}
          width={100}
          height={100}
          className="rounded-full mx-auto mb-4"
        />
        <h3 className="text-xl font-semibold text-gray-800">{team.name}</h3>
        <p className="text-sm text-green-600 font-medium">{team.role}</p>
        <p className="text-gray-600 mt-2">{team.bio}</p>

        {/* Social Links */}
        <div className="flex justify-center space-x-4 mt-4">
          {Object.entries(team.socials).map(([platform, url]) =>
            url ? (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-green-600 transition"
              >
                {platform === "linkedin" && "🔗"}
                {platform === "twitter" && "🐦"}
                {platform === "github" && "💻"}
                {platform === "dribbble" && "🎨"}
              </a>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
