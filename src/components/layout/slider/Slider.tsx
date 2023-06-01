import {
	AppstoreOutlined,
	ContainerOutlined,
	DesktopOutlined,
	MailOutlined,
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	PieChartOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';
import React, { useState } from 'react';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
	label: React.ReactNode,
	key: React.Key,
	icon?: React.ReactNode,
	children?: MenuItem[],
	type?: 'group',
): MenuItem {
	return {
		key,
		icon,
		children,
		label,
		type,
	} as MenuItem;
}

const items: MenuItem[] = [
	getItem('Option 1', '1', <PieChartOutlined />),
	getItem('Option 2', '2', <DesktopOutlined />),
	getItem('Option 3', '3', <ContainerOutlined />),
];

const SliderBar = () => {
	const [collapsed, setCollapsed] = useState(true);

	const toggleCollapsed = (status: boolean) => {
		setCollapsed(status);
	};

	return (
		<div>
			<Menu
				// onMouseOver={() => {toggleCollapsed(false)}}
				// onMouseOut={() => {toggleCollapsed(true)}}
				defaultSelectedKeys={['1']}
				defaultOpenKeys={['sub1']}
				mode="inline"
				inlineCollapsed={collapsed}
				items={items}
			/>
		</div>
	);
};

export default SliderBar;