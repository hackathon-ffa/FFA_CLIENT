import { ChangeEvent } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { selectedFiltersAtom } from "../atoms";
import Checkbox from "./_elements/Checkbox";

const ManagementFilter = () => {
  const CHECKBOX_LIST = [
    { id: "attendance", text: "출근" },
    { id: "notAttendance", text: "미출근" },
    { id: "leave", text: "퇴근" },
    { id: "home", text: "재택" },
    { id: "vacation", text: "휴가" },
  ];
  const [selectedFilters, setSelectedFilters] =
    useRecoilState(selectedFiltersAtom);

  const handleCheck = (e: ChangeEvent<HTMLInputElement>, id: string) => {
    if (e.target.checked) {
      setSelectedFilters([...selectedFilters, id]);
    } else {
      setSelectedFilters(selectedFilters.filter((item) => item !== id));
    }
  };

  return (
    <Wrapper>
      <TitleText>상태</TitleText>
      <CheckboxWrapper>
        {CHECKBOX_LIST.map((ele) => (
          <Checkbox
            key={ele.id}
            id={ele.id}
            onChange={(e) => handleCheck(e, ele.id)}
            checked={selectedFilters.includes(ele.id)}
          >
            {ele.text}
          </Checkbox>
        ))}
      </CheckboxWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  margin-bottom: 50px;
`;

const TitleText = styled.p`
  color: #000;
  font-size: 16px;
  font-weight: bold;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

export default ManagementFilter;
