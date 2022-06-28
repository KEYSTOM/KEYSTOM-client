import styled from "@emotion/styled";

export const FooterWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #1b1b1b;
  padding: 80px 10%;
  font-size: 18px;
  line-height: 24px;
  color: #c4c4c4;
  border-top: 0.5px solid #666;

  @media (min-width: 768px) and (max-width: 991px) {
    padding: 45px 0;
    font-size: 14px;
  }

  @media (max-width: 767px) {
    padding: 30px;
    font-size: 12px;
  }
`;

export const FooterSection = styled.section`
  display: flex;
  flex-direction: column;
`;
export const FooterTopDiv = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 60px;

  @media (max-width: 767px) {
    padding-bottom: 20px;
  }
`;

export const FooterLogo = styled.div`
  width: 100%;
  font-family: "Orbitron-bold";
  font-weight: 700;
  font-size: 34px;
  line-height: 24px;

  @media (min-width: 768px) and (max-width: 991px) {
    font-size: 20px;
  }

  @media (max-width: 767px) {
    font-size: 18px;
  }
`;

export const FooterMidWrapper = styled.div`
  display: flex;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;
export const FooterInner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const FooterMidDiv = styled.div`
  display: flex;
  padding-right: 40px;
  padding-bottom: 33px;

  @media (min-width: 768px) and (max-width: 991px) {
    padding-bottom: 5px;
  }

  @media (max-width: 767px) {
    padding-bottom: 5px;
  }
`;
export const FooterBottomDiv = styled.div`
  display: flex;
  padding-bottom: 33px;

  @media (max-width: 767px) {
    padding-bottom: 0;
  }
`;

export const FooterBottomSpan = styled.span`
  font-size: 14px;
  padding-right: 40px;
  cursor: pointer;

  @media (max-width: 767px) {
    font-size: 8px;
  }
`;

export const FooterMidTitle = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  padding-right: 10px;

  @media (min-width: 768px) and (max-width: 991px) {
    font-size: 16px;
  }

  @media (min-width: 260px) and (max-width: 767px) {
    font-size: 10px;
  }
`;

export const FooterMidContent = styled.div`
  line-height: 24px;

  @media (min-width: 260px) and (max-width: 767px) {
    font-size: 10px;
  }
`;

export const FooterCopyRight = styled.span`
  font-size: 14px;
  color: #888;

  @media (max-width: 767px) {
    font-size: 8px;
  }
`;
