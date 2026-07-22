import http from "k6/http";


export const options={


stages:[


{
duration:"30s",
target:10
},


{
duration:"1m",
target:500
},


{
duration:"30s",
target:10
}


]


};



export default function(){


http.get(

"https://empresa.nibo.com.br"

);


}