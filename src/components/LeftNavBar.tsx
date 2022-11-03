import styled from "styled-components";

const LeftNavBar = () => {
  return (
    <Wrapper>
      <ProfileWrapper>
        <div />
        <p>박성현</p>
      </ProfileWrapper>
      <AttendanceBtn>출근하기</AttendanceBtn>
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
`;

export default LeftNavBar;
