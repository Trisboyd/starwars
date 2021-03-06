// this testing is really just for if we created the API ourselves, but I thought I'd
// include an example of using msw which is a tool I just began experimenting with recently

import { rest } from 'msw';

export const handlers = [
    rest.get("https://swapi.dev/api//people/?search=luke", (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                "count": 1,
                "next": null,
                "previous": null,
                "results": [
                    {
                        "name": "Luke Skywalker",
                        "height": "172",
                        "mass": "77",
                        "hair_color": "blond",
                        "skin_color": "fair",
                        "eye_color": "blue",
                        "birth_year": "19BBY",
                        "gender": "male",
                        "homeworld": "https://swapi.dev/api/planets/1/",
                        "films": [
                            "https://swapi.dev/api/films/1/",
                            "https://swapi.dev/api/films/2/",
                            "https://swapi.dev/api/films/3/",
                            "https://swapi.dev/api/films/6/"
                        ],
                        "species": [],
                        "vehicles": [
                            "https://swapi.dev/api/vehicles/14/",
                            "https://swapi.dev/api/vehicles/30/"
                        ],
                        "starships": [
                            "https://swapi.dev/api/starships/12/",
                            "https://swapi.dev/api/starships/22/"
                        ],
                        "created": "2014-12-09T13:50:51.644000Z",
                        "edited": "2014-12-20T21:17:56.891000Z",
                        "url": "https://swapi.dev/api/people/1/"
                    }
                ]
            })
        )
    }),
    rest.get('https://swapi.dev/api/starships/13/', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                "name": "TIE Advanced x1",
                "model": "Twin Ion Engine Advanced x1",
                "manufacturer": "Sienar Fleet Systems",
                "cost_in_credits": "unknown",
                "length": "9.2",
                "max_atmosphering_speed": "1200",
                "crew": "1",
                "passengers": "0",
                "cargo_capacity": "150",
                "consumables": "5 days",
                "hyperdrive_rating": "1.0",
                "MGLT": "105",
                "starship_class": "Starfighter",
                "pilots": [
                    "https://swapi.dev/api/people/4/"
                ],
                "films": [
                    "https://swapi.dev/api/films/1/"
                ],
                "created": "2014-12-12T11:21:32.991000Z",
                "edited": "2014-12-20T21:23:49.889000Z",
                "url": "https://swapi.dev/api/starships/13/"
            })
        )
    }),
    rest.get('https://swapi.dev/api/films/1/', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                "title": "A New Hope",
                "episode_id": 4,
                "opening_crawl": "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
                "director": "George Lucas",
                "producer": "Gary Kurtz, Rick McCallum",
                "release_date": "1977-05-25",
                "characters": [
                    "https://swapi.dev/api/people/1/",
                    "https://swapi.dev/api/people/2/",
                    "https://swapi.dev/api/people/3/",
                    "https://swapi.dev/api/people/4/",
                    "https://swapi.dev/api/people/5/",
                    "https://swapi.dev/api/people/6/",
                    "https://swapi.dev/api/people/7/",
                    "https://swapi.dev/api/people/8/",
                    "https://swapi.dev/api/people/9/",
                    "https://swapi.dev/api/people/10/",
                    "https://swapi.dev/api/people/12/",
                    "https://swapi.dev/api/people/13/",
                    "https://swapi.dev/api/people/14/",
                    "https://swapi.dev/api/people/15/",
                    "https://swapi.dev/api/people/16/",
                    "https://swapi.dev/api/people/18/",
                    "https://swapi.dev/api/people/19/",
                    "https://swapi.dev/api/people/81/"
                ],
                "planets": [
                    "https://swapi.dev/api/planets/1/",
                    "https://swapi.dev/api/planets/2/",
                    "https://swapi.dev/api/planets/3/"
                ],
                "starships": [
                    "https://swapi.dev/api/starships/2/",
                    "https://swapi.dev/api/starships/3/",
                    "https://swapi.dev/api/starships/5/",
                    "https://swapi.dev/api/starships/9/",
                    "https://swapi.dev/api/starships/10/",
                    "https://swapi.dev/api/starships/11/",
                    "https://swapi.dev/api/starships/12/",
                    "https://swapi.dev/api/starships/13/"
                ],
                "vehicles": [
                    "https://swapi.dev/api/vehicles/4/",
                    "https://swapi.dev/api/vehicles/6/",
                    "https://swapi.dev/api/vehicles/7/",
                    "https://swapi.dev/api/vehicles/8/"
                ],
                "species": [
                    "https://swapi.dev/api/species/1/",
                    "https://swapi.dev/api/species/2/",
                    "https://swapi.dev/api/species/3/",
                    "https://swapi.dev/api/species/4/",
                    "https://swapi.dev/api/species/5/"
                ],
                "created": "2014-12-10T14:23:31.880000Z",
                "edited": "2014-12-20T19:49:45.256000Z",
                "url": "https://swapi.dev/api/films/1/"
            })
        )
    })
]