import { useState } from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import axios from "axios";
import { useNavigate } from "react-router-dom";

type SignUpType = {
  employee: string;
  userId: string;
  name: string;
  password: string;
  passwordCheck: string;
  company: string | undefined;
  department?: string;
};

const SignUp = () => {
  const companyData = [
    { name: "마이다스인", id: 0 },
    { name: "마이다스아이티", id: 1 },
  ];
  const navigate = useNavigate();

  interface companyType {
    name: string;
    id: number;
  }

  const [userData, setUserData] = useState<SignUpType>({
    employee: "user",
    userId: "",
    name: "",
    password: "",
    passwordCheck: "",
    company: "",
    department: "",
  });

  const handleInputChange = (props: string) => (event: any) => {
    setUserData({ ...userData, [props]: event.target.value });
  };

  const handleSignup = () => {
    axios
      .post("http://192.168.101.50:8080/signup", {
        userId: userData.userId,
        companyName: userData.company,
        userRight: userData.employee,
        userName: userData.name,
        password: userData.password,
      })
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        throw err;
      });
  };

  const defaultProps = {
    options: companyData,
    getOptionLabel: (option: companyType) => option.name,
  };
  return (
    <Wrapper>
      <Logo>FFA</Logo>
      <div>
        <ChooseRole
          value="user"
          style={{
            backgroundColor: userData.employee === "user" ? "#000" : "#fff",
            color: userData.employee === "user" ? "#fff" : "#000",
          }}
          onClick={handleInputChange("user")}
        >
          직원 회원가입
        </ChooseRole>
        <ChooseRole
          value="manager"
          style={{
            backgroundColor: userData.employee === "user" ? "#fff" : "#000",
          }}
          onClick={handleInputChange("manager")}
        >
          관리자 회원가입
        </ChooseRole>
      </div>
      <SingUpWarpper>
        <InputInfo>이름</InputInfo>
        <input onChange={handleInputChange("name")} />
        <InputInfo>비밀번호</InputInfo>
        <input type={"password"} onChange={handleInputChange("password")} />
        <InputInfo>비밀번호 확인</InputInfo>
        <input type="password" onChange={handleInputChange("passwordCheck")} />
        <InputInfo>아이디</InputInfo>
        <input onChange={handleInputChange("userId")} />

        {userData.employee === "user" ? (
          <>
            <InputInfo>회사 선택</InputInfo>
            <Stack
              spacing={1}
              sx={{
                width: 300,
                border: 2,
                height: 25,
                borderRadius: 1.5,
                borderColor: "#737373",
                paddingBottom: 5.753,
              }}
            >
              <Autocomplete
                onChange={(event, value) => {
                  console.log(value?.name);
                  setUserData({ ...userData, company: value?.name });
                }}
                {...defaultProps}
                sx={{
                  width: 290,
                  display: "flex",
                  margin: "auto",
                  "& .css-1a1fmpi-MuiInputBase-root-MuiInput-root:after": {
                    border: "none",
                  },
                  "& .css-1a1fmpi-MuiInputBase-root-MuiInput-root": {
                    border: "none",
                  },
                  "& .css-1a1fmpi-MuiInputBase-root-MuiInput-root:hover:not(.Mui-disabled):before":
                    {
                      border: "none",
                    },
                  "& .css-aqpgxn-MuiFormLabel-root-MuiInputLabel-root": {
                    color: "white",
                  },
                  "& .css-1c2i806-MuiFormLabel-root-MuiInputLabel-root.Mui-focused":
                    { color: "#fff" },
                }}
                id="combo-box-demo"
                disablePortal
                renderInput={(params: any) => (
                  <TextField {...params} label="회사 찾기" variant="standard" />
                )}
              />
            </Stack>
            <InputInfo>부서</InputInfo>
            <input onChange={handleInputChange("department")} />
          </>
        ) : (
          <>
            <InputInfo>회사 입력</InputInfo>
            <input onChange={handleInputChange("company")} />
          </>
        )}

        <SignUpBtn onClick={handleSignup}>회원가입</SignUpBtn>
      </SingUpWarpper>
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

const ChooseRole = styled.button`
  border-radius: 10px 10px 0px 0px;
  width: 215px;
  height: 40px;
  border: 1px solid #dadada;
  margin-bottom: -1px;
  color: #b3b3b3;
`;

const InputInfo = styled.span`
  margin-top: 10px;
  width: 300px;
`;

const SingUpWarpper = styled.div`
  width: 430px;
  height: 550px;
  border-radius: 0px 0px 10px 10px;
  border: 1px solid #b2b2b2;
  border-top: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > input:focus {
    outline: none;
  }

  & > input {
    width: 300px;
    height: 45px;
    border-style: solid;
    border-color: #737373;
    padding-left: 20px;
    font-size: 15px;
    border-radius: 5px;
  }

  & > button {
    width: 300px;
    height: 40px;
    border-style: 1px solid;
    border-color: #ffffff;
    padding-left: 20px;
    font-size: 15px;
    border-radius: 5px;
  }
`;

const SignUpBtn = styled.button`
  width: 300px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  border-radius: 10px;
  background-color: #6cdd83;
  color: white;
  font-size: 16px;
`;

export default SignUp;
