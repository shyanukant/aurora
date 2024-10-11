import axios from "axios";

const BASE_URL='https://aurora-api-rttx.onrender.com/api/api' //Replace with System PC IP address

const getBardApi=(userMsg)=>axios.get(BASE_URL+"?ques="+userMsg);

export default{
    getBardApi
}