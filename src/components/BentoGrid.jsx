import React from "react";
import styles from "./BentoGrid.module.css"; // Optional CSS file

const BentoGrid = ({ className, children }) => {
  return (
    <div className={`grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ${className}`}>
      {children}
    </div>
  );
};

const BentoGridItem = ({ className, title, description, header, icon }) => {
  return (
    <div
      className={`row-span-1 rounded-xl hover:shadow-xl transition duration-200 shadow-lg p-6 bg-white border border-gray-200 flex flex-col space-y-4 ${className}`}
    >
      {header}
      <div className="transition duration-200">
        {icon}
        <h3 className="font-bold text-gray-700 mb-2 mt-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export { BentoGrid, BentoGridItem };
