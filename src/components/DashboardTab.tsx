import { useRecoilState } from "recoil";
import styled from "styled-components";
import { currentTabAtom } from "../atoms";

const DashboardTab = () => {
  const [currentTab, setCurrentTab] = useRecoilState(currentTabAtom);
  const TAB_MENU_TEXT = ["근무시간", "출근시간", "퇴근시간"];

  return (
    <Wrapper>
      {TAB_MENU_TEXT.map((text, idx) => (
        <TabItem
          key={idx}
          isActive={currentTab === idx}
          onClick={() => setCurrentTab(idx)}
        >
          {text}
        </TabItem>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 30px;
`;

const TabItem = styled.div<{ isActive: boolean }>`
  width: 60px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #366f42;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  user-select: none;
  opacity: ${({ isActive }) => (isActive ? 1 : 0.5)};
  box-shadow: ${({ isActive }) => (isActive ? "inset 0 -2px 0 #366F42" : null)};
`;

export default DashboardTab;
