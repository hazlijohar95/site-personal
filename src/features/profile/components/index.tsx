
import React from 'react';
import SectionContainer from '@/components/common/SectionContainer';
import SectionHeading from '@/components/common/SectionHeading';
import ProfileHeader from './ProfileHeader';
import ProfileContent from './ProfileContent';
import SocialLinks from '@/components/SocialLinks';

interface ProfileSectionProps {
  ref?: React.RefObject<HTMLDivElement>;
}

const ProfileSection = React.forwardRef<HTMLDivElement, ProfileSectionProps>(
  (props, ref) => {
    return (
      <SectionContainer id="profile" ref={ref}>
        <SectionHeading>About</SectionHeading>
        
        <div className="mb-6">
          <ProfileHeader />
          
          <div className="mb-4">
            <SocialLinks />
          </div>
        </div>
        
        <ProfileContent />
      </SectionContainer>
    );
  }
);

ProfileSection.displayName = "ProfileSection";

export default ProfileSection;
