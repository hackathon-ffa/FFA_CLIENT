import styled from "styled-components";
import AdminNavBar from "../components/AdminNavBar";
import ManagementFilter from "../components/ManagementFilter";
import UserListTable from "../components/UserListTable";

const ManagementPage = () => {
  const ROW_INFO = [
    { text: "이름", width: "15%" },
    { text: "부서", width: "20%" },
    { text: "상태", width: "15%" },
    { text: "출근시간", width: "25%" },
    { text: "퇴근시간", width: "25%" },
  ];

  const data = [
    {
      name: "박성현",
      department: "개발팀",
      state: "출근",
      start: "09:03:27",
      end: null,
    },
    {
      name: "박성현",
      department: "개발팀",
      state: "출근",
      start: "09:03:27",
      end: null,
    },
    {
      name: "박성현",
      department: "개발팀",
      state: "출근",
      start: "09:03:27",
      end: null,
    },
    {
      name: "박성현",
      department: "개발팀",
      state: "출근",
      start: "09:03:27",
      end: null,
    },
  ];

  return (
    <>
      <AdminNavBar />
      <Wrapper>
        <ManagementFilter />
        <UserListTable data={data} rowInfo={ROW_INFO} />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  margin-left: 250px;
  padding: 30px 60px;
`;

export default ManagementPage;
