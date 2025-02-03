import { FC } from "react";
import { IProfileData } from "../../../mockData/ProfileData";
import { setProfilePage } from "../../../redux/slices/profile/profile.slice";
import { useAppDispatch } from "../../../redux/store";
import { IF } from "../../../ui_kits/IF";
import { isEmpty } from "../../../utils/script";

interface IProps {
  data: IProfileData;
}

export const ProfileContent: FC<IProps> = ({ data }: IProps) => {
  const dispatch = useAppDispatch();

  const handleSelectChange = () => {
    dispatch(setProfilePage(data.url));
  };

  return (
    <div onClick={handleSelectChange}>
      <IF condition={!isEmpty(data.img)}>
        <img className="ProfileImage" alt={data.title} src={data.img} />
      </IF>
      <div className="ProfileText">
        <h4 className="Heading Text--subdued">{data.title} &nbsp; ⪢</h4>
        <p className="recommended-description">{data.description}</p>
      </div>
    </div>
  );
};
