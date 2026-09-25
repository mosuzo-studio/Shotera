import type { DownloadFormatsContent } from '../download-formats-types';

export const koFormats: DownloadFormatsContent = {
  tagline: '다운로드 형식',
  title: '어떤 파일을 다운로드해야 할까요?',
  subtitle: '네 가지 형식 모두 같은 Shotera이며, 설치 및 업데이트 방식만 다릅니다.',
  headers: ['형식', '설치 및 업데이트', '추천 대상'],
  recommendLabel: '추천',
  rows: [
    { format: '설치 버전(.exe)', install: '더블 클릭으로 설치, 앱에서 자동 업데이트', bestFor: '대부분의 사용자' },
    { format: '포터블 버전(.7z)', install: '압축을 풀면 바로 사용, 앱에서 자동 업데이트', bestFor: 'USB 메모리에 담아 다니고 싶은 분' },
    { format: 'MSI 설치 프로그램(.msi)', install: '더블 클릭 또는 무인 설치, 앱에서 자동 업데이트', bestFor: '기업 일괄 배포' },
    { format: 'Microsoft Store 버전', install: '스토어에서 설치 및 업데이트', bestFor: '관리는 시스템에 맡기고 싶은 분' },
  ],
};
