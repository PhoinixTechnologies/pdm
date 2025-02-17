"use client";
import './menu.styles.scss';
import { Menu } from 'antd';
import { FileProtectOutlined, PlayCircleOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { useState } from 'react';

export default function ClientMenu() {
  let keyValue = 1;
  const [selectedKey, setSelectedKey] = useState(null);

  const handleSelect = ({ key }) => {
    setSelectedKey(key);
  };

  const renderLabel = (label, key, extra = '') => (
    <span className="menu-item-label" style={{ 
      fontWeight: selectedKey === key ? "bold" : "normal",
      color: selectedKey === key ? "#1677ff" : "inherit",
      display: 'flex', justifyContent: 'space-between', width: '100%'
    }}>
      {label}
      {extra && <span style={{ color: "#888", fontSize: "12px" }}>{extra}</span>}
    </span>
  );

  const items = [
    {
      key: 'sub1',
      label: renderLabel('Introduction to Python', 'sub1', '8 lectures - 51m'),
      children: [
        {
          key: 'g1',
          type: 'group',
          children: [
            { key: `${keyValue++}`, icon: <PlayCircleOutlined />, label: renderLabel('What is Python?', `${keyValue++}`, '07:31') },
            { key: `${keyValue++}`, icon: <PlayCircleOutlined />, label: renderLabel('What is programming?', `${keyValue++}`, '07:31') },
            { key: `${keyValue++}`, icon: <PlayCircleOutlined />, label: renderLabel('Why Python(Advantages & Importance)', `${keyValue++}`, '07:31') },
            { key: `${keyValue++}`, icon: <PlayCircleOutlined />, label: renderLabel('Installation & Configuration of Python', `${keyValue++}`, '07:31') },
            { key: `${keyValue++}`, icon: <PlayCircleOutlined />, label: renderLabel('Why Python(Advantages & Importance)', `${keyValue++}`, '07:31') },
            { key: `${keyValue++}`, icon: <PlayCircleOutlined />, label: renderLabel('Installation & Configuration of Python', `${keyValue++}`, '07:31') },
            { key: `${keyValue++}`, icon: <PlayCircleOutlined />, label: renderLabel('What is an IDE?', `${keyValue++}`, '07:31') },
            { key: `${keyValue++}`, icon: <PlayCircleOutlined />, label: renderLabel('Examples of IDE', `${keyValue++}`, '07:31') },
            { key: `${keyValue++}`, icon: <FileProtectOutlined />, label: renderLabel('Short Test', `${keyValue++}`, '5.3 MB') },
          ],
        },
      ],
    },
    {
      key: 'sub2',
      label: renderLabel('Python Basics', 'sub2', '52 lectures - 5h 49m'),
      children: [
        { key: `${keyValue++}`, label: renderLabel('Python Basics run-down', `${keyValue++}`) },
      ],
    },
    {
      key: 'sub3',
      label: renderLabel('Data Structures (Strings)', 'sub3', '52 lectures - 5h 49m'),
      children: [
        { key: `${keyValue++}`, label: renderLabel('Understanding Strings', `${keyValue++}`) },
      ],
    },
    {
      key: 'sub4',
      label: renderLabel('Data Structure (List)', 'sub4', '52 lectures - 5h 49m'),
      children: [
        { key: `${keyValue++}`, label: renderLabel('Working with Lists', `${keyValue++}`) },
      ],
    },
  ];

  return (
    <Menu mode="inline" selectedKeys={[selectedKey]} onClick={handleSelect} items={items} />
  );
}
