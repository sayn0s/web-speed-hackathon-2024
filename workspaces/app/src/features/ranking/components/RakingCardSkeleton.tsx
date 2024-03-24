import styled from 'styled-components';

import { Box } from '../../../foundation/components/Box';
import { Flex } from '../../../foundation/components/Flex';
import { Color, Radius, Space } from '../../../foundation/styles/variables';

const Wrapper = styled.li`
  width: 100%;
  padding: ${Space * 1.5}px;
`;

const ImgWrapper = styled.div`
  width: 96px;
  height: 96px;
  background-color: ${Color.MONO_50};
  border-radius: ${Radius.SMALL};
`;

const TextSkeleton = styled.div`
  height: 16px;
  background-color: ${Color.MONO_50};
  border-radius: ${Radius.SMALL};
  width: 100%;
`;

export const RankingCardSkeleton: React.FC = () => {
  return (
    <Wrapper>
      <Flex align="flex-start" gap={Space * 2.5} justify="flex-start">
        <ImgWrapper />
        <Box width="100%">
          <Flex align="flex-start" direction="column" gap={Space * 1} justify="flex-start">
            <TextSkeleton style={{ width: '70%' }} />
            <TextSkeleton style={{ width: '90%' }} />
          </Flex>
        </Box>
      </Flex>
    </Wrapper>
  );
};
