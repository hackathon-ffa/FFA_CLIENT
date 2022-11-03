import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import Modal from "./_elements/Modal";

const LeftNavBar = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const MENU_ITEM = [
    {
      filled: "images/filled_home_icon.svg",
      outline: "images/outline_home_icon.svg",
      text: "홈",
      url: "/home",
    },
    {
      filled: "images/filled_airplane_icon.svg",
      outline: "images/outline_airplane_icon.svg",
      text: "휴가",
      url: "/vacation",
    },
  ];
  const { pathname } = useLocation();

  const openModal = () => {
    setIsShowModal(true);
  };

  const closeModal = () => {
    setIsShowModal(false);
  };

  return (
    <Wrapper>
      <ProfileWrapper>
        <div />
        <p>박성현</p>
      </ProfileWrapper>
      <AttendanceBtn onClick={openModal}>출근하기</AttendanceBtn>
      <MenuList>
        {MENU_ITEM.map((menu) => (
          <MenuItem key={menu.text} to={menu.url}>
            <img src={menu.url === pathname ? menu.filled : menu.outline} />
            <p style={{ color: menu.url === pathname ? "#3c4651" : "#556372" }}>
              {menu.text}
            </p>
          </MenuItem>
        ))}
      </MenuList>
      <CompanyWrapper>
        <ImageBox>
          <img src={"images/company_icon.svg"} />
        </ImageBox>
        <p>마이다스인</p>
      </CompanyWrapper>
      <Modal isShowModal={isShowModal} closeIcon={closeModal}>
        <ModalContent>
          <h1>근무 유형을 선택해주세요</h1>
          <div>
            <WorkType>출근</WorkType>
            <WorkType>원격근무</WorkType>
          </div>
        </ModalContent>
      </Modal>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  width: 250px;
  height: 100vh;
  position: fixed;
  left: 0;
  padding: 30px;
  background-color: #fafafa;
`;

const ProfileWrapper = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;

  & > div {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background-color: #93abb8;
  }

  & > p {
    font-size: 16px;
    font-weight: 500;
  }
`;

const AttendanceBtn = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  background-color: #6cdd83;
  color: white;
  margin-bottom: 20px;
`;

const MenuList = styled.div`
  display: flex;
  flex-direction: column;
`;

const MenuItem = styled(Link)`
  height: 36px;
  display: flex;
  align-items: center;
  gap: 15px;
  padding-left: 10px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #f0f2f2;
  }

  & > p {
    font-size: 14px;
    font-weight: 500;
  }
`;

const CompanyWrapper = styled.div`
  position: absolute;
  bottom: 30px;
  height: 60px;
  display: flex;
  align-items: center;
  gap: 15px;

  & > p {
    font-size: 16px;
    font-weight: 500;
  }
`;

const ImageBox = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #a8b3db;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 30px;

  & > h1 {
    font-size: 24px;
  }

  & > div {
    display: flex;
    justify-content: center;
    gap: 50px;
  }
`;

const WorkType = styled.div`
  width: 300px;
  height: 300px;
  background-color: #a8b3db;
  border-radius: 20px;
`;

export default LeftNavBar;
