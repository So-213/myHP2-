import { SocialIcons } from '@/components/social-icons';

export default function SnsContent() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">My social media accounts.</h2>
      <div className="mt-8">
        <SocialIcons />
      </div>
    </div>
  );
}
