import styled from "styled-components";
import { useState } from "react";
import UserNavBar from "../components/UserNavBar";

const VacationPage = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [why, setWhy] = useState("month");
  const [number, setNumber] = useState("");

  return (
    <Wrapper>
      <UserNavBar/>
      <h1>휴가 신청서</h1>
      <VacationFormWrapper>
        <Title>
          <p>기간</p>
          <VacationClass>휴가 구분</VacationClass>
          <VacationWhy>사유</VacationWhy>
          <VacationNumber>비상연락처</VacationNumber>
        </Title>

        <Content>
          <Day>
            <input
              type="date"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setStartDate(event.target.value)
              }
            />
            <p>~</p>
            <input
              type="date"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setEndDate(event.target.value)
              }
            />
          </Day>
          <Type>
            <input
              type="radio"
              id="Choice1"
              name="contact"
              value="month"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setWhy(event.target.value)
              }
            />
            <label htmlFor="Choice1">월차</label>
            <input
              type="radio"
              id="Choice2"
              name="contact"
              value="year"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setWhy(event.target.value)
              }
            />
            <label htmlFor="Choice2">년차</label>
            <input
              type="radio"
              id="Choice3"
              name="contact"
              value="health"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setWhy(event.target.value)
              }
            />
            <label htmlFor="Choice3">보건휴가</label>
            <input
              type="radio"
              id="Choice4"
              name="contact"
              value="condol"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setWhy(event.target.value)
              }
            />
            <label htmlFor="Choice4">경조휴가</label>
            <input
              type="radio"
              id="Choice5"
              name="contact"
              value="menses"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setWhy(event.target.value)
              }
            />
            <label htmlFor="Choice5">생리휴가</label>
            <input
              type="radio"
              id="Choice6"
              name="contact"
              value="birth"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setWhy(event.target.value)
              }
            />
            <label htmlFor="Choice6">출산휴가</label>
            <input
              type="radio"
              id="Choice7"
              name="contact"
              value="call-up"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setWhy(event.target.value)
              }
            />
            <label htmlFor="Choice7">소집명령</label>
          </Type>
          <Why></Why>
          <Number
            type="tel"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setNumber(event.target.value)
            }
          />
        </Content>
      </VacationFormWrapper>
      <Submit>휴가 신청하기</Submit>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-left: 250px;
  padding: 30px;
  & > h1 {
    margin-bottom: 30px;
    font-weight: 500;
  }
`;
const VacationFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.div`
  margin-left: 10px;
  & > p {
    font-size: 16px;
    width: 80px;
  }
`;

const VacationClass = styled.p`
  margin-top: 10px;
`;
const VacationWhy = styled.p`
  margin-top: 10px;
`;
const VacationNumber = styled.p`
  margin-top: 393px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;
const Type = styled.div`
  margin-top: 10px;
  & > label {
    margin-right: 10px;
  }
`;
const Day = styled.div`
  display: flex;
  & > p {
    margin-left: 10px;
    margin-right: 10px;
  }
`;
const Why = styled.textarea`
  width: 800px;
  height: 400px;
  margin-top: 13px;
`;
const Number = styled.input`
  width: 300px;
  margin-top: 10px;
`;

const Submit = styled.button`
  width: 100px;
  height: 30px;
  margin-top: 10px;
  margin-left: 970px;
  background-color: #6cdd83;
`;

export default VacationPage;
