export const data: { [key: string]: string } = {
  project1: `## 모두의 농구장 (Next 버젼)
> React로 베포된 모두의 농구장을 혼자서 MSW로 연결하여 Next로 리펙토링


![readme.png](https://i.ibb.co/Df9ZVy5/readme.png)
- 베포 URL: http://43.201.82.253:3000/

### 프로젝트 소개

- 모두의 농구장은 지도 상에서 잘 표시되지 않는 농구장을 공유하고, 찾는 서비스입니다.
- 자신이 원하는 위치의 농구장을 등록, 수정이 가능합니다.
- 현재 위치를 기반으로 검색가능하고 원하는 지역을 기반으로도 검색 가능합니다.

### 개발  환경

- Front: Next.js (14.x), vanilla extract, zustand, react-query, MSW (Back 대신 사용)
- 배포: AWS Lightsail
- 디자인: https://modubasketball.com/ (서비스 중인 사이트 참고)
\`\`\`bash
next: npm run dev
msw: npm run mock
\`\`\`

### 프로젝트 구조

> App Router

\`\`\`textmate
root
├── public
│   ├── mockServiceWorker.js
│   └── font, img, svg ...
├── src
│   ├── app
│   │   ├── (beforeLogin)
│   │   │   ├── @modal
│   │   │   │   ├── (.)feedback
│   │   │   │   ├── (.)map
│   │   │   │   │   ├── add
│   │   │   │   │   │   └── _lib
│   │   │   │   │   └── detail
│   │   │   │   │       └── [id]
│   │   │   │   │           └── update
│   │   │   │   └── (.)success
│   │   │   │       ├── add
│   │   │   │       ├── feedback
│   │   │   │       └── update
│   │   │   ├── _component
│   │   │   ├── _lib
│   │   │   ├── feedback
│   │   │   ├── map
│   │   │   │   ├── @message
│   │   │   │   │   └── (.)mode
│   │   │   │   │        └── _component
│   │   │   │   ├── _lib
│   │   │   │   ├── add
│   │   │   │   ├── detail
│   │   │   │   │   └── [id]
│   │   │   │   │       └── update
│   │   │   │   ├── mode
│   │   │   │   └── view
│   │   │   │       └── _component
│   │   │   └── success
│   │   │       └── feedback
│   │   ├── _component
│   │   ├── model
│   │   └── store
│   └── mocks
└── next.config.js, .env, .prettierrcs.js, eslintrc.json ...
\`\`\` 

### 채택한 개발 및 신경 쓴 부분

#### Next.js

- Next는 14버젼을 활용하였고 App Router를 기반으로 폴더를 구성하였습니다.
- Next 가이드문서에서 소개되고 있는 Router들을 최대한 활용하면서 프로젝트를 구성하였습니다.
    > - **Route Groups**을 활용해서 layout을 통일시켰습니다.
    > - [id]는 **Dynamic Routes**를 활용해서 동적으로 변화하는 id 값을 대처하였습니다.
    > - @modal, @message에 **Parallel Routes**를 활용하여서 동시에 출력되는 컴포넌트 모달, 메시지를 대처하였습니다.
    > - (.)*는 **Interceptiong Routes**를 활용하여서 Parallel Routes시 매칭되는 폴더구조를 다 구성할 필요가 없이 활용할 수 있도록 사용했습니다.
- 클라이언트 컴포넌트와 서버 컴포넌트의 구분을 명확히 하려고 노력했습니다.
    > - 서버 컴포넌트에 대해서는 캐싱이 되기 때문에 page 파일에 대해서는 서버 컴포넌트로 구성을 하였고, 서버 컴포넌트에서 활용되는 action에 대해서 컴포넌트 분리하여 클라이언트 컴포넌트로 활용하였습니다.
- Loading에 대해서는 Streaming을 활용해서 구성하였습니다.
    > - Streaming은 사용자 경험을 좀 더 좋게 구성을 하기 때문에 loading 파일로 통일 시키는 대신 API을 불러오는 경우 해당하는 컴포넌트에만 Suspense을 사용하여서 구성하였습니다.
- 최대한 서버 액션을 활용하였습니다.
    > - https://github.com/byoungyoon/modu-next/blob/master/src/app/(beforeLogin)/%40modal/(.)map/detail/%5Bid%5D/update/_lib/updateCourt.ts
    > - use server을 활용하여서 사용하였고, 사용은 React 18에서 부터 제공되는 useFormState, useFormStatus을 활용했습니다.
    > - https://github.com/byoungyoon/modu-next/blob/master/src/app/(beforeLogin)/_component/FormStateModal.tsx
- 폴더 구조에 대해서는 공통적으로 사용하는 컴포넌트에 대해서 _component로 해당하는 디렉토리에 배치하였고, 유틸적인것은 _lib으로 구성하였습니다.

#### Vanilla Extract

- 후보 군이 styled-component, tailwindcss, vanilla extract 이 있었는데, 해당하는 프로젝트에서는 vanilla extract을 사용했습니다.
  > - styled-component는 서버 컴포넌트에 사용할 수 없다는 치명적인 단점이 존재하여서 사용하지 않았습니다,
  > - tailwindcss는 React버젼에서는 사용했으나 너무 코드가 정돈되지 않는 느낌을 받아서 사용하지 않았습니다.
- globalTheme을 이용해서 최대한 공통적인 css를 사용해서 사욜할 컴포넌트의 양을 줄였습니다.
- 배열로 css를 사용할 수 있는 점을 이용해 text, button 등을 사용하였고, 반응형에 대해서도 사용하였습니다.

#### zustand

- zustand만큼 가볍게 사용할 수 있는 상태 라이브러리가 없는거 같아서 사용하였습니다.

#### react-query

- 리펙토링 전 코드에서는 useEffect에 fetch를 사용하였지만, React 18에서 이것이 치명적인 버그가 있기 때문에 react-query를 사용하게 되었습니다.
- useQuery, useMutation 등의 react-query에서 제공되는 훅을 사용하였습니다.

### 후기

전 코드에 대해서 리펙토링을 하게 된 이유는 총 3가지였습니다. 

- 전에 코딩할때에는 Modal에 대한 처리를 라우팅으로 한 것이 아니라 라이브러리를 이용해 로직상으로 구현을 했다.
    >  뒤로가기, 새로고침 등 기능적으로는 문제가 없지만 사용자 입장에서는 너무 만족스럽지 않은 결과가 나왔습니다. 로직으로서 Modal을 구현하니 Modal을 열 때 히스토리를 저장하지만 그 히스토리를 다시 삭제할 방법은 없었기 때문에 뒤로가기에 대한 액션은 완벽할 수가 없었고 이 부분이 아쉬웠습니다. Next,js 에서는 이것이 쉽게 가능하다. 라우팅으로서 분리시켜두면 내가 다른것을 할 필요없이 라우팅이 변경되기 때문에 액션이 깔끔했고 새로고침에 대해서도 쉽게 컨트롤이 가능했습니다.
- Map 관련 코딩에서 useEffect를 너무 많이 쓰다보니 코드를 읽을 때 너무 불편했었다. 
    > 이 부분을 서브 컴포넌트로서 분리하였고 최대한 props를 줄이는 방향으로 새롭게 코딩을 하였습니다. 초기 props에는 add mode가 되었을 때부터 시작해서 error 표시가 되는 것들까지 거의 다 props로 넘기고 그것을 컨트롤 하였다. 그러다보니 나중에 어떠한 기능을 수정해야 할 때 바꿔야 할 것이 너무도 많았습니다. 그렇기 때문에 이번 리펙토링에서는 add mode나 새로운 ui가 출력되어야 할 때는 라우팅을 변경시키고 나머지는 최대한 zustand로 처리해버렸습니다. 그렇게 되니 코드자체로도 엄청 깔끔해지고 구조적으로도 생각할 부분이 적어져 훨씬 깔끔하고 성능적으로도 향상되었습니다.
- useEffect로 data를 연결해 가져오는 것을 수정하였다. 
    > react 17버젼에서는 이것이 크게 문제가 되지 않았지만 18버젼부터 useEffect가 살짝 수정이 되었습니다. 그렇게 되면서 useEffect에 fetch를 쓸 경우 2번 호출되는 문제가 발생하였습니다.

위의 3가지를 다 해결하고 완성시키니 이런 리펙토링의 코딩이 너무 재밌었습니다. 나에게 미션을 주고 그것을 해결해가는 느낌이었기 때문입니다.`,
  project2: `## 나만의 포토폴리오
> Next로 제작한 봄의 테마를 가진 나만의 포토폴리오


![readme.png](https://i.ibb.co/HPjHMJd/readme.png)
- 베포 URL: https://sss-portfolio.vercel.app/

### 프로젝트 소개

- 나만의 포토폴리오를 제작을 위해 Next를 사용하여 제작하였습니다.
- 봄의 테마에 맞게 배경으로는 벚꽃이 내리고 나무가 물든 header를 제작하였습니다.
- 나무의 색깔과 리셋을 할 수 있으며, Skills, Archiving, Projects, Career의 section을 가지고 있습니다.
- Projects의 section에서는 Readme와 사용한 스킬의 경험이 적힌 Skill이 있습니다.

### 개발  환경

- Front: Next.js (14.x), css module
- 배포: vercel
\`\`\`bash
next: npm run dev
\`\`\`

### 프로젝트 구조

> App Router

\`\`\`textmate
root
├── public
│   └── font, img, svg ...
├── app
│   ├── (sakura)
│   │   ├── @modal
│   │   │   └── (.)i
│   │   │       └── [project]
│   │   │           ├── readme
│   │   │           └── skill
│   │   ├── _component
│   │   └── i
│   │       ├── readme
│   │       └── skill
│   └── _data
└── next.config.js, .prettierrcs.js, eslintrc.json ...
\`\`\` 

### 채택한 개발 및 신경 쓴 부분

#### Next.js

- Next는 14버젼을 활용하였고 App Router를 기반으로 폴더를 구성하였습니다.
- Next 가이드문서에서 소개되고 있는 Router들을 최대한 활용하면서 프로젝트를 구성하였습니다.
  > - **Route Groups**을 활용해서 layout을 통일시켰습니다.
  > - [project]는 **Dynamic Routes**를 활용해서 동적으로 변화하는 project을 대처하였습니다.
  > - @modal **Parallel Routes**를 활용하여서 동시에 출력되는 컴포넌트 모달, 메시지를 대처하였습니다.
  > - (.)i는 **Interceptiong Routes**를 활용하여서 Parallel Routes시 매칭되는 폴더구조를 다 구성할 필요가 없이 활용할 수 있도록 사용했습니다.
- 클라이언트 컴포넌트와 서버 컴포넌트의 구분을 명확히 하려고 노력했습니다.
  > - 서버 컴포넌트에 대해서는 캐싱이 되기 때문에 page 파일에 대해서는 서버 컴포넌트로 구성을 하였고, 서버 컴포넌트에서 활용되는 action에 대해서 컴포넌트 분리하여 클라이언트 컴포넌트로 활용하였습니다.
- 폴더 구조에 대해서는 공통적으로 사용하는 컴포넌트에 대해서 _component로 해당하는 디렉토리에 배치하였고, json 데이터는 _data에 배치하였습니다.

#### css module

- 간단하고 많은 컴포넌트들이 사용되지 않는 프로젝트로 판단하여 css module을 사용하였습니다.
- globals.css에 var을 사용하여서 테마를 통일하려고 노력했습니다.
- 사용자 경험을 위해 애니메이션을 부드럽게 하고 UI를 깔끔하게 하려고 노력했습니다.

### 후기

나만의 포토폴리오를 완성하고 나서 든 생각은 이번에 만든것이 봄 테마이기 때문에 여름, 가을, 겨울 테마도 이어서 만들고 싶다라는 생각을 가지게 되었습니다. 그렇기 때문에 route group을 이용하여서 전체적인 route를 구분시켜 두었습니다.
또한 완성된 포토폴리오를 지속적으로 관리하여서 나에게 최대한의 피드백을 계속적으로 줄 것 입니다.`,
  project3: `## 모두의 농구장

모두의 농구장에서 내 주변, 우리 동네의 농구장을 발견해보세요.

### Getting Started

\`\`\`bash
backend : gradle build
          spring boot run
        
frontend : npm i
           npm start
\`\`\`

### Project (https://modubasketball.com/)

![modubasketball-1](https://github.com/NeewLife/modubasketball/assets/107593357/af370471-9138-4f20-844d-43ada13e7c84)
![modubasketball-2](https://github.com/NeewLife/modubasketball/assets/107593357/15017cd4-4f22-4c8e-b5d4-5a236ea5de9b)
![modubasketball-3](https://github.com/NeewLife/modubasketball/assets/107593357/41e983f9-2bc6-4ffa-b4a9-27fe12a64186)
![modubasketball-4](https://github.com/NeewLife/modubasketball/assets/107593357/83090886-fd18-4bab-9f51-b0642e34b595)
![modubasketball-5](https://github.com/NeewLife/modubasketball/assets/107593357/335b82a0-3e92-4e9a-82a4-451a3d8d2aea)
![modubasketball-6](https://github.com/NeewLife/modubasketball/assets/107593357/69621e6f-6fea-431e-9f37-9166ce58cd84)
![modubasketball-7](https://github.com/NeewLife/modubasketball/assets/107593357/2b3791cd-a525-42b5-abd8-af677942984a)

`,
  project4: `## 나만의 아이템
> React로 제작한 나만의 여러 실험물 및 아이템

### Installation
\`\`\`bash
npm i @byoungyoon/by-asset
\`\`\`

### Basic Usage

#### Tree
> target의 layout을 지정하고 원하는 color를 option으로 추가하고 Tree 컴포넌트를 사용하면 됩니다.

\`\`\`node
<div id="tree" style={{ width: '100%', height: '100dvh' }}>
    <Tree target="tree" color="#ffc5d0" />
</div>
\`\`\`

| option | default | explanation                        |
|--------|---------|------------------------------------|
| target | -       | 레이아웃의 기준이 되는 id를 연결해야 합니다.         |
| color  | -       | Tree의 베이스 컬러를 선택해야 합니다.            |
| reset   | 0       | reset의 숫자를 키우면 Tree가 초기화가 됩니다.     |
| isResize   | false   | canvas의 resize시의 액션을 선택할 수 있습니다.   |
| defaultDepth   | 11      | Tree의 branch 깊이를 선택할 수 있습니다.       |
| defaultCount   | 3       | 로드시 생성할 Tree 숫자를 선택할 수 있습니다.       |
| level   | 3       | Tree 나무 굵기나 길이를 level로 조절할 수 있습니다. |

#### Sakura
> 상위의 layout을 지정하고 Sakura 컴포넌트를 사용하면 됩니다.

\`\`\`node
<div style={{ width: '100%', height: '100dvh' }}>
    <Sakura />
</div>
\`\`\`

| option | default | explanation                           |
|--------|---------|---------------------------------------|
| children | -       | 하위 태그들을 추가할 수 있습니다.                   |
| total  | 200     | 보이는 벚꽃 수를 조절할 수 있습니다.                 |
| fallSpeed   | 1       | 벚꽃이 떨어지는 속도를 조절할 수 있습니다. (낮을수록 빨라집니다) |

#### Alert
> ref로 AnimateAlert로 연결한 후 사용하시면 됩니다.

\`\`\`node
const TestAnimate = () => {
    const ref = useRef<null | AddAlert>(null);

    const onClick = () => {
        const random = Number((Math.random() * 3).toFixed());
        let type: string = "";
        switch (random) {
            case 0:
                type = "success";
                break;
            case 1:
                type = "info";
                break;
            case 2:
                type = "warning";
                break;
            case 3:
                type = "error";
                break;
            default:
                break;
        }

        ref.current?.(type, loremIpsum());
    };

    return (
        <>
            <button id="button-alert" type="button" onClick={onClick}>
                open alert
            </button>
            <AnimateAlert
                children={(add: AddAlert) => {
                    ref.current = add;
                }}
            />
        </>
    );
};

\`\`\`

| option  | default | explanation                                |
|---------|---------|--------------------------------------------|
| type    | -       | success, info, warning, error에서 선택 가능 합니다. |
| message | -       | Alert에 보이는 텍스트를 지정 가능합니다.                  |
| timeout | -       | Alert이 사라지는 속도를 조절할 수 있습니다.                |


### Live Demo

> https://65b10084d2f5459f2a48261e-isxbzbxhwr.chromatic.com/`,
};
