import swal from "sweetalert2";
export const Swal = swal;

// Text Input
export const Input = Swal.mixin({
	input: "text",
	showCancelButton: true,
	showConfirmButton: true,
	toast: false,
});
// Text Input



// Number Input
export const NumberInput = Input.mixin({
    toast: false,
	input: "number"
});
// Number Input


// Toast
export const Toast = Swal.mixin({
	toast: true,
	position: "bottom"
});
// Toast


// Confirm
export const Confirm = Swal.mixin({
	icon: "warning",
	showCancelButton: true,
	toast: false,
	confirmButtonText: "Confirm",
	cancelButtonText: "Cancel"
});
// Confirm


// Info popup
export const Info = Swal.mixin({
	icon: "info",
	showCancelButton: false,
	toast: false
});
// Info popup


// License popup
export const License = Swal.mixin({
	icon: "info",
	showCancelButton: true,
	toast: false,
	confirmButtonText: "Agree",
	cancelButtonText: "Disagree"
});


// Disagreed to license popup
export const NoLicense = Swal.mixin({
	icon: "error",
	showCancelButton: true,
	toast: false,
	confirmButtonText: "Reload",
	cancelButtonText: "Play without hacks"
});
// Disagreed to license popup