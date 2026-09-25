import type { LocaleExtras } from '../locale-extras-types';

/**
 * Korean copy that brings the home and about pages to parity with the
 * English pages. Terminology follows the Shotera app's ko language pack.
 */
export const content: LocaleExtras = {
  footerScrolling: '스크롤 캡처',

  home: {
    heroAlt:
      '화면 위의 Shotera 도구: 캡처, 스크롤 캡처, 주석, 화면 녹화, AI 배경 제거, 오프라인 OCR, QR 코드·바코드 인식, 이미지 번역, 화면 고정',
    cards: [
      {
        title: '스크롤 캡처',
        description:
          '화면보다 긴 페이지도 한 장에 담습니다. 직접 스크롤하거나 Shotera가 자동으로 내려가면, 긴 이미지가 이어 붙는 과정을 지켜볼 수 있습니다.',
      },
      {
        title: 'QR 코드·바코드 인식',
        description:
          '스크린샷 속 코드를 읽어 링크, Wi-Fi, 연락처, 바코드 정보를 그대로 복사합니다. 모두 오프라인에서 처리됩니다.',
      },
      {
        title: '이미지 뷰어',
        description:
          '스크린샷이나 이미지 파일을 전용 뷰어 창에서 엽니다. 폴더의 이미지를 넘겨 보고 확대하며 필요한 부분을 다듬으세요. 다른 앱이 필요 없고, 주요 포맷은 바로 열립니다.',
      },
    ],
    scrolling: {
      tagline: '스크롤 캡처',
      title: '화면보다 긴 페이지도 한 장으로',
      text: '전체 페이지, 긴 대화, 문서 전체를 위에서 아래까지 한 장의 이미지로 담습니다.',
      alt: '긴 페이지를 하나의 이미지로 이어 붙이는 스크롤 캡처',
      items: [
        {
          title: '자동 스크롤 또는 직접 스크롤',
          description:
            'Shotera가 페이지를 내려가게 하거나 직접 스크롤하세요. 어느 쪽이든 진행되는 동안 모든 프레임이 캡처됩니다.',
        },
        {
          title: '이어 붙는 과정을 실시간으로',
          description:
            '선택 영역 옆의 실시간 미리보기가 프레임마다 커집니다. 페이지 전체가 담긴 순간 바로 멈출 수 있습니다.',
        },
        {
          title: '이음매 없는 결과',
          description:
            '인접한 프레임을 맞춰 자연스럽게 이어 붙이므로, 완성된 긴 이미지가 하나의 연속된 페이지처럼 읽힙니다.',
        },
        {
          title: '복사하거나 저장하기',
          description:
            '긴 이미지를 클립보드로 바로 보내거나 파일로 저장하세요. 문서, 채팅, 버그 리포트에 그대로 쓸 수 있습니다.',
        },
      ],
    },
    stats: [
      { title: '지원 언어', amount: '15' },
      { title: '평점', amount: '4.9 / 5' },
      { title: '오프라인 AI', amount: '100%' },
      { title: '단축키 실행', amount: '<0.1s' },
    ],
    workflow: {
      title: '화면에서 공유까지, 세 단계.',
      alt: 'Shotera 작업 흐름',
      steps: [
        {
          title: '단축키 누르기',
          description: '어디서든 Shotera를 불러내고 마우스를 올리면 원하는 창이나 요소가 이미 감지되어 있습니다.',
        },
        {
          title: '주석 달기, 추출하기, 편집하기',
          description: '중요한 부분을 표시하고 OCR, 배경 제거, 번역까지 같은 창에서 처리합니다.',
        },
        {
          title: '복사, 저장, 고정',
          description: '클립보드로 보내거나 로컬에 저장하고, 필요하면 화면 위에 고정해 두세요.',
        },
      ],
    },
  },

  about: {
    metaDescription:
      '빠르고 정확한 캡처 도구를 만드는 Shotera 팀의 이야기와 우리가 지켜 온 원칙을 소개합니다.',
    hero: {
      tagline: '회사 소개',
      title: '스크린샷을',
      accent: '없는 듯 자연스럽게',
      subtitle:
        'Shotera는 작은 불편에서 시작했습니다. 하루에도 수십 번 하는 캡처가 더 빠르고 매끄러워야 한다는 생각이었습니다. 우리는 누구보다 캡처 도구를 자주 쓰는 제품 기획자와 엔지니어로 이루어진 작은 팀이며, 그 집념을 모든 단축키와 선택, 프레임 하나하나에 담았습니다.',
      alt: 'Windows 바탕 화면 위의 Shotera 주석 도구',
    },
    stats: [
      { title: '지원 언어', amount: '15' },
      { title: '평점', amount: '4.9 / 5' },
      { title: '오프라인 AI', amount: '100%' },
      { title: '단축키 실행', amount: '<0.1s' },
    ],
    stand: {
      title: '우리가 지키는 원칙',
      subtitle: '도구가 좋을수록 존재감은 줄어듭니다. 우리의 모든 결정은 이 생각에서 시작합니다.',
      items: [
        {
          title: '속도가 먼저',
          description:
            '단축키 하나로 불러내고, 창과 요소를 자동으로 감지해 원하는 프레임을 정확히 잡습니다. 캡처까지 1초면 충분합니다.',
        },
        {
          title: '로컬 우선, 기본은 프라이버시',
          description:
            'OCR과 배경 제거 등은 가능한 한 기기에서 실행됩니다. 직접 허용하지 않는 한 스크린샷은 클라우드에 올라가지 않습니다.',
        },
        {
          title: '절제된 설계',
          description:
            '불필요한 기능도, 흐름을 끊는 방해도 없습니다. 자주 쓰는 기능은 한 번의 클릭으로, 고급 기능은 필요할 때만 나타납니다.',
        },
      ],
    },
    toolbox: {
      title: '',
      subtitle: '',
      alt: 'Shotera 도구 모음: 캡처, 스크롤 캡처, 화면 녹화, AI 배경 제거, 오프라인 OCR, 이미지 번역, 화면 고정과 이미지 뷰어',
      items: [
        {
          title: '캡처',
          description:
            '창과 요소를 자동으로 감지해 원하는 프레임을 바로 잡아 주므로 손으로 박스를 그릴 일이 거의 없습니다.',
        },
        {
          title: '스크롤 캡처',
          description:
            '페이지나 긴 대화를 스크롤하면 Shotera가 하나의 긴 이미지로 이어 붙입니다. 자동·수동 스크롤과 실시간 미리보기를 지원합니다.',
        },
        {
          title: '화면 녹화와 GIF',
          description:
            '화면을 녹화해 가벼운 GIF로 내보냅니다. 커서 강조와 클릭 표시 덕분에 데모가 또렷하게 전달됩니다.',
        },
        {
          title: 'AI 배경 제거',
          description:
            '클릭 한 번으로 피사체를 감지하고 배경을 지워 투명 PNG로 저장합니다. Photoshop이 필요 없습니다.',
        },
        {
          title: '오프라인 OCR',
          description:
            '어떤 스크린샷에서든 기기에서 바로 여러 언어의 텍스트를 추출합니다. 인터넷 없이 복사해 붙여 넣으세요.',
        },
        {
          title: '이미지 번역',
          description:
            '이미지 속 텍스트를 즉석에서 인식하고 번역합니다. 외국어 문서, 차트, 인터페이스도 바로 읽을 수 있습니다.',
        },
        {
          title: '화면 고정',
          description:
            '스크린샷을 항상 위에 띄워 참고하고, 복잡함 없이 나란히 배치할 수 있습니다.',
        },
        {
          title: '이미지 뷰어',
          description:
            '스크린샷이나 이미지 파일을 전용 뷰어 창에서 열어 폴더를 넘겨 보고, 확대하고, 필요한 부분을 다듬습니다.',
        },
      ],
    },
    values: {
      title: '우리의 가치',
      subtitle: '도구를 만드는 일과 쓰는 일은 우리에게 같은 일입니다. 우리는 매일 우리가 만든 도구로 일합니다.',
      items: [
        {
          title: '실제 업무를 위해 만듭니다',
          description:
            '모든 기능은 실제 불편에서 시작됩니다. 문서 작성, 디자인 시안 주석, 재현 과정 녹화, 외국어 자료 읽기까지. 우리가 먼저 쓰고 나서 여러분께 건넵니다.',
        },
        {
          title: '끊임없는 다듬기',
          description:
            '단축키의 손맛, 선택 영역의 모서리 스냅, 녹화 파일 크기와 화질의 균형까지. 디테일이 자연스러워질 때까지 계속 다듬습니다.',
        },
        {
          title: '사용자에 대한 존중',
          description:
            '끼워 넣는 프로그램도, 귀찮은 팝업도, 몰래 데이터를 올리는 일도 없습니다. 핵심 기능은 계속 무료입니다. 그것이 우리의 약속입니다.',
        },
      ],
    },
    history: {
      title: '여기까지 오기까지',
      subtitle: '우리를 위해 만든 도구에서, 매일 사람들이 쓰는 도구가 되기까지.',
      cta: 'Shotera 무료 다운로드',
      items: [
        {
          title: '우리 필요에서 시작했습니다',
          description: '빠르고 매끄러운 캡처 도구를 찾지 못해 직접 만들었습니다.',
        },
        {
          title: '사용자와 함께 성장했습니다',
          description:
            '스크롤 캡처, AI 배경 제거, 오프라인 OCR, 이미지 번역 등 많은 기능이 사용자 피드백에서 바로 나왔습니다.',
        },
        {
          title: '더 많은 사람에게 다가갑니다',
          description:
            '이제 Shotera는 15개 언어를 지원하며 계속 성장하고 있습니다. 목표는 늘 같습니다. 스크린샷을 간단하게 만드는 것.',
        },
      ],
    },
    contact: {
      title: '문의하기',
      tagline: '언제든 연락 주세요',
      items: [
        {
          title: '커뮤니티',
          description:
            'Shotera 커뮤니티에 참여해 새 버전과 팁을 받아 보고, 하고 싶은 말을 바로 전해 주세요.',
        },
        {
          title: '이메일 지원',
          description:
            '문제가 생겼거나 기능 아이디어가 있나요? mosuzo.studio@gmail.com으로 보내 주세요. 모든 메일에 답장합니다.',
        },
      ],
    },
  },
};
