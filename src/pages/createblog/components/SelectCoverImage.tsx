import { useRef } from "react";
import { BiImageAdd } from "react-icons/bi";
import { SelectCoverImageProps } from "../types";
const baseUrl = "https://azad.pythonanywhere.com/";


export const SelectCoverImage = ({ previewImage, onChangeHandler }: SelectCoverImageProps): JSX.Element => {
  const fileInputRef = useRef<any>();

  const selectImageOnClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    fileInputRef.current.click();
  };

  return (
    <div onClick={selectImageOnClick} className="flex flex-col items-center cursor-pointer w-full p-2 mt-2">
      {previewImage ? (
        <img src={baseUrl+previewImage} alt={"preview-profileimage"} className="rounded-md w-full h-[11.25rem] object-cover border-lightpurple border-2" />
      ) : (
        <div className="rounded-md border-lightpurple border-2 border-dotted p-2 w-full flex justify-center items-center">
          <BiImageAdd size={180} color="#8e65cf" />
        </div>
      )}

      <input type="file" name="profile-image" accept="image/*" ref={fileInputRef} onChange={onChangeHandler} className="hidden" />
    </div>
  );
};
