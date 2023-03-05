import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/authContext";

const Dashboard = () => {
  const { pathname } = useLocation();

  const { user, logout } = useContext(AuthContext);

  const links = [
    { to: "/employees", label: "بيانات الموظفين الشخصية " },
    { to: "/promotions", label: "علاوات وترفعيات" },
    { to: "/vacations", label: "الاجازات" },
    { to: "/jobs", label: "بيانات وظيفية " },
  ];

  if (!user) return null;

  return (
    <>
      <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">
          نظام ادارة الموارد البشرية
        </a>
        <button
          className="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="عرض/إخفاء لوحة التنقل"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <input
          className="form-control form-control-dark w-100"
          type="text"
          placeholder="بحث"
          aria-label="بحث"
        />
        <div className="navbar-nav">
          <div className="nav-item text-nowrap">
            <Link className="nav-link" onClick={logout}>
              تسجيل الخروج
            </Link>
          </div>
        </div>
      </header>

      <div className="container-fluid">
        <div className="row">
          <nav
            id="sidebarMenu"
            className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
          >
            <div className="position-sticky pt-3">
              <ul className="nav flex-column">
                {links.map((link) => (
                  <li className="nav-item" key={link.label}>
                    <Link
                      className={
                        pathname === link.to ? "nav-link active" : "nav-link"
                      }
                      to={link.to}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                {/* <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    <span data-feather="home"></span>
                    بيانات الموظفين
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span data-feather="file"></span>
                    الطلبات
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span data-feather="shopping-cart"></span>
                    المنتجات
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span data-feather="users"></span>
                    الزبائن
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span data-feather="bar-chart-2"></span>
                    التقارير
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span data-feather="layers"></span>
                    التكاملات
                  </a>
                </li> */}
              </ul>

              {/* <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                  <span>التقارير المحفوظة</span>
                  <a
                    className="link-secondary"
                    href="#"
                    aria-label="إضافة تقرير جديد"
                  >
                    <span data-feather="plus-circle"></span>
                  </a>
                </h6> */}
              {/* <ul className="nav flex-column mb-2">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <span data-feather="file-text"></span>
                      الشهر الحالي
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <span data-feather="file-text"></span>
                      الربع الأخير
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <span data-feather="file-text"></span>
                      التفاعل الإجتماعي
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <span data-feather="file-text"></span>
                      مبيعات نهاية العام
                    </a>
                  </li>
                </ul> */}
            </div>
          </nav>
        </div>
      </div>

      {/* <script
        src="/docs/5.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossOrigin="anonymous"
      ></script>

      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/feather-icons/4.24.1/feather.min.js"
        integrity="sha384-EbSscX4STvYAC/DxHse8z5gEDaNiKAIGW+EpfzYTfQrgIlHywXXrM9SUIZ0BlyfF"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.js"
        integrity="sha384-i+dHPTzZw7YVZOx9lbH5l6lP74sLRtMtwN2XjVqjf3uAGAREAF4LMIUDTWEVs4LI"
        crossOrigin="anonymous"
      ></script>
      <script src="dashboard.js"></script> */}
    </>
  );
};

export default Dashboard;
