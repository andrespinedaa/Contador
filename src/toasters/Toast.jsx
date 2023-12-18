import { useEffect } from "react";

function Toast({ toaster }) {
	const { message, icon, children } = toaster;
    const [appear, setAppear] = ("desappear")

	useEffect(() => {
		setTimeout(() => {
            setAppear((i) => i = "desappear")
        }, 5000);


	}, []);

	return (
		<div className={appear}>
			<p>{message}</p>
			<figure>{icon}</figure>
			{children}
		</div>
	);
}

export default Toast;
