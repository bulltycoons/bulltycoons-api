# BullTycoons API
This is the engine that runs the metadata and bull fightclub.

## Requests
---

### 1. To add metadata to database
> POST `{BASE_URL}/api/add`

Example Body:
```json
{"attributes":[{"id":2,"trait_type":"Background","value":"golfcourse","rarity":"original"},{"id":1,"trait_type":"Base","value":"brown+angry","rarity":"original"},{"id":7,"trait_type":"Clothings","value":"joggers","rarity":"original"},{"id":12,"trait_type":"Hair","value":"kakashi","rarity":"original"},{"id":4,"trait_type":"Horn","value":"none","rarity":"original"},{"trait_type":"Agility","value":6},{"trait_type":"Strength","value":8},{"trait_type":"Stamina","value":5},{"trait_type":"Defence","value":9},{"trait_type":"Offence","value":9},{"trait_type":"Speed","value":7},{"trait_type":"Wins","value":0,"display_type":"number"},{"trait_type":"Loses","value":0,"display_type":"number"}],"date":1636430742179,"hash":"02112731244","image":"https://gateway.pinata.cloud/ipfs/QmUTPffXqjZ3eK4PkHmCCKbjMeKKu1r1w6DhJToBsWQPoF/7.png","description":"BullTycoons is a layered NFT project randomly generated, having distinct properties to form a genus with each property depicting a particular Tycoon","name":"BullTycoon #7","id":7}
```

### 2. To get metadata from API
> GET `{BASE_URL}/api/{tokenId}`

### 3. TEST: to update figher traits after winning. Multiplier indicates the amount of boost to be added to the fighter.
> PUT `{BASE_URL}/api/{tokenId}`

Example body:
```json
{
    "multiplier": 4
}
```