const Footer = () => {
  return (
    <footer className="mt-40 max-w-full mx-auto h-[418px] border-t border-neutral-300">
      <div className="mx-auto px-6 mt-2 max-w-7xl xl:py-6 flex flex-row justify-between items-start ">
        <img
          src="https://techit.education/img/techit_by_likelion_logo.svg"
          alt="techit_logo"
          className="w-[133px]"
        />
        <div className="flex flex-row justify-between gap-28">
          <div>
            <h3 className="text-neutral-400 text-xs pb-3">모든 교육 경험</h3>
            <ul className="list-none text-sm leading-8 font-semibold mb-2">
              <li>KDT 테킷 스쿨</li>
              <li>온보딩 트랙</li>
              <li>스타트업 스테이션</li>
              <li>이벤트</li>
              <li>기업 해커톤</li>
            </ul>
          </div>
          <div>
            <h3 className="text-neutral-400 text-xs pb-3">회사 소개</h3>
            <ul className="list-none text-sm leading-8 font-semibold mb-2">
              <li className="flex items-center gap-">
                <span>LIKELION</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  ></path>
                </svg>
              </li>
              <li className="flex items-center gap-1">
                <span>채용</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  ></path>
                </svg>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl mx-4 py-3 xl:py-4 flex flex-col items-right border-t border-neutral-300">
        <div className="flex flex-row gap-3">
          <img
            src="https://techit.education/svg/icon_instagram.svg"
            alt="instagram"
          />
          <img
            src="https://techit.education/svg/icon_youtube.svg"
            alt="youtube"
          />
          <img
            src="https://techit.education/svg/icon_kakaoch.svg"
            alt="kakao"
          />
          <img
            src="https://techit.education/svg/icon_brunch.svg"
            alt="brunch"
          />
          <img
            src="https://techit.education/svg/icon_facebook.svg"
            alt="facebook"
          />
        </div>
        <div className="flex flex-row items-center space-x-2 mt-5 text-neutral-500 text-xs font-semibold">
          <div className="list-none cursor-pointer">이용약관</div>
          <div className="h-1 w-1 rounded-full bg-neutral-500"></div>
          <div className="list-none cursor-pointer">개인정보처리방침</div>
          <div className="h-1 w-1 rounded-full bg-neutral-500"></div>
          <div className="list-none cursor-pointer">환불규정</div>
        </div>
        <div className="flex flex-row items-center gap-2 mt-3 text-neutral-500 text-xs">
          <div className="list-none cursor-pointer">상호명: 멋쟁이사자처럼</div>
          <div className="text-neutral-600 text-[11px]">|</div>
          <div className="list-none cursor-pointer">대표: 이두희</div>
          <div className="text-neutral-600 text-[11px]">|</div>
          <div className="list-none cursor-pointer">contact@likelion.net</div>
          <div className="text-neutral-600 text-[11px]">|</div>
          <div className="list-none cursor-pointer">
            사업자 번호 : 264-88-01106
          </div>
          <div className="text-neutral-600 text-[11px]">|</div>
          <div className="list-none cursor-pointer">
            통신판매업 신고번호 : 2019-서울강남-00774
          </div>
        </div>
        <div className="flex flex-row items-center gap-2 mt-1 text-neutral-500 text-xs">
          <div className="list-none cursor-pointer">
            주소 : 서울 종로구 종로3길17, 광화문D타워 D1동 16층, 17층
          </div>
          <div className="list-none cursor-pointer">
            Copyright © 2022 멋쟁이사자처럼 All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
