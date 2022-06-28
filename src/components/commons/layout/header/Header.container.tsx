import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../store";
import * as yup from "yup";
import { LOGIN } from "../../../units/login/Login.queries";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Modal } from "antd";
import LayoutHeaderPresenter from "./Header.presenter";

export const LOG_OUT = gql`
  mutation logout {
    logout
  }
`;

const schema = yup.object({
  email: yup.string().required("아이디를 입력해주세요."),

  password: yup.string().required("비밀번호는 필수 입력 사항입니다."),
});

export default function LayoutHeader() {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [nowLogin] = useRecoilState(accessTokenState);
  const [logout] = useMutation(LOG_OUT);

  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [login] = useMutation(LOGIN);

  const router = useRouter();

  const { register, formState, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickLogin = async (data: any) => {
    try {
      const result = await login({
        variables: {
          ...data,
        },
      });
      const accessToken = result.data?.login;
      setAccessToken(accessToken);

      Modal.success({ content: "로그인 성공하였습니다." });
      location.reload();
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  const handleOK = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const moveToHome = () => {
    router.push("/");
  };

  const moveToStore = () => {
    router.push("/store");
    setIsOpenMenu(false);
  };

  const moveToMyPage = () => {
    router.push("/mypage");
    setIsOpenMenu(false);
  };

  const moveToLogin = () => {
    setIsModalOpen(true);
  };

  const moveToEventPage = () => {
    router.push("/event");
    setIsOpenMenu(false);
  };

  const onClickLogout = async () => {
    try {
      await logout({});

      location.reload();
    } catch (error) {
      if (error instanceof Error) {
        Modal.error({ content: error.message });
      }
    }
  };

  const moveToSignup = () => {
    router.push("/signup");
    setIsModalOpen(false);
  };
  const menuRef = useRef<HTMLDivElement>(null);

  const onClickHamMenu = () => {
    if (menuRef.current?.className.split(" ").includes("openMenu")) {
      menuRef.current.style.opacity = isOpenMenu ? "1" : "0";
      menuRef.current.style.transform = `translateX(-${isOpenMenu ? 0 : 1}00%)`;
    }
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <LayoutHeaderPresenter
      nowLogin={nowLogin}
      register={register}
      formState={formState}
      handleSubmit={handleSubmit}
      onClickLogin={onClickLogin}
      isModalOpen={isModalOpen}
      handleOK={handleOK}
      handleCancel={handleCancel}
      moveToHome={moveToHome}
      moveToStore={moveToStore}
      moveToMyPage={moveToMyPage}
      moveToLogin={moveToLogin}
      moveToEventPage={moveToEventPage}
      onClickLogout={onClickLogout}
      moveToSignup={moveToSignup}
      onClickHamMenu={onClickHamMenu}
      isOpenMenu={isOpenMenu}
      menuRef={menuRef}
    />
  );
}
