import React from 'react';
import styled from 'styled-components';

import { Box } from '../../../foundation/components/Box';
import { Flex } from '../../../foundation/components/Flex';
import { Spacer } from '../../../foundation/components/Spacer';
import { Text } from '../../../foundation/components/Text';
import { Color, Radius, Space, Typography } from '../../../foundation/styles/variables';

const SkeletonWrapper = styled.li`
  width: 100%;
  background-color: ${Color.MONO_20};
`;

const SkeletonImageWrapper = styled.div`
  width: 64px;
  height: 64px;
  background-color: ${Color.MONO_40};
  border-radius: ${Radius.SMALL};
`;

const SkeletonText = styled(Text)`
  background-color: ${Color.MONO_40};
  width: 60%;
  border-radius: ${Radius.SMALL};
`;

export const BookListItemSkeleton: React.FC = () => {
  return (
    <SkeletonWrapper>
      <Spacer height={Space * 1.5} />
      <Flex align="flex-start" gap={Space * 2.5} justify="flex-start">
        <SkeletonImageWrapper />
        <Box width="100%">
          <Flex align="flex-start" direction="column" gap={Space * 1} justify="flex-start">
            <SkeletonText color={Color.MONO_100} typography={Typography.NORMAL16} weight="bold">
              &nbsp;
            </SkeletonText>
            <SkeletonText as="p" color={Color.MONO_80} typography={Typography.NORMAL12}>
              &nbsp;
            </SkeletonText>
          </Flex>
        </Box>
      </Flex>
      <Spacer height={Space * 1.5} />
    </SkeletonWrapper>
  );
};
