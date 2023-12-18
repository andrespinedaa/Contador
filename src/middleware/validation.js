export default function Validation (text) {
	const regex = /^[0-9]+$/;
	if (text.match(regex)) {
		return { flag: true, message: "Ingrese solo letras" };
	} else {
		return { flag: false };
	}
}
