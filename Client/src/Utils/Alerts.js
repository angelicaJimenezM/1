import Swal from "sweetalert2";
export const Successful = () => {
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Plan Turistico guardado exitosamente",
    showConfirmButton: false,
    timer: 2500,
  });
};
