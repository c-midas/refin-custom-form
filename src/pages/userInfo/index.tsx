
import { CustomForm } from "../../components/customForm";
import { userFormInfo } from "../../configs/form";

export const UserInfo = () => {
    return(
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px"}}>
            <CustomForm 
                {...userFormInfo}
            />
        </div>
    )
}
