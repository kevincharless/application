import React from "react";

interface PageHeaderProps {
	title: string;
	description: string;
	button?: any;
}

const PageHeader: React.FC<PageHeaderProps> = ({
	title,
	description,
	button,
}) => {
	return (
		<>
			<h4 className="m-0">{title}</h4>
			<div className="d-flex justify-content-between">
				<p className="d-inline mb-0" style={{ opacity: "0.8" }}>
					{description}
				</p>
				{button}
			</div>
			<hr className="pb-2" />
		</>
	);
};

export default PageHeader;
