import React from "react";
import Draggable from "react-draggable";
import { Menu } from "@headlessui/react";
import {
  IconLibrary,
  IconJSON,
  IconCheckbox,
  IconMessage,
  IconPost,
  IconSend,
} from "../Icons";

type MenuItem = {
  name: string;
  icon: JSX.Element;
};

const menuItems: MenuItem[] = [
  { name: "Links Library", icon: <IconLibrary /> },
  { name: "JSON Generator", icon: <IconJSON /> },
  { name: "Checkbox Plugin", icon: <IconCheckbox /> },
  { name: "Messenger Code", icon: <IconMessage /> },
  { name: "Post Engagement", icon: <IconPost /> },
  { name: "Send to Messenger", icon: <IconSend /> },
];

const Widget: React.FC = () => {
  return (
    <Draggable bounds={{ top: -70, left: -100, right: 10, bottom: 70 }}>
      <div
        className="bg-white p-6 shadow-lg rounded-md cursor-pointer min-w-[13rem]"
        style={{ overflowY: "hidden" }}
      >
        <div className="text-sm font-semibold pb-2 mb-1">Capture Tools</div>
        <Menu as="div" className="flex flex-col space-y-2">
          {menuItems.map((item, index) => (
            <Menu.Item key={index}>
              {({ active }) => (
                <a
                  href="#"
                  className={`flex items-center space-x-2 px-0 py-1 text-sm ${
                    active ? "bg-gray-200" : "bg-white"
                  }`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </a>
              )}
            </Menu.Item>
          ))}
        </Menu>
      </div>
    </Draggable>
  );
};

export default Widget;
