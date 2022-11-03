import styled from "styled-components";
import { ResultListType, RowInfoType } from "../types";

type Props = {
  data?: ResultListType[];
  rowInfo: RowInfoType[];
};

const UserListTable = ({ data, rowInfo }: Props) => {
  if (data?.length === 0) return <NoResult>일치하는 직원이 없습니다.</NoResult>;

  return (
    <Wrapper>
      <TitleRow>
        {rowInfo.map((row) => (
          <p key={row.text} style={{ width: row.width }}>
            {row.text}
          </p>
        ))}
      </TitleRow>
      {data?.map((ele, idx) => (
        <DataRow key={idx}>
          {Object.values(ele).map((value, idx) => (
            <p key={idx} style={{ width: rowInfo[idx]?.width }}>
              {value || "-"}
            </p>
          ))}
        </DataRow>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const NoResult = styled.p`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  margin-top: 100px;
`;

const TitleRow = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #dddddd;

  & > p {
    font-size: 13px;
    font-weight: bold;
    text-align: center;
  }
`;

const DataRow = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 0px;
  border-bottom: 1px solid #dddddd;

  & > p {
    font-size: 12px;
    text-align: center;
    padding: 0 20px;
  }
`;

export default UserListTable;
