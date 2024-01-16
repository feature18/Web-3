import {useSelector} from "react-redux";
import {RootState} from "../store/store";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {Button} from "@mui/material";
import {useCreateReviewMutation} from "../store/reviewApi";

export const Authorized = ()=>{
    const token = useSelector((state: RootState)=> state.auth.token)
    const userId = useSelector((state: RootState)=> state.auth.userId)
    const [createReview] = useCreateReviewMutation()

    const navigate = useNavigate()

    useEffect(()=>{
        if (!token) {
            navigate("/auth")
        }
    }, [token])

    return <div>Authorized<Button onClick={()=>createReview({userId})}>Post review</Button></div>
}