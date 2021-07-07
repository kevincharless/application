import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Line } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { getTemperatures } from "../redux/actions/temperatures";
import { RootState } from "../redux/store";

const Temperature: React.FC<{}> = () => {
	const [temperatures, setTemperatures] = useState<any>([]);
	const [labels, setLabels] = useState<any>(["1"]);
	const weather = useSelector((state: RootState) => state.temperatures);
	const dispatch = useDispatch();

	const data = {
		labels: labels,
		datasets: [
			{
				label: "# of Votes",
				data: temperatures,
				fill: false,
				backgroundColor: "rgb(255, 99, 132)",
				borderColor: "rgba(255, 99, 132, 0.2)",
			},
		],
	};

	const options = {
		scales: {
			yAxes: [
				{
					ticks: {
						beginAtZero: true,
					},
				},
			],
		},
	};

	useEffect(() => {
		dispatch(getTemperatures());
		const interval = setInterval(() => {
			dispatch(getTemperatures());
			setLabels([...labels, (labels.length + 1).toString()]);
		}, 10000);
		return () => {
			clearInterval(interval);
		};
	}, [dispatch, labels]);

	useEffect(() => {
		if (!weather.isLoading && weather.temperatures[0]) {
			setTemperatures([
				...temperatures,
				weather.temperatures[weather.temperatures.length - 1].current.temp_c,
			]);
		} // eslint-disable-next-line react-hooks/exhaustive-deps
	}, [weather]);

	return (
		<Layout>
			<h4 className="m-0">Temperature</h4>
			<p style={{ opacity: "0.8" }}>
				Hover to see a specific temperature at that time
			</p>
			<hr className="pb-2" />
			<p className="font-weight-bold">Jakarta Current Temperature</p>
			<Line type="line" data={data as any} options={options} />
		</Layout>
	);
};

export default Temperature;
