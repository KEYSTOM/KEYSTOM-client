import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  color: #f1f1f1;
  padding: 25px 20%;

  border-top: 0.5px solid #999;
  border-bottom: 0.5px solid #999;

  @media (min-width: 768px) and (max-width: 991px) {
    padding: 20px 10%;
  }

  @media (max-width: 767px) {
    padding: 20px 5%;
  }
`;

const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const Title = styled.div`
  color: #999;
  padding-bottom: 10px;

  @media (max-width: 767px) {
    margin-right: 20px;
    font-size: 8px;
  }
`;

const AdminMenu = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  font-size: 18px;
  margin-right: 10px;

  @media (min-width: 768px) and (max-width: 991px) {
    font-size: 16px;
  }

  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

const AdminSubMenu = styled.div`
  font-size: 16px;
  padding-top: 20px;

  @media (min-width: 768px) and (max-width: 991px) {
    font-size: 14px;
  }

  @media (max-width: 767px) {
    font-size: 12px;
  }

  cursor: pointer;
  :hover {
    color: #b150f2;
  }

  transition: 400ms;
  border-bottom: 2px solid transparent;

  &::after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background: #b150f2;
    transition: width 0.3s;
  }

  &:hover::after {
    width: 40%;
    transition: width 0.3s;
  }
`;

export default function LayoutAdminSideBar() {
  const router = useRouter();

  const moveToProductList = () => {
    router.push("/admin/product");
  };

  const moveToWriteProduct = () => {
    router.push("/admin/product/write");
  };

  const moveToUserList = () => {
    router.push("/admin/user");
  };

  return (
    <>
      <Wrapper>
        <Title>ADMIN MENU</Title>

        <Section>
          <AdminMenu>
            Product
            <AdminSubMenu onClick={moveToWriteProduct}>
              - new Product
            </AdminSubMenu>
            <AdminSubMenu onClick={moveToProductList}>
              - Product List
            </AdminSubMenu>
          </AdminMenu>

          <AdminMenu>
            User
            <AdminSubMenu onClick={moveToUserList}>- User List</AdminSubMenu>
          </AdminMenu>
        </Section>
      </Wrapper>
    </>
  );
}
