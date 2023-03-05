import { useState, useEffect } from "react";
import Spinner from "./common/spinner";
import Table from "./common/table";
import Pagination from "./common/pagination";
import { Link } from "react-router-dom";

import { toast } from "react-toastify";
import useFetch from "../hooks/useFetch";

import EmployeeForm from "./employeeForm";

const Employees = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [paginatedData, setPaginatedData] = useState([]);
  // const [users, setUsers] = useState(null);
  const { data: users, setData: setUsers } = useFetch("/employees.json");
  // console.log(users);
  const columns = [
    { path: "id", label: "ت" },
    { path: "employeeID", label: "الرقم الوظيفي" },
    { path: "fullname", label: "الاسم الرباعي" },
    { path: "gender", label: "الجنس" },
    { path: "birthdate", label: "تاريخ الميلاد" },
    { path: "mother", label: "اسم الام الثلاثي" },
    { path: "marital", label: "الحالة الاجتماعية" },
    { path: "children", label: "عدد الاطفال" },
    { path: "wife", label: "اسم الزوج/الزوجة" },
    { path: "address", label: "عنوان السكن" },
    // { path: "documents", label: "المستمسكات" },

    {
      label: "Actions",
      content: (item) => (
        <>
          <button type="button" className="btn btn-primary me-2">
            عرض
          </button>
          <button
            onClick={() => {
              handleDelete(item);
            }}
            type="button"
            className="btn btn-danger me-2"
          >
            حذف
          </button>
          <button
            type="button"
            className="btn btn-warning me-2 "
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            data-bs-whatever="@getbootstrap"
            onClick={() => setSelectedItem(item)}
          >
            تعديل
          </button>
        </>
      ),
    },
  ];

  const handleDelete = (item) => {
    const newData = users.filter((user) => user.id !== item.id);
    setUsers(newData);
    toast.warning("تم حذف الموظف بنجاح...", { theme: "colored" });
  };

  return (
    <>
      <main className="col-md-9 me-sm-auto col-lg-10 px-md-4">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3  border-bottom">
          <div className="btn-toolbar mb-2 mb-md-0 ">
            <div className="btn-group me-2">
              <Link
                type="button"
                className="btn btn-sm btn-outline-secondary border-top-0"
                to="/vacations"
              >
                الاجازات
              </Link>
              <Link
                type="button"
                className="btn btn-sm btn-outline-secondary border-top-0"
                to="/promotions"
              >
                علاوات وترفيعات
              </Link>
              <Link
                type="button"
                className="btn btn-sm btn-outline-secondary border-top-0"
                to="/courses"
              >
                دورات
              </Link>
              <Link
                type="button"
                className="btn btn-sm btn-outline-secondary border-top-0"
                to="/jobs"
              >
                بيانات وظيفية
              </Link>
            </div>
          </div>
          <EmployeeForm
            data={users}
            setData={setUsers}
            selectedItem={selectedItem}
          />
        </div>
      </main>

      <div className="container" style={{ marginRight: "303px" }}>
        {users ? (
          <>
            <Table columns={columns} data={paginatedData} />
            <Pagination setPaginatedData={setPaginatedData} data={users} />
          </>
        ) : (
          <Spinner />
        )}
      </div>
    </>
  );
};

export default Employees;
