import { Line } from "rc-progress";
import { useEffect, useState } from "react";
import styled from "styled-components";

const HomePage = () => {
  const [remainingTime, setRemainingTime] = useState(9 * 60 * 60);
  const [weekWorkTime, setWeekWorkTime] = useState(0);

  const formatTime = (seconds: number) => {
    return new Date(seconds * 1000).toISOString().slice(11, 19);
  };

  useEffect(() => {
    const id = setInterval(() => {
      setRemainingTime((t) => t - 1);
    }, 1000);
    if (remainingTime === 0) {
      clearInterval(id);
    }
    return () => clearInterval(id);
  }, [remainingTime]);

  useEffect(() => {
    const id = setInterval(() => {
      setWeekWorkTime((t) => t + 1);
    }, 100);
    if (weekWorkTime === 12) {
      clearInterval(id);
    }
    return () => clearInterval(id);
  }, [weekWorkTime]);

  return (
    <Wrapper>
      <h1>아직 출근 전이에요</h1>
      <RemainingWrapper style={{ marginBottom: 100 }}>
        <h2>퇴근까지 남은 시간 ({formatTime(remainingTime)})</h2>
        <Line
          strokeColor={"#6cdd83"}
          style={{ width: "100%", height: "20px", borderRadius: "20px" }}
        />
        <TextWrapper>
          <span>출근</span>
          <span>퇴근</span>
        </TextWrapper>
      </RemainingWrapper>
      <RemainingWrapper>
        <h2>
          이번주에는 <b>{weekWorkTime}시간</b> 일했어요
        </h2>
        <Line
          percent={(weekWorkTime / 40) * 100}
          strokeColor={"#6cdd83"}
          style={{ width: "100%", height: "20px", borderRadius: "20px" }}
        />
        <TextWrapper>
          <span>0시간</span>
          <span>40시간</span>
        </TextWrapper>
      </RemainingWrapper>
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

const RemainingWrapper = styled.div`
  & > h2 {
    margin-bottom: 10px;
    font-weight: 500;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  & > span {
    font-size: 12px;
  }
`;

export default HomePage;
