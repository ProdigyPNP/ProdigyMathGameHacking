import swal from "sweetalert2";
export const Swal = swal;
export const Input = Swal.mixin({
	input: "text",
	showCancelButton: true,
	showConfirmButton: true
});
export const NumberInput = Input.mixin({
	input: "number"
});
export const Toast = Swal.mixin({
	toast: true,
	position: "bottom"
});
export const Confirm = Swal.mixin({
	icon: "warning",
	showCancelButton: true,
	confirmButtonText: "Confirm",
	cancelButtonText: "Cancel"
});
