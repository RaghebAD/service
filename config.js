'use strict';

module.exports = {
    type: 'service',
    prerequisites: {
        cpu: '',
        memory: ''
    },
    "serviceVersion": 1,
    "serviceName": "example",
    "serviceGroup": "SOAJS Core Services",
    "servicePort": 4009,
    "requestTimeout": 30,
    "requestTimeoutRenewal": 5,
    "extKeyRequired": true,
    "oauth": true,
    "maintenance": {
        "commands": [
            {"label": "Releoad Provision", "path": "/loadProvision", "icon": "provision"}
        ]
    },
    "hashIterations": 1024,
    "seedLength": 32,
    "model": 'mongo',
    "loginMode": "oauth",
    "errors": {
    },
    "schema": {
        "get": {
            '/testGet': {
                "_apiInfo": {
                    "l": "test get",
                    "group": "Read"
                },
            }
        },
        "post": {
            '/testPost': {
                "_apiInfo": {
                    "l": "test post",
                    "group": "Write"
                },
            }
        },
        "put": {
            '/testPut': {
                "_apiInfo": {
                    "l": "test put",
                    "group": "Update"
                },
            }
        },
        "delete": {
            '/testDelete': {
                "_apiInfo": {
                    "l": "test delete",
                    "group": "Delete"
                },
            }
        },
        "patch": {
            '/testPatch': {
                "_apiInfo": {
                    "l": "test patch",
                    "group": "Patch"
                },
            }
        },
        "head": {
            '/testHead': {
                "_apiInfo": {
                    "l": "test head",
                    "group": "Head"
                },
            }
        },
        "test": {
            '/testOther': {
                "_apiInfo": {
                    "l": "test other",
                    "group": "Other"
                },
            }
        }
    }
};
