import * as S from "../../../units/login/Login.styles";
import * as Q from "./Header.styles";
import { Modal } from "antd";
import Link from "next/link";
import {
  CreditCardOutlined,
  LogoutOutlined,
  MenuOutlined,
  UserOutlined,
} from "@ant-design/icons";

export default function LayoutHeaderPresenter(props: any) {
  return (
    <>
      {props.isModalOpen ? (
        <Modal
          visible={true}
          centered
          onOk={props.handleOK}
          onCancel={props.handleCancel}
          okButtonProps={{ style: { display: "none" } }}
          cancelButtonProps={{ style: { display: "none" } }}
          footer={null}
          style={{
            borderRadius: "30px",
            overflow: "auto",
          }}
        >
          <form onSubmit={props.handleSubmit(props.onClickLogin)}>
            <S.Wrapper>
              <S.LoginDiv>
                <S.CancelWrapper></S.CancelWrapper>

                <S.LogoDiv>
                  <S.Logo src="/images/header/keystom.png" />
                </S.LogoDiv>

                <S.LoginInput
                  type="text"
                  placeholder="아이디"
                  {...props.register("email")}
                />
                <S.LoginError>
                  {props.formState.errors.email?.message}
                </S.LoginError>
                <S.LoginInput
                  type="password"
                  placeholder="비밀번호"
                  {...props.register("password")}
                />
                <S.LoginError>
                  {props.formState.errors.password?.message}
                </S.LoginError>
              </S.LoginDiv>

              <S.BtnWrapper>
                <S.LoginBtn>Login</S.LoginBtn>
                <S.SocialLogin>
                  <Link href="https://delifarm.site/login/kakao">
                    <a target="_blank" rel="noopener noreferrer">
                      <S.SocialLoginImg src="/images/login/social-login-kakao.png" />
                    </a>
                  </Link>

                  <Link href="https://delifarm.site/login/naver">
                    <a target="_blank" rel="noopener noreferrer">
                      <S.SocialLoginImg src="/images/login/social-login-naver.png" />
                    </a>
                  </Link>

                  <Link href="https://delifarm.site/login/google">
                    <a target="_blank" rel="noopener noreferrer">
                      <S.SocialLoginImg src="/images/login/social-login-google.png" />
                    </a>
                  </Link>
                </S.SocialLogin>
              </S.BtnWrapper>

              <S.StringWrapper>
                <S.StringDiv>Forgot Password?</S.StringDiv>
                <S.FindPassBtn>Find Password</S.FindPassBtn>
              </S.StringWrapper>

              <S.StringWrapper>
                <S.StringDiv>Not a member yet?</S.StringDiv>
                <S.SignUpBtn onClick={props.moveToSignup} type="button">
                  Sign Up
                </S.SignUpBtn>
              </S.StringWrapper>
            </S.Wrapper>
          </form>
        </Modal>
      ) : (
        <div></div>
      )}
      <Q.Wrapper>
        <Q.LogoDiv>
          <Q.Logo onClick={props.moveToHome}>KEYSTOM</Q.Logo>
        </Q.LogoDiv>
        <Q.MenuWrapper>
          <Q.MenuDiv>
            <Q.Menu onClick={props.moveToStore}>Store</Q.Menu>
            <Q.Menu onClick={props.moveToEventPage}>Event</Q.Menu>
            <Q.Menu onClick={props.moveToMyPage}>My Page</Q.Menu>
          </Q.MenuDiv>

          {/* {props.isOpenMenu && ( */}
          <Q.HamMenuDiv
            ref={props.menuRef}
            className={props.isOpenMenu ? "openMenu" : "closeMenu"}
          >
            <Q.HamMenu onClick={props.moveToStore}>Store</Q.HamMenu>
            <Q.HamMenu onClick={props.moveToEventPage}>Event</Q.HamMenu>
            <Q.HamMenu onClick={props.moveToMyPage}>My Page</Q.HamMenu>
          </Q.HamMenuDiv>
          {/* )} */}

          <Q.MenuIconDiv>
            <Q.HamMenuIcon onClick={props.onClickHamMenu}>
              <MenuOutlined />
            </Q.HamMenuIcon>
            {props.nowLogin === undefined ? (
              <Q.IconWrapper>
                <UserOutlined onClick={props.moveToLogin} />
              </Q.IconWrapper>
            ) : (
              <Q.IconWrapper>
                <LogoutOutlined onClick={props.onClickLogout} />
              </Q.IconWrapper>
            )}

            <Q.IconWrapper>
              <CreditCardOutlined onClick={props.moveToMyPage} />
            </Q.IconWrapper>
          </Q.MenuIconDiv>
        </Q.MenuWrapper>
      </Q.Wrapper>
    </>
  );
}
