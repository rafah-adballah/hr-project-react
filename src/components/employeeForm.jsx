import useForm from "../hooks/useForm";
import Joi from "joi-browser";

const schema = {
  employeeID: Joi.string().required().label("الرقم الوظيفي"),
  fullname: Joi.string().required().label("الاسم الرباعي"),
  gender: Joi.string().required().label("الجنس"),
  birthdate: Joi.string().required().label("تاريخ الميلاد "),
  mother: Joi.string().required().label("الاسم الثلاثي"),
  marital: Joi.string().required().label("الحالة الاجتماعية "),
  children: Joi.string().required().label("عدد الاولاد"),
  wife: Joi.string().required().label("اسم الزوج/الزوجة "),
  address: Joi.string().required().label("عنوان السكن "),
  documents: Joi.string().required().label("المستمسكات "),
};

const EmployeeForm = ({ data, setData, selectedItem }) => {
  const initialState = {
    id: null,
    employeeID: "",
    fullname: "",
    gender: "",
    birthdate: "",
    mother: "",
    marital: "",
    children: "",
    wife: "",
    address: "",
    documents: "",
  };
  const { values, renderInput, renderButton, handleSubmit } = useForm(
    initialState,
    schema,
    data,
    setData,
    selectedItem
  );

  return (
    <>
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        اضافة موظف جديد
      </button>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                معلومات الموظف الجديد
              </h5>
            </div>
            <div class="modal-body">
              <form onSubmit={handleSubmit}>
                {renderInput("الرقم الوظيفي", "employeeID", values.employeeID)}
                {renderInput("الاسم الرباعي", "fullname", values.fullname)}
                {renderInput("الجنس", "gender", values.gender)}
                {renderInput("تاريخ الميلاد", "birthdate", values.birthdate)}
                {renderInput("اسم الام الثلاثي", "mother", values.mother)}
                {renderInput("الحالة الاجتماعية", "marital", values.marital)}
                {renderInput("عدد الاولاد", "children", values.children)}
                {renderInput("اسم الزوج/الزوجة", "wife", values.wife)}
                {renderInput("عنوان السكن", "address", values.address)}
                {renderInput("المستمسكات", "documents", values.documents)}
                {renderButton("اضافة")}
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                اغلاق
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeForm;
