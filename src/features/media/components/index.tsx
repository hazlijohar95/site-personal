
import React from 'react';
import SectionContainer from '@/components/common/SectionContainer';
import SectionHeading from '@/components/common/SectionHeading';
import MediaList from './MediaList';
import VideoFeature from './VideoFeature';
import { mediaFeatures } from '../data/mediaItems';

interface MediaSectionProps {
  ref?: React.RefObject<HTMLDivElement>;
}

const MediaSection = React.forwardRef<HTMLDivElement, MediaSectionProps>(
  (props, ref) => {
    return (
      <SectionContainer id="media" ref={ref}>
        <SectionHeading>Media</SectionHeading>
        
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="pg-subheading">Featured</h3>
            <MediaList items={mediaFeatures} />
          </div>
          
          <div>
            <h3 className="pg-subheading">Video</h3>
            <VideoFeature />
          </div>
        </div>
      </SectionContainer>
    );
  }
);

MediaSection.displayName = "MediaSection";

export default MediaSection;
