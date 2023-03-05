import { useState, useEffect } from "react";
import Spinner from "./common/spinner";
import Table from "./common/table";
import Pagination from "./common/pagination";
import { Link } from "react-router-dom";

import { toast } from "react-toastify";
import useFetch from "../hooks/useFetch";

import EmployeeForm from "./employeeForm";

const Vacations = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [paginatedData, setPaginatedData] = useState([]);
  // const [users, setUsers] = useState(null);
  const { data: vacations, setData: setvacations } = useFetch(
    "/vacations/vacation_detailse.json"
  );
  // console.log(vacations);
  const columns = [
    { path: "id", label: "ت" },
    { path: "employeeID", label: "الرقم الوظيفي" },
    { path: "lastBalanceDate", label: "تاريخ اخر رصيد" },
    { path: "lastVacationNum", label: "عدد ايام اخر اجازة" },
    { path: "vacationType", label: "نوع الاجازة" },
    { path: "time", label: "عدد الساعات" },
    { path: "startDate", label: "تاريخ بداية الاجازة" },
    { path: "endDate", label: "تاريخ نهاية الاجازة" },
    { path: "period", label: "عدد ايام الغياب" },
    { path: "actual", label: "ايام الاجازة الفعلي" },
    { path: "vacationBalance", label: "الرصيد الفعلي" },
    { path: "orderNum", label: "رقم الامر الاداري" },
    { path: "orderDate", label: "تاريخ الامر الاداري" },
    { path: "documents", label: "المستمسكات" },

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
    const newData = vacations.filter((vacation) => vacation.id !== item.id);
    setvacations(newData);
    toast.warning("تم حذف الموظف بنجاح...", { theme: "colored" });
  };

  return (
    <>
      <main className="col-md-9 me-sm-auto col-lg-10 px-md-4">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3  border-bottom">
          {/* <div className="btn-toolbar mb-2 mb-md-0 ">
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
          </div> */}
          {/* <EmployeeForm
            data={vacations}
            setData={setvacations}
            selectedItem={selectedItem}
          /> */}
        </div>
      </main>

      <div className="container" style={{ marginRight: "303px" }}>
        {vacations ? (
          <>
            <Table columns={columns} data={paginatedData} />
            <Pagination setPaginatedData={setPaginatedData} data={vacations} />
          </>
        ) : (
          <Spinner />
        )}
      </div>
    </>
  );
};

export default Vacations;
