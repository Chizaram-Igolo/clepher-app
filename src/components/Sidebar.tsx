import { useState } from "react";

import {
  IconAudience,
  IconMessaging,
  IconDashboard,
  IconCaptureTools,
  IconCharts,
  IconSettings,
  IconStacks,
  IconAutomation,
  IconBroadcasts,
} from "../Icons";

type MenuItem = {
  title: string;
  src: JSX.Element;
};

const menus: MenuItem[] = [
  { title: "Dashboard", src: <IconDashboard /> },
  { title: "Audience", src: <IconAudience /> },
  { title: "Messaging", src: <IconMessaging /> },
  { title: "Capture Tools", src: <IconCaptureTools /> },
  { title: "Broadcasts", src: <IconBroadcasts /> },
  { title: "Automation", src: <IconAutomation /> },
  { title: "Stacks", src: <IconStacks /> },
  { title: "Charts", src: <IconCharts /> },

  { title: "Settings", src: <IconSettings /> },
];

const App = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex h-screen">
      <div className={` ${open ? "w-72" : "w-20 "} relative duration-300`}>
        <img
          src="./control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <ul className="pt-6 pl-5 bg-white h-full">
          {menus.map((menu, index) => (
            <li
              key={index}
              className={`flex mt-2 rounded-md p-2 cursor-pointer hover:bg-purple-100 text-gray-800 text-md items-center gap-x-4`}
            >
              <span className="inline-block h-6 pt-[3px]">{menu.src}</span>
              <span
                className={`${
                  !open && "opacity-0 hidden"
                } origin-left duration-400 inline-block h-6`}
              >
                {menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default App;
