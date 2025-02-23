export type SocialLinks = {
    linkedin?: string;
    twitter?: string;
    github?: string;
    dribbble?: string;
  };
  
  export type TeamMember = {
    id: number;
    name: string;
    role: string;
    bio: string;
    image: string;
    socials: SocialLinks;
  };
  
export  type BlogProps = {
    id: number;
    title: string;
    category: string;
    author: string;
    date: string;
    image: string;
    content: string;
    tags: string[];
  };