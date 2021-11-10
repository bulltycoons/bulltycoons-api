import { NextFunction, Request, Response } from 'express';
import { Attribute, MetadataRequestInterface } from '../models/metadata';
import { COLLECTION_NAME } from '../src/config';
import { db } from "../src/db";
import { setDoc, doc, getDoc, runTransaction } from "firebase/firestore";
import assert from 'assert';


export const healthCheck = async (req:Request, res:Response, next:NextFunction) => {
    res.send("Perfectly working!");
}

export const addMetadata = async (req: Request, res: Response, next: NextFunction) => {
    const { body }:MetadataRequestInterface = req;
    try {
        const response = await setDoc(doc(db, COLLECTION_NAME, `${body.id}`), body);
        res.status(200).send({ message: "saved successfully", response });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
};

export const getMetadataById = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
        const response = await getDoc(doc(db, COLLECTION_NAME, `${id}`));
        if (response.exists()) {
            res.status(200).json(response.data());
        } else {
            throw new Error("Not found");
        }
    }  catch (error) {
        res.status(400).send({ message: error.message });
    }
}

// Only for testing... Update should be done automatically once fight is over --
export const updateMetadataAttributesById = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const { multiplier } = req.body;
    const metadataDoc = doc(db, COLLECTION_NAME, `${id}`);
    try {
        assert(multiplier !== undefined, "multiplier is required");
        const response = await runTransaction(db, async (transaction) => {
            const metadata = await transaction.get(metadataDoc);
            if (!metadata.exists()) throw new Error("Metadata does not exist");
            const attributes: Attribute[] = metadata.data().attributes;
            // Run through the attributes list and find the fighter attributes to increase...
            const fighterTraits = ["Agility","Strength","Stamina","Defence","Offence","Speed"];
            const newAttributes: Attribute[] = [];
            attributes.forEach((attr) => {
                if (fighterTraits.includes(attr.trait_type)) {
                    attr.value = Number(attr.value) + Number(multiplier);
                }
                if (attr.trait_type == "Wins" && multiplier > 0) attr.value = Number(attr.value) + 1;
                if (attr.trait_type == "Loses" && multiplier == 0) attr.value = Number(attr.value) + 1;

                newAttributes.push(attr);
            });
            transaction.update(metadataDoc, {
                attributes: newAttributes
            });
            return newAttributes;
        });
        res.status(200).json({ id, attributes: response });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }

}