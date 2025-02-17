"use client";
import './menu.styles.scss';
import { Menu } from 'antd';
import { FileProtectOutlined, PlayCircleOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faFileShield, faPlay, faPlayCircle } from '@fortawesome/free-solid-svg-icons';

export default function ClientMenu() {
  let keyValue = 1;
  const [selectedKey, setSelectedKey] = useState(null);

  const handleSelect = ({ key }) => {
    setSelectedKey(key);
  };

  const renderLabel = (label, key, lectures = null, time = null) => (
    <span
      className="menu-item-label"
      style={{
        fontWeight: selectedKey === key ? "bold" : "normal",
        color: selectedKey === key ? "#1677ff" : "inherit",
        display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%",
      }}
    >
      {label}
      {lectures && (
        <span style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "12px" }}>
          <FontAwesomeIcon icon={faPlay} style={{ color: '#3935FF' }} /> {lectures}
        </span>
      )}
      {time && (
        <span style={{ display: "flex", alignItems: "center", gap: "4px", color: "#888", fontSize: "12px" }}>
          <FontAwesomeIcon icon={faClock} style={{ color: '#3935FF' }} /> {time}
        </span>
      )}
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
            { key: `${keyValue++}`, icon: <FontAwesomeIcon icon={faPlayCircle} />, label: renderLabel("What is Python?", `${keyValue++}`, null, "07:31") },
            { key: `${keyValue++}`, icon: <PlayCircleOutlined />, label: renderLabel('What is programming?', `${keyValue++}`, null, '07:31') },
            { key: `${keyValue++}`, icon: <PlayCircleOutlined />, label: renderLabel('Why Python(Advantages & Importance)', `${keyValue++}`, null, '07:31') },
            { key: `${keyValue++}`, icon: <PlayCircleOutlined />, label: renderLabel('Installation & Configuration of Python', `${keyValue++}`, null, '07:31') },
            { key: `${keyValue++}`, icon: <PlayCircleOutlined />, label: renderLabel('Why Python(Advantages & Importance)', `${keyValue++}`, null, '07:31') },
            { key: `${keyValue++}`, icon: <PlayCircleOutlined />, label: renderLabel('Installation & Configuration of Python', `${keyValue++}`, null, '07:31') },
            { key: `${keyValue++}`, icon: <PlayCircleOutlined />, label: renderLabel('What is an IDE?', `${keyValue++}`, null, '07:31') },
            { key: `${keyValue++}`, icon: <PlayCircleOutlined />, label: renderLabel('Examples of IDE', `${keyValue++}`, null, '07:31') },
            { key: `${keyValue++}`, icon: <FileProtectOutlined />, label: renderLabel('Short Test', `${keyValue++}`, '5.3 MB', null) }
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

  return <div className='dropdown-left-menu'> <Menu mode="inline" selectedKeys={[selectedKey]} onClick={handleSelect} items={items} /> </div>;

}
