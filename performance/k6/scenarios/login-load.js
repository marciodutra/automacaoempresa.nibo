import http from 'k6/http';
import { check, sleep } from 'k6';
import { config } from '../config/environment.js';


export const options = {

    scenarios: {

        login_load: {

            executor: "ramping-vus",

            startVUs: 0,

            stages: [

                {
                    duration: "30s",
                    target: 5
                },

                {
                    duration: "1m",
                    target: 10
                },

                {
                    duration: "30s",
                    target: 0
                }

            ]

        }

    },


    thresholds: {

        http_req_duration: [
            "p(95)<3000"
        ],

        http_req_failed: [
            "rate<0.05"
        ]

    }

};



export default function(){


    const response = http.get(

        config.baseUrl,

        {
            redirects: 5
        }

    );


    check(

        response,

        {

            "application available":

            (r)=>
                r.status === 200 ||
                r.status === 302

        }

    );


    sleep(1);

}