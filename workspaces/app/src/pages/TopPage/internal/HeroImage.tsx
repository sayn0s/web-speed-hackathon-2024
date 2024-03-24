import styled from 'styled-components';

const _Image = styled.img`
  aspect-ratio: 16 / 9;
  width: 100%;
`;

export const HeroImage: React.FC = () => {
  return <_Image alt="Cyber TOON" loading="eager" src="/assets/hero.webp" />;
};
