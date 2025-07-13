'use client';

import { useEffect } from 'react';
import { useTeamStore } from '@/stores/teamStore';
import TeamCard from './TeamCard';
import { RandomUser } from '@/types/randomUser';

export default function TeamsSection() {
  const {
    members,
    setMembers,
    loading,
    setLoading,
    error,
    setError,
  } = useTeamStore();

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        setLoading(true);
        const res = await fetch('https://randomuser.me/api/?results=6');
        const data = await res.json();

        const parsed = data.results.map((user: RandomUser, index: number) => ({
          id: user.login.uuid,
          name: `${user.name.first} ${user.name.last}`,
          role: ['Photographer', 'Editor', 'Manager'][index % 3],
          bio: 'Passionate and professional team member with years of experience.',
          image: user.picture.large,
        }));

        setMembers(parsed);
        setError(null);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Failed to fetch team data.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchTeam();
  }, [setMembers, setLoading, setError]);

  return (
    <section className="bg-zinc-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Meet Our Team</h2>

        {/* Loading and Error Message */}
        {loading && (
          <p className="text-gray-400 mb-6 animate-pulse">Loading team...</p>
        )}
        {error && (
          <p className="text-red-500 mb-6">{error}</p>
        )}

        {/* Team Cards */}
        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {members.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}