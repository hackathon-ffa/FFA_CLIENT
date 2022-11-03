import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { currentTabAtom } from "../atoms";
import AverageWorkChart from "../components/AverageWorkChart";
import DashboardTab from "../components/DashboardTab";
import UserNavBar from "../components/UserNavBar";

const DashboardPage = () => {
  const currentTab = useRecoilValue(currentTabAtom);
  const array = [
    { label: "근무시간", type: "work", data: [8, 8, 9, 10, 8] },
    { label: "출근시간", type: "start", data: [9, 11, 8, 10, 10] },
    { label: "퇴근시간", type: "end", data: [18, 20, 17, 19, 19] },
  ];

  return (
    <>
      <UserNavBar />
      <Wrapper>
        <DashboardTab />
        <AverageWorkChart
          label={array[currentTab].label}
          data={array[currentTab].data}
        />
        <h1>
          이번주 평균 {array[currentTab].label}은{" "}
          {array[currentTab].data.reduce((a: any, c: any) => a + c) / 5}시
          {currentTab == 0 && "간"}입니다.
        </h1>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  margin-left: 250px;
  padding: 30px;

  & > h1 {
    text-align: center;
    margin-top: 30px;
  }
`;

export default DashboardPage;
