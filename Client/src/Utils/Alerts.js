import Swal from "sweetalert2";

export const Successful = (label) => {
  Swal.fire({
    position: "center",
    icon: "success",
    title: label,
    showConfirmButton: true,
    timer: 3000,
  });
};


export const Errors = (label) => {
  Swal.fire({
    position: "center",
    icon: "error",
    title: label,
    showConfirmButton: true,
    timer: 5000,
  });
};