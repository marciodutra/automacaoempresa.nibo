import http from "k6/http";
import {check,sleep} from "k6";


export const options={


stages:[

{
duration:"2m",
target:20
},

{
duration:"5m",
target:100
},

{
duration:"2m",
target:0
}


],


thresholds:{


http_req_duration:[
"p(95)<5000"
],


http_req_failed:[
"rate<0.05"
]


}


};



export default function(){


const email =
`performance_${Date.now()}@teste.com`;


const body={


name:
"Performance QA",


email:


email,


password:

"Teste@12345"


};


const res=

http.post(

"https://empresa.nibo.com.br/Register",

JSON.stringify(body),

{

headers:{

"Content-Type":
"application/json"

}

}

);



check(

res,

{

"registration accepted":

(r)=>
r.status===200 ||
r.status===201 ||
r.status===302


}

);



sleep(1);


}