import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainWrapper = styled.div`
  width: 100%;
  position: relative;
  top: -80px;
`;

export const ImageWrapper = styled.div`
  width: 100%;
`;

export const MainImage = styled.div`
  width: 100%;
  height: 108rem;
  background-image: url("/images/main/main-banner1.png");
  background-position: center;
  background-size: cover;
`;

export const MainImage2 = styled.div`
  width: 100%;
  height: 108rem;
  background-image: url("/images/main/main-2.png");
  background-position: center;
  background-size: cover;
`;

export const MainImage3 = styled.div`
  width: 100%;
  height: 108rem;
  background-image: url("/images/main/main-6.png");
  background-position: center;
  background-size: cover;
`;

export const ContentsWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 32.5rem 34rem 36.1rem 34rem;

  display: flex;
  justify-content: space-between;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextWrapper2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 18.8rem;
`;

export const Text1 = styled.div`
  font-weight: 900;
  font-size: 4.8rem;

  margin-bottom: 2rem;
`;

export const Text2 = styled.div`
  font-weight: 400;
  font-size: 2rem;

  margin-bottom: 9rem;
`;

export const Text3 = styled.div`
  font-weight: 700;
  font-size: 2.4rem;

  margin-bottom: 3rem;
`;

export const UnderlinedNum = styled.span`
  text-decoration: underline;
`;

export const MoveButton = styled.button`
  width: 30rem;
  height: 8rem;
  background-color: #b150f2;
  border-radius: 10px;
  font-weight: 700;
  font-size: 2.4rem;
  border: none;
  margin-top: 13rem;
  :hover {
    border: 1px solid #f1f1f1;
  }
`;

export const Player = styled.div`
  width: 73.2rem;
  height: 40.7rem;

  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    #2c2c2c;
  box-shadow: 0px 0.4rem 0.4rem #1b1b1b;
`;

export const IframeVideo = styled.iframe`
  width: 100%;
  height: 100%;
  border: 1px solid #b150f2;
  border-radius: 10px;
`;

export const ReviewWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const Text = styled.div`
  width: 100%;
  font-weight: 700;
  font-size: 3.2rem;

  margin-bottom: 4.4rem;
`;

export const BestReviewWrapper = styled.div`
  width: 100%;
  padding: 10% 5%;
`;

export const BestProductWrapper = styled.div`
  /* width: 100%;
  display: flex;
  flex-direction: row;
  padding-top: 2rem;
  justify-content: space-between; */
`;

export const BestProductBox = styled.div`
  /* width: 100%;
  margin-right: 2%; */
`;

export const ReviewImage = styled.img<{ src: string }>`
  /* width: 40rem;
  height: 29.1rem;
  border-radius: 10px 10px 0 0;

  background-position: center;
  background-size: cover; */
`;

export const ReviewDownWrapper = styled.div`
  /* width: 40rem;
  height: 17.4rem;
  padding: 3rem 3rem;

  background-color: #2c2c2c;

  color: #000000;
  display: flex;
  flex-direction: column;

  border-radius: 0px 0px 10px 10px; */
`;

export const ReviewEmoji = styled.div`
  /* width: 2.4rem;
  height: 2.4rem;

  background-image: url("/images/review_like_white.png");
  background-position: center;
  background-size: cover;

  margin-right: 1rem; */
`;

export const ReviewScore = styled.div`
  /* color: #ffffff;
  font-weight: 400;
  font-size: 18px; */
`;

export const ProductsPrice = styled.div`
  /* color: #ffffff;
  font-weight: 700;
  font-size: 32px; */
`;

export const ReviewTitleWrapper = styled.div`
  /* display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  color: white; */
`;

export const ReviewTitle = styled.div`
  /* font-weight: 700;
  font-size: 24px; */
`;

export const ReviewLikeWrapper = styled.div`
  /* display: flex;
  flex-direction: row;
  align-items: center;

  cursor: pointer; */
`;

export const ReviewContents = styled.div`
  /* font-weight: 400;
  font-size: 18px;

  color: #b1b1b1;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; */
`;

export const PreloaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin: 0px;
  padding: 0;
  box-sizing: border-box;
  position: relative;
  z-index: 9999;
`;

export const PreloaderDiv = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
  overflow-y: hidden;
  overflow-x: hidden;
`;

export const PreloaderChild = styled.div`
  width: 100%;
  min-height: 100%;
  position: relative;
  z-index: 999;
  background: url("/images/Bg_img.png") no-repeat center center fixed;
`;

export const HideTitle = styled.div`
  width: 74.4rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30.5rem;

  font-weight: 700;
  font-size: 48px;
  line-height: 64px;
  color: #ffffff;
`;

export const HideTopContents = styled.div`
  width: 42rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 7.3rem;

  font-size: 24px;
  line-height: 28px;
  color: #f1f1f1;
`;

export const HideBottomContents = styled.div`
  width: 42rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0.5px;

  font-size: 24px;
  line-height: 28px;
  color: #f1f1f1;
`;

export const HideButton = styled.button`
  width: 24.2rem;
  height: 8.4rem;
  background: #b150f2;
  border-radius: 20px;
  margin-left: 83.9rem;
  margin-top: 17.6rem;
  border: none;

  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
`;
