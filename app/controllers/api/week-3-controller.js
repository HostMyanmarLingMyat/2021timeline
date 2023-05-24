import { readFile } from 'fs'
import { returnFunc } from './return-func'
const path = "app/models/week3"
export const feb15 = (req, res) => {
    readFile(path + '/feb15.json', (err, data) => {
        returnFunc(err, data, res)
    })
}

export const feb16 = (req, res) => {
    readFile(path + '/feb16.json', (err, data) => {
        returnFunc(err, data, res)
    })
}

export const feb17 = (req, res) => {
    readFile(path + '/feb17.json', (err, data) => {
        returnFunc(err, data, res)
    })
}

export const feb18 = (req, res) => {
    readFile(path + '/feb18.json', (err, data) => {
        returnFunc(err, data, res)
    })
}

export const feb19 = (req, res) => {
    readFile(path + '/feb19.json', (err, data) => {
        returnFunc(err, data, res)
    })
}

export const feb20 = (req, res) => {
    readFile(path + '/feb20.json', (err, data) => {
        returnFunc(err, data, res)
    })
}

export const feb21 = (req, res) => {
    readFile(path + '/feb21.json', (err, data) => {
        returnFunc(err, data, res)
    })
}
