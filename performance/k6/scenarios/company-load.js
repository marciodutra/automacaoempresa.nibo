import http from "k6/http";
import {check,sleep} from "k6";


export const options={


vus:50,

duration:"10m",


thresholds:{


http_req_duration:[
"p(95)<4000"
],


http_req_failed:[
"rate<0.05"
]


}


};



export default function(){


const response=

http.post(

"https://empresa.nibo.com.br/Organization/Create",

{

companyName:

`Empresa Performance ${Date.now()}`

}

);



check(

response,

{

"company created":

(r)=>
r.status===200 ||
r.status===302


}

);



sleep(1);


}