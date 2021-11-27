import { Router } from 'express';

const roadmapRoute = Router();

roadmapRoute.get('/', (req, res, next) => {
    const roadMap = [
        {
            title: "Q3 2021",
            todos: [
                {
                    contents: "Initial idea generation about the BullTycoons NFT",
                    completed: true
                },
                {
                    contents: "Team building and art designs",
                    completed: true
                },
            ],
            bg: "#232323"/* "#800324" */,
            color: "#ffffff"
            
        },
        {
            title: "Q4 2021",
            todos: [
                {
                    contents: "Smart contract and website development",
                    completed: true
                },
                {
                    contents: "Community Building Rollup (Twitter & Discord)",
                    completed: true
                },
                {
                    contents: "Smart contract deployment to the Polygon testnet",
                    completed: false
                },
                {
                    contents: "Smart contract deployment to the Polygon mainnet and website launch",
                    completed: false
                },
                {
                    contents: "Mint date announced",
                    completed: false
                },
                {
                    contents: "Mint starts",
                    completed: false
                },
                {
                    contents: "NFT drop to Bull Generals",
                    completed: false
                },
            ],
            bg: "#232323",
            color: "#ffffff"
        },
        {
            title: "Q1 2022",
            todos: [
                {
                    contents: "Bull Fight Club Game development to reward BullTycoons NFT holders",
                    completed: false
                },
                {
                    contents: "Test release of the game to the community",
                    completed: false
                },
                {
                    contents: "Expansion of the BullTycoons community",
                    completed: false
                }
            ],
            bg: "#232323"/* "#0acaf3" */,
            color:"#ffffff"
        }
    ];

    res.status(200).json(roadMap);
});

export {
    roadmapRoute
}