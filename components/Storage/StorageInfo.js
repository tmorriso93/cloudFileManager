import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { app } from "../../Config/FirebaseConfig";
import { useSession } from "next-auth/react";
import StorageSize from "../../Services/StorageSize";
import { useRouter } from "next/router"; // Import the useRouter hook

function StorageInfo() {
  const { data: session } = useSession();
  const db = getFirestore(app);
  const [totalSizeUsed, setTotalSizeUsed] = useState(0);
  const [imageSize, setImageSize] = useState(0);

  const [fileList, setFileList] = useState([]);
  let totalSize = 0;

  const router = useRouter(); // Initialize the useRouter hook

  useEffect(() => {
    if (session) {
      totalSize = 0;
      getAllFiles();
    }
  }, [session]);

  useEffect(() => {
    setImageSize(StorageSize.getStorageByType(fileList, ["png", "jpg"]));
  }, [fileList]);
  const getAllFiles = async () => {
    const q = query(
      collection(db, "files"),
      where("createdBy", "==", session.user.email)
    );
    const querySnapshot = await getDocs(q);
    setFileList([]);
    querySnapshot.forEach((doc) => {
      totalSize = totalSize + doc.data()["size"];
      setFileList((fileList) => [...fileList, doc.data()]);
    });

    setTotalSizeUsed((totalSize / 1024 ** 2).toFixed(2) + " MB");
  };

  return (
    <div className="mt-7 flex flex-col justify-between h-full">
      <div>
        <h2 className="text-[22px] font-bold">
          {totalSizeUsed}{" "}
          <span className="text-[14px] font-medium">used of</span> 50 MB
        </h2>
        <div className="w-full bg-gray-200 h-2.5 flex">
          <div className="bg-blue-600 h-2.5 w-[25%]"></div>
          <div className="bg-green-600 h-2.5 w-[35%]"></div>
          <div className="bg-yellow-400 h-2.5 w-[15%]"></div>
        </div>
      </div>
      <div className="flex-grow">
        <div className="p-2 max-sm:mt-[100px] max-md:mt-[200px] max-lg:mt-[400px]  max-xl:mt-[425px] max-2xl:mt-[425px]">
          <a
            onClick={() => router.push("/")}
            className="text-slate-700 underline cursor-pointer hover:rounded-sm hover:bg-yellow-200 focus:outline-none p-4"
          >
            Return Home
          </a>
        </div>
      </div>
    </div>
  );
}

export default StorageInfo;
