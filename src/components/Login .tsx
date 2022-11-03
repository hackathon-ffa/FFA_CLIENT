import styled from "styled-components";

const Login = () => {
  return (
    <Wrapper>
      <Logo>FFA</Logo>
      <LoginWarpper>
        <div>
          <IdInput placeholder="아이디" />
          <PwInput type="password" placeholder="비밀번호" />
        </div>

        <button>로그인</button>
        <p>아직 계정이 없으신가요?</p>
      </LoginWarpper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.p`
  margin-bottom: 20px;
  font-size: 30px;
  font-weight: bolder;
`;

const LoginWarpper = styled.form`
  width: 430px;
  height: 250px;
  border: 2px solid #b2b2b2;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > div {
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  & > div > input:focus {
    outline: none;
  }

  & > div > input {
    width: 300px;
    height: 40px;
    border-style: solid;
    border-color: #c6c6c6;
    padding-left: 20px;
    font-size: 15px;
  }

  & > button {
    width: 300px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 13px;

    border-radius: 10px;
    background-color: #6cdd83;
    color: white;
    font-size: 16px;
  }

  & > p {
    font-size: 13px;
    text-align: center;
    margin-top: 10px;
    margin-bottom: -10px;
  }
`;
const IdInput = styled.input`
  border-radius: 5px 5px 0px 0px;
  border-bottom: 0px;
`;
const PwInput = styled.input`
  border-radius: 0px 0px 5px 5px;
  margin-top: -1px;
`;
export default Login;
