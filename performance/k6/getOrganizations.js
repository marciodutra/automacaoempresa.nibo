import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    vus: 5,
    duration: '30s',
};

const TOKEN = 'COLE_SEU_TOKEN_AQUI';

export default function () {

    const params = {
        headers: {
            Authorization: `Bearer ${TOKEN}`,
            Accept: 'application/json'
        }
    };

    const response = http.get(
        'https://empresa.nibo.com.br/Organization/GetOrganizations',
        params
    );

    check(response, {
        'Status 200': (r) => r.status === 200,
    });

    sleep(1);
}