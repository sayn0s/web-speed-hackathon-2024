import styled from 'styled-components';

import { Flex } from '../../../foundation/components/Flex';
import { Color, Radius, Space } from '../../../foundation/styles/variables';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: ${Radius.SMALL};
  background-color: ${Color.MONO_A};
  max-width: 192px;
  border: 1px solid ${Color.MONO_30};
  padding: ${Space * 2}px;
`;

const ImgWrapper = styled.div`
  width: 192px;
  height: 128px;
  background-color: ${Color.MONO_50};
  border-radius: ${Radius.SMALL} ${Radius.SMALL} 0 0;
`;

const TextSkeleton = styled.div`
  height: 16px;
  background-color: ${Color.MONO_50};
  border-radius: ${Radius.SMALL};
  width: 100%;
`;

export const BookCardSkeleton: React.FC = () => {
  return (
    <Wrapper>
      <ImgWrapper />
      <Flex align="stretch" direction="column" flexGrow={1} gap={Space * 1} justify="space-between">
        <TextSkeleton style={{ width: '60%' }} />
        <TextSkeleton style={{ width: '80%' }} />
      </Flex>
    </Wrapper>
  );
};
