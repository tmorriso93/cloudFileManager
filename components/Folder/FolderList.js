import React, { useState } from "react";
import FolderItem from "./FolderItem";
import { useRouter } from "next/router";

function FolderList({ folderList }) {
  const [activeFolder, setActiveFolder] = useState();
  const router = useRouter();
  // const folderList=[
  //         {
  //             id:1,
  //             name:'Folder 1 to Test Big Text'
  //         },
  //         {
  //             id:2,
  //             name:'Folder 2'
  //         },
  //         {
  //             id:3,
  //             name:'Folder 3'
  //         },
  //         {
  //             id:4,
  //             name:'Folder 4'
  //         },
  //         {
  //             id:5,
  //             name:'Folder 4'
  //         },
  //     ]

  const onFolderClick = (index, item) => {
    setActiveFolder(index);
    router.push({
      pathname: "/folder/" + item.id,
      query: {
        name: item.name,
        id: item.id,
      },
    });
  };

  return (
    <div className="p-5 mt-5 bg-white rounded-lg">
      <h2 className="text-17px font-bold items-center text-gray-700">
        Recent Folders{" "}
        <span
          className="float-right text-blue-200
                font-normal text-[13px]"
        >
          View All
        </span>
      </h2>
      <div
        className="grid grid-cols-2 max-sm:grid-cols-1 
            md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5
            mt-3 gap-4"
      >
        {folderList.map((item, index) => (
          <div key={index} onClick={() => onFolderClick(index, item)}>
            <FolderItem folder={item} activeFolder={activeFolder == index} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FolderList;
