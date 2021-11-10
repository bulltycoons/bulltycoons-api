import { Router } from 'express';

const contractRoute = Router();

contractRoute.get('/', (req, res, next) => {
    const contractMetadata = {
        name: "BullTycoons v2",
        description: "BullTycoons is a layered NFT project randomly generated, having distinct properties to form a genus with each property depicting a particular Tycoon",
        image: "https://gateway.pinata.cloud/ipfs/Qmc2XRojiFQcP9wVEjvDZyZ18dh5Ko2ErCjfcn1i86LLix",
        external_link: "http://bulltycoons.com",
        seller_fee_basis_points: 500,
        fee_recipient: "0x7B54A0A1A89F4bf4796e1F92b3f28e64dB503385" // Where seller fees will be paid to.
    }
    res.status(200).json(contractMetadata);
});

export {
    contractRoute
}