import { useEffect } from "react";
import './App.css'

function App() {
	useEffect(() => {
		if (typeof window !== "undefined") {
			const btn = document.querySelector(".button");

			const handleMouseMove = (e) => {
				const x = e.pageX - btn.offsetLeft;
				const y = e.pageY - btn.offsetTop;

				btn.style.setProperty("--x", x + "px");
				btn.style.setProperty("--y", y + "px");
			};

			btn.addEventListener("mousemove", handleMouseMove);

			return () => {
				// Cleanup the event listener when the component unmounts
				btn.removeEventListener("mousemove", handleMouseMove);
			};
		}
	}, []); // Empty dependency array ensures the effect runs only once after initial render

	return (
		<div className="text-center p-10 flex gap-5 justify-center">
			{/* bg changes from the mouse position */}
			<button className="button relative inline-flex px-8 py-3 border-2 border-white text-white font-semibold text-xl tracking-widest overflow-hidden before:absolute before:translate-x-[-50%] before:translate-y-[-50%] before:left-[var(--x)] before:top-[var(--y)] before:w-0 before:h-0 before:rounded-full before:bg-[#f0b428] hover:before:w-[400px] hover:before:h-[400px] hover:text-black before:-z-10 before:ease-in-out">
				Hover Me
			</button>
			{/* bg changes from top to bottom linearly, straightly */}
			<button className="relative border-2 tracking-widest text-white font-medium text-xl border-white py-3 px-6 transition-colors overflow-hidden before:absolute before:top-0 before:left-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-y-0 before:bg-[#f0b428] before:transition-transform before:duration-300 before:content-[''] hover:text-black hover:font-medium hover:border-black before:hover:scale-y-100">
				Hover Me
			</button>
			{/* bg changes from top to bottom circularly */}
			<button className="button relative inline-flex px-8 py-3 border-2 border-white text-white font-semibold text-xl tracking-widest overflow-hidden before:absolute before:translate-x-[-50%] before:translate-y-[-50%] before:left-1/2 before:top-0 before:w-0 before:h-0 before:rounded-full before:bg-[#f0b428] hover:before:w-[400px] hover:before:h-[400px] hover:text-black before:-z-10 before:ease-in-out">
				Hover Me
			</button>
		</div>
	);
}

export default App
