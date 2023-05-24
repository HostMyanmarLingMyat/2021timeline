import { readFile } from 'fs'
import { returnFunc } from './return-func'
const path = "app/models/week1"
export const feb1 = (req, res) => {
    readFile(path + '/feb1.json', (err, data) => {
        returnFunc(err, data, res)
    })
}

export const feb2 = (req, res) => {
    readFile(path + '/feb2.json', (err, data) => {
        returnFunc(err, data, res)
    })
}

export const feb3 = (req, res) => {
    readFile(path + '/feb3.json', (err, data) => {
        returnFunc(err, data, res)
    })
}

export const feb4 = (req, res) => {
    readFile(path + '/feb4.json', (err, data) => {
        returnFunc(err, data, res)
    })
}

export const feb5 = (req, res) => {
    readFile(path + '/feb5.json', (err, data) => {
        returnFunc(err, data, res)
    })
}

export const feb6 = (req, res) => {
    readFile(path + '/feb6.json', (err, data) => {
        returnFunc(err, data, res)
    })
}

export const feb7 = (req, res) => {
    readFile(path + '/feb7.json', (err, data) => {
        returnFunc(err, data, res)
    })
}