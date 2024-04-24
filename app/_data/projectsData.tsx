import NModu1 from '@/public/img/nModu1.png';
import NModu2 from '@/public/img/nModu2.png';
import NModu3 from '@/public/img/nModu3.png';
import Port1 from '@/public/img/port1.png';
import Port2 from '@/public/img/port2.png';
import Port3 from '@/public/img/port3.png';
import Item1 from '@/public/img/item1.png';
import Item2 from '@/public/img/item2.png';
import Item3 from '@/public/img/item3.png';
import Modu1 from '@/public/img/modu1.png';
import Modu2 from '@/public/img/modu2.png';
import Modu3 from '@/public/img/modu3.png';

export const data = [
  {
    key: 'project1',
    title: '모두의 농구장 (리펙토링)',
    subTitle: '개인 프로젝트',
    images: [NModu1, NModu2, NModu3],
    contents: [
      'React로 배포된 모두의 농구장을 혼자서 MSW로 연결하여 Next와 Vanilla Extract으로 리펙토링한 프로젝트입니다.',
      'Next로 리펙토링을 한 이유는 Route의 페이지 분리가 편리하고 App Router부터 편리한 기능들이 많아졌기 때문입니다.',
      '바뀐 로직으로는 Modal에 대해서 라우팅으로 구현하였고, React-Query를 도입하여 캐싱으로 데이터 재사용을 하였으며 Suspense를 통한 스트리밍을 구현하였습니다.',
    ],
    skills: ['Next.js', 'React-Query', 'MSW', 'Vanilla Extract', 'Zustand'],
    urls: [
      { key: 'GitHub', value: 'https://github.com/byoungyoon/modu-next' },
      { key: 'URL', value: 'http://43.201.82.253:3000' },
    ],
  },
  {
    key: 'project2',
    title: '나만의 포토폴리오',
    subTitle: '개인 프로젝트',
    images: [Port1, Port2, Port3],
    contents: [
      '나만의 포토폴리오를 만들고 싶어서 제작한 웹사이트입니다. 현재 보고 있는 웹사이트에 해당합니다. ',
      '길거리를 걷다가 벚꽃을 보고 내 웹페이지로 옮기고 싶다라는 생각으로 디자인을 하게되었습니다.',
      '개발은 사용자 경험을 가장 우선적으로 생각하여 애니메이션 효과를 부드럽고 자연스럽게 하도록 노력하였습니다.',
    ],
    skills: ['Next.js', 'css module'],
    urls: [
      { key: 'GitHub', value: 'https://github.com/byoungyoon/portfolio' },
      { key: 'URL', value: 'https://sss-portfolio.vercel.app' },
    ],
  },
  {
    key: 'project3',
    title: '모두의 농구장',
    subTitle: '팀 프로젝트 (4인)',
    images: [Modu1, Modu2, Modu3],
    contents: [
      '모두의 농구장은 지도 상에서 잘 표시되지 않는 농구장을 공유하고 찾는 서비스입니다.',
      '해당 프로젝트는 포텐데이라는 프로그램에 참가하여 4인 팀의 프론트엔드 개발로 참가하여 제작하였습니다.',
      '개발은 atomic 디자인 패턴을 중심으로 storybook을 이용하여 디자이너와 기획자에게 UI/UX를 지속적으로 제공하여 피드백을 받으면서 진행하였습니다.',
    ],
    skills: ['React.js', 'Webpack', 'Tailwindcss', 'Storybook', 'Zustand', 'Axios'],
    urls: [
      { key: 'GitHub', value: 'https://github.com/NeewLife/modubasketball' },
      { key: 'URL', value: 'https://modubasketball.com' },
    ],
  },
  {
    key: 'project4',
    title: '나만의 아이템',
    subTitle: '개인 작업물',
    images: [Item1, Item2, Item3],
    contents: [
      '평소 만들고 싶었던 애니메이션을 구현한 작업물입니다.',
      '현재는 alert, sakura, tree 3개가 만들어져 있으며 npm(@byoungyoon/by-asset)으로 배포가 되어있습니다.',
      'rollup을 이용하여 빌드를 하였고 storybook을 이용해 테스트를 진행하였습니다.',
    ],
    skills: ['React.js', 'Styled-Component', 'Rollup', 'Storybook'],
    urls: [
      { key: 'GitHub', value: 'https://github.com/byoungyoon/by-asset' },
      { key: 'URL', value: 'https://65b10084d2f5459f2a48261e-isxbzbxhwr.chromatic.com' },
    ],
  },
];
