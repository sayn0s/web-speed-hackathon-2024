import React from 'react';
import { styled } from 'styled-components';

import { Flex } from '../../../foundation/components/Flex';
import { Color, Radius, Space } from '../../../foundation/styles/variables';

const Wrapper = styled.div`
  display: grid;
  gap: ${Space * 1}px;
  background-color: ${Color.MONO_A};
  padding: ${Space * 1.5}px;
  border-radius: ${Radius.SMALL};
  grid-template-columns: auto 1fr;
  flex-shrink: 0;
  border: 1px solid ${Color.MONO_30};
`;

const ImgWrapper = styled.div`
  width: 96px;
  height: 96px;
  background-color: ${Color.MONO_50};
  border-radius: ${Radius.SMALL};
`;

const ContentWrapper = styled.div`
  display: grid;
  gap: ${Space * 1}px;
  max-width: 200px;
  width: 100%;
`;

const TextSkeleton = styled.div`
  height: 16px;
  background-color: ${Color.MONO_50};
  border-radius: ${Radius.SMALL};
`;

export const FeatureCardSkeleton: React.FC = () => {
  return (
    <Wrapper>
      <ImgWrapper />
      <ContentWrapper>
        <TextSkeleton style={{ width: '70%' }} />
        <TextSkeleton style={{ width: '90%' }} />
        <Flex align="center" gap={Space * 1} justify="flex-end">
          <TextSkeleton style={{ width: '30%', height: '32px' }} />
        </Flex>
      </ContentWrapper>
    </Wrapper>
  );
};
