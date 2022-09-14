export class GlobalService {
    static routes: any;
    static routesBlocked: any = {

        routes: [{
            path: '*',
            method: 'get'
        },
        {
            path: '/api',
            method: 'get'
        },
        {
            path: '/api/router',
            method: 'post'
        },
        {
            path: '/api/router',
            method: 'get'
        },
        {
            path: '/api/router/:id',
            method: 'get'
        },
        {
            path: '/api/router/:id',
            method: 'patch'
        },
        {
            path: '/api/router/:id',
            method: 'delete'
        },
        {
            path: '/api/error',
            method: 'get'
        }, {
            path: '/api/v1/swagger',
            method: 'get'
        }, {
            path: '/api/v1/swagger-json',
            method: 'get'
        },
        ]

    }
}