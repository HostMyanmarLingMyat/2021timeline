import { readFile } from 'fs'
import { returnFunc } from './return-func'
const path = "app/models/week2"
export const feb8 = (req, res) => {
    readFile(path + '/feb8.json', (err, data) => {
        returnFunc(err, data, res)
    })
}

export const feb9 = (req, res) => {
    readFile(path + '/feb9.json', (err, data) => {
        returnFunc(err, data, res)
    })
}

export const feb10 = (req, res) => {
    readFile(path + '/feb10.json', (err, data) => {
        returnFunc(err, data, res)
    })
}

export const feb11 = (req, res) => {
    readFile(path + '/feb11.json', (err, data) => {
        returnFunc(err, data, res)
    })
}

export const feb12 = (req, res) => {
    readFile(path + '/feb12.json', (err, data) => {
        returnFunc(err, data, res)
    })
}

export const feb13 = (req, res) => {
    readFile(path + '/feb13.json', (err, data) => {
        returnFunc(err, data, res)
    })
}

export const feb14 = (req, res) => {
    readFile(path + '/feb14.json', (err, data) => {
        returnFunc(err, data, res)
    })
}
