import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { currentTabAtom } from "../atoms";
import AverageWorkChart from "../components/AverageWorkChart";
import DashboardTab from "../components/DashboardTab";
import UserNavBar from "../components/UserNavBar";

const DashboardPage = () => {
  const currentTab = useRecoilValue(currentTabAtom);
  const array = [
    { label: "근무시간", type: "work" },
    { label: "출근시간", type: "start" },
    { label: "퇴근시간", type: "end" },
  ];

  return (
    <>
      <UserNavBar />
      <Wrapper>
        <DashboardTab />
        <AverageWorkChart
          label={array[currentTab].label}
          data={[8, 9, 11, 9, 10]}
        />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  margin-left: 250px;
  padding: 30px;
`;

export default DashboardPage;
