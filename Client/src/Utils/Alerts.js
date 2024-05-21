import Swal from "sweetalert2";

export const Successful = (label) => {
  Swal.fire({
    position: "center",
    icon: "success",
    title: label,
    showConfirmButton: true,
    timer: 2500,
  });
};
