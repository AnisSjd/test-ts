import { val } from '../lib/sth'; 
import express from "express";

export const doSth: Function = (val2: Number) => console.log("sth done, values:", val, val2);
