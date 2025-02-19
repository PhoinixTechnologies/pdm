"use client";
import './menu.styles.scss';
import { Menu } from 'antd';
import { FileProtectOutlined, PlayCircleOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faFileShield, faPlay, faPlayCircle } from '@fortawesome/free-solid-svg-icons';

export default function ClientMenu() {
  let keyValue = 1;
  let subInt = 1;
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
      key: `sub ${subInt++}`,
      label: renderLabel('Introduction to Python', `sub ${subInt++}`, '8 lectures - 51m'),
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
      key: `sub ${subInt++}`,
      label: renderLabel('Python Basics', `sub ${subInt++}`, '52 lectures - 5h 49m'),
      children: [
        { key: `${keyValue++}`, label: renderLabel('Python Basics run-down', `${keyValue++}`) },
      ],
    },
    {
      key: `sub ${subInt++}`,
      label: renderLabel('Data Structures (Strings)', `sub ${subInt++}`, '52 lectures - 5h 49m'),
      children: [
        { key: `${keyValue++}`, label: renderLabel('Understanding Strings', `${keyValue++}`) },
      ],
    },
    {
      key: `sub ${subInt++}`,
      label: renderLabel('Data Structure (List)', `sub ${subInt++}`, '52 lectures - 5h 49m'),
      children: [
        { key: `${keyValue++}`, label: renderLabel('Working with Lists', `${keyValue++}`) },
      ],
    },
    {
      key: `sub ${subInt++}`,
      label: renderLabel('Data Structures(Tuples)', `sub ${subInt++}`, '52 lectures - 5h 49m'),
      children: [
        { key: `${keyValue++}`, label: renderLabel('Working with Tuples', `${keyValue++}`) },
      ],
    },
    {
      key: `sub ${subInt++}`,
      label: renderLabel('Data Structure (Sets)', `sub ${subInt++}`, '52 lectures - 5h 49m'),
      children: [
        { key: `${keyValue++}`, label: renderLabel('Working with Sets', `${keyValue++}`) },
      ],
    },
    {
      key: `sub ${subInt++}`,
      label: renderLabel('Data Structure (Dictionaries)', `sub ${subInt++}`, '52 lectures - 5h 49m'),
      children: [
        { key: `${keyValue++}`, label: renderLabel('Working with Dictionaries', `${keyValue++}`) },
      ],
    },
    {
      key: `sub ${subInt++}`,
      label: renderLabel('Summary of Data Structures:', `sub ${subInt++}`, '52 lectures - 5h 49m'),
      children: [
        { key: `${keyValue++}`, label: renderLabel('Summary of Data Structures:', `${keyValue++}`) },
      ],
    },
    {
      key: `sub ${subInt++}`,
      label: renderLabel('Program Flow(Control Flow Statements):', `sub ${subInt++}`, '52 lectures - 5h 49m'),
      children: [
        { key: `${keyValue++}`, label: renderLabel('Program Flow(Control Flow Statements):', `${keyValue++}`) },
      ],
    },
    {
      key: `sub ${subInt++}`,
      label: renderLabel('Functions & Modules:', `sub ${subInt++}`, '43 lectures - 53m'),
      children: [
        { key: `${keyValue++}`, label: renderLabel('Program Flow(Control Flow Statements):', `${keyValue++}`) },
      ],
    },
    {
      key: `sub ${subInt++}`,
      label: renderLabel('File Handling:', `sub ${subInt++}`, '137 lectures - 10h 6m'),
      children: [
        { key: `${keyValue++}`, label: renderLabel('File Handling:', `${keyValue++}`) },
      ],
    },
    {
      key: `sub ${subInt++}`,
      label: renderLabel('CSV & JSON Files:', `sub ${subInt++}`, '21 lectures - 38m'),
      children: [
        { key: `${keyValue++}`, label: renderLabel('CSV & JSON Files:', `${keyValue++}`) },
      ],
    },
    {
      key: `sub ${subInt++}`,
      label: renderLabel('Word, PDF & JSON Documents using Python:', `sub ${subInt++}`, '39 lectures - 91m'),
      children: [
        { key: `${keyValue++}`, label: renderLabel('Word, PDF & JSON Documents using Python:', `${keyValue++}`) },
      ],
    },
    {
      key: `sub ${subInt++}`,
      label: renderLabel('Handling Excel Files usinf Python:', `sub ${subInt++}`, '39 lectures - 91m'),
      children: [
        { key: `${keyValue++}`, label: renderLabel('Handling Excel Files usinf Python:', `${keyValue++}`) },
      ],
    },
    {
      key: `sub ${subInt++}`,
      label: renderLabel('Classes & OOP:', `sub ${subInt++}`, '39 lectures - 91m'),
      children: [
        { key: `${keyValue++}`, label: renderLabel('Classes & OOP:', `${keyValue++}`) },
      ],
    },
    {
      key: `sub ${subInt++}`,
      label: renderLabel('Web Scraping:', `sub ${subInt++}`, '39 lectures - 91m'),
      children: [
        { key: `${keyValue++}`, label: renderLabel('Web Scraping:', `${keyValue++}`) },
      ],
    },
    {
      key: `sub ${subInt++}`,
      label: renderLabel('Writing GUIs in Python(The Graphical User Interface Application):', `sub ${subInt++}`, '39 lectures - 91m'),
      children: [
        { key: `${keyValue++}`, label: renderLabel('Writing GUIs in Python(The Graphical User Interface Application):', `${keyValue++}`) },
      ],
    },
    {
      key: `sub ${subInt++}`,
      label: renderLabel('Regular Expression:', `sub ${subInt++}`, '39 lectures - 91m'),
      children: [
        { key: `${keyValue++}`, label: renderLabel('Regular Expression:', `${keyValue++}`) },
      ],
    },{
      key: `sub ${subInt++}`,
      label: renderLabel('Network Programming:', `sub ${subInt++}`, '39 lectures - 91m'),
      children: [
        { key: `${keyValue++}`, label: renderLabel('Network Programming:', `${keyValue++}`) },
      ],
    },
    {
      key: `sub ${subInt++}`,
      label: renderLabel('Flask', `sub ${subInt++}`, '39 lectures - 91m'),
      children: [
        { key: `${keyValue++}`, label: renderLabel('Flask', `${keyValue++}`) },
      ],
    },
    {
      key: `sub ${subInt++}`,
      label: renderLabel('MySQL Database in Python:', `sub ${subInt++}`, '39 lectures - 91m'),
      children: [
        { key: `${keyValue++}`, label: renderLabel('MySQL Database in Python:', `${keyValue++}`) },
      ],
    },
  ];

  return <div className='dropdown-left-menu'> <Menu mode="inline" selectedKeys={[selectedKey]} onClick={handleSelect} items={items} /> </div>;

}
