import * as S from "./Footer.styles";
export default function LayoutFooter() {
  return (
    <S.FooterWrapper>
      <S.FooterSection>
        <S.FooterTopDiv>
          <S.FooterLogo>KEYSTOM</S.FooterLogo>
        </S.FooterTopDiv>
        <S.FooterInner>
          <S.FooterMidWrapper>
            <S.FooterMidDiv>
              <S.FooterMidTitle>TEL</S.FooterMidTitle>
              <S.FooterMidContent>070-456-7890</S.FooterMidContent>
            </S.FooterMidDiv>

            <S.FooterMidDiv>
              <S.FooterMidTitle>Email</S.FooterMidTitle>
              <S.FooterMidContent>keystom@gmail.com</S.FooterMidContent>
            </S.FooterMidDiv>

            <S.FooterMidDiv>
              <S.FooterMidTitle>Location</S.FooterMidTitle>
              <S.FooterMidContent>Seoul, Gurogu, 140-1s</S.FooterMidContent>
            </S.FooterMidDiv>
          </S.FooterMidWrapper>
          <S.FooterBottomDiv>
            <S.FooterBottomSpan>SiteMap</S.FooterBottomSpan>
            <S.FooterBottomSpan>Privacy Policy</S.FooterBottomSpan>
            <S.FooterBottomSpan>Cookie Policy</S.FooterBottomSpan>
          </S.FooterBottomDiv>
          <S.FooterCopyRight>
            Copyright ©2022 F12 Developers Inc. All rights reserved.
          </S.FooterCopyRight>
        </S.FooterInner>
      </S.FooterSection>
    </S.FooterWrapper>
  );
}
