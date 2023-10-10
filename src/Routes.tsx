import { RouterProvider, createBrowserRouter } from "react-router-dom";
 import ErorrPage from "./ErorrPage";
 import Nav from "./Nav";
import Defult from "./Defult";

export default function Routes() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: (
				<>
					<Nav/>
					<Defult />
				</>
			),
			errorElement: <ErorrPage />
		},
	]);
	return <RouterProvider router={router} />;
}
