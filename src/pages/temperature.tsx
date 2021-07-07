import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Line } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { getTemperatures } from "../redux/actions/temperatures";
import { RootState } from "../redux/store";

import { Chart } from "chart.js";
import zoomPlugin from "chartjs-plugin-zoom";

Chart.register(zoomPlugin);

const Temperature: React.FC<{}> = () => {
	const [temperatures, setTemperatures] = useState<any>([]);
	const [labels, setLabels] = useState<any>([]);
	const weather = useSelector((state: RootState) => state.temperatures);
	const dispatch = useDispatch();

	const get2DNumber = (num: number) => {
		return (num.toString().length < 2 ? "0" + num : num).toString();
	};

	const currentTime = (currentDate: any) => {
		return (
			get2DNumber(currentDate.getHours()) +
			":" +
			get2DNumber(currentDate.getMinutes()) +
			":" +
			get2DNumber(currentDate.getSeconds())
		);
	};

	const data = {
		labels: labels,
		datasets: [
			{
				label: "℃ temperature",
				data: temperatures,
				fill: false,
				backgroundColor: "rgb(255, 99, 132)",
				borderColor: "rgba(255, 99, 132, 0.2)",
			},
		],
	};

	const zoomOptions = {
		limits: {
			y: { min: -50, max: 100, minRange: 50 },
		},
		pan: {
			enabled: true,
			mode: "xy",
		},
		zoom: {
			wheel: {
				enabled: true,
			},
			mode: "xy",
		},
	};

	const zoomStatus = (chart: any) => "zoom level: " + chart.getZoomLevel() + "";

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
		plugins: {
			zoom: zoomOptions,
			title: {
				display: true,
				position: "bottom",
				text: (ctx: any) => zoomStatus(ctx.chart),
			},
		},
		transitions: {
			zoom: {
				animation: {
					duration: 100,
				},
			},
		},
	};
	useEffect(() => {
		dispatch(getTemperatures());
		setLabels([...labels, currentTime(new Date())]);
	}, []);

	useEffect(() => {
		const interval = setInterval(() => {
			dispatch(getTemperatures());
			setLabels([...labels, currentTime(new Date())]);
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
			<Line
				type="line"
				width={800}
				height={300}
				data={data as any}
				options={options}
			/>
		</Layout>
	);
};

export default Temperature;
