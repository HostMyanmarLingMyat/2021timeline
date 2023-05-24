import { readFile } from 'fs'
import { returnFunc } from './return-func'
const path = "app/models/week4"
export const feb22 = (req, res) => {
    readFile(path + '/feb22.json', (err, data) => {
        returnFunc(err, data, res)
    })
}

export const feb23 = (req, res) => {
    readFile(path + '/feb23.json', (err, data) => {
        returnFunc(err, data, res)
    })
}

export const feb24 = (req, res) => {
    readFile(path + '/feb24.json', (err, data) => {
        returnFunc(err, data, res)
    })
}

export const feb25 = (req, res) => {
    readFile(path + '/feb25.json', (err, data) => {
        returnFunc(err, data, res)
    })
}

export const feb26 = (req, res) => {
    readFile(path + '/feb26.json', (err, data) => {
        returnFunc(err, data, res)
    })
}

export const feb27 = (req, res) => {
    readFile(path + '/feb27.json', (err, data) => {
        returnFunc(err, data, res)
    })
}

export const feb28 = (req, res) => {
    readFile(path + '/feb28.json', (err, data) => {
        returnFunc(err, data, res)
    })
}
