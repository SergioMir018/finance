import React from "react";

interface CardHeadTextProps {
  title: string;
  subtitle?: string;
}

export const CardHeadText: React.FC<CardHeadTextProps> = ({
  title,
  subtitle,
}) => {
  return (
    <>
      <h1 className="text-xl mb-2 font-semibold ">{title}</h1>
      <p className="text-sm text-gray-400">{subtitle}</p>
    </>
  );
};
