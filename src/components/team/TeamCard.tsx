import Image from 'next/image';
import { motion } from 'framer-motion';
import { TeamMember } from '@/stores/teamStore';

type TeamCardProps = {
  member: TeamMember;
};

export default function TeamCard({ member }: TeamCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotate: -4 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="bg-white rounded-2xl shadow-lg p-6 text-center text-black hover:shadow-xl"
    >
      <div className="relative w-24 h-24 mx-auto mb-4">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover rounded-full"
        />
      </div>
      <h3 className="text-lg font-semibold">{member.name}</h3>
      <p className="text-teal-600 text-sm font-medium">{member.role}</p>
      <p className="text-gray-600 text-sm mt-2">{member.bio}</p>
    </motion.div>
  );
}
