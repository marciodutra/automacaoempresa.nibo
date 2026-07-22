import http from "k6/http";


export const options={


vus:100,


duration:"4h",


thresholds:{


http_req_failed:[
"rate<0.01"
],


http_req_duration:[
"p(95)<5000"
]


}


};



export default function(){


http.get(

"https://empresa.nibo.com.br"

);


}