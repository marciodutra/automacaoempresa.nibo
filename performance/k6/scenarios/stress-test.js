import http from "k6/http";


export const options={


stages:[


{
duration:"5m",
target:100
},


{
duration:"5m",
target:300
},


{
duration:"5m",
target:500
},


{
duration:"5m",
target:0
}


]


};



export default function(){


http.get(

"https://empresa.nibo.com.br"

);


}