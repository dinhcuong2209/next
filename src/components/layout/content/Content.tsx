import React from "react";
import { Row, Col } from "antd";
import type { MenuProps } from "antd";
import { Layout } from 'antd';
import SliderBar from "../slider/Slider";
const { Content } = Layout;

export default function ContentApp({ children }: any) {
	return (
		<Row>
			<Col flex="100px" className="slider">
				<SliderBar />
			</Col>
			<Col flex="auto">
				<Content>{children}</Content>
			</Col>
		</Row>
	);
}
