import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

export default function Celebrate() {
	const { width, height } = useWindowSize();
	return <Confetti width={width} height={height} />;
}
