import TeamCard from "@/app/components/TeamCard";
import { TeamMember } from "@/app/types/page";

const AboutPage = async() => {
    const res =await fetch("http://localhost:4000/team",{cache:'force-cache'});
  const teams: TeamMember[] =await res.json();
    return (
        <div className=" my-16">
        <h2 className="text-3xl text-center"> About Us</h2>
        <div className="mt-10 mx-16 grid grid-cols-1 lg:grid-cols-3 gap-5">
    {
      teams.map((team)=><TeamCard team={team} key={team.id} />)
    }
  </div>
    </div>
    );
};

export default AboutPage;