import react, {useState} from "react";
import POSITION_INFO from "../object/PositionInfo.js";

function PositionInfoState()
{
    const [obj, setObj] = useState(POSITION_INFO);
    return {obj, setObj};
}

export default PositionInfoState;
