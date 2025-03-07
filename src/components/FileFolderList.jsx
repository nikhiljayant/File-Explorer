import React, { useState } from "react";
// JSON
import data from "../data/data.json";

const List = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState([]);

  const handleOpenCloseFolder = (folderName) => {
    if (isExpanded.includes(folderName)) {
      const updated = isExpanded.filter((item) => item !== folderName);
      setIsExpanded(updated);
    } else {
      setIsExpanded([...isExpanded, folderName]);
    }
  };

  return (
    <div className="pl-[20px] flex flex-col gap-[5px]">
      {data?.children?.length > 0 &&
        data?.children?.map((item) => (
          <div key={item?.name} className="flex flex-col gap-[5px]">
            <div className="flex gap-[5px]">
              <div>{item?.name}</div>
              <div
                className="cursor-pointer"
                onClick={() => handleOpenCloseFolder(item?.name)}
              >
                {item?.type === "folder" &&
                  (isExpanded.includes(item?.name) ? "-" : "+")}
              </div>
            </div>
            {isExpanded.includes(item?.name) && item?.children?.length > 0 && (
              <List data={item} />
            )}
          </div>
        ))}
    </div>
  );
};

const FileFolderList = () => {
  return (
    <div className="flex flex-col gap-[5px] pl-[10px]">
      {data?.name}
      <List data={data} />
    </div>
  );
};

export default FileFolderList;
